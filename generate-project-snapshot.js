#!/usr/bin/env node
/**
 * generate-project-snapshot.js
 *
 * Walks a project folder, builds a directory tree, and dumps every file's
 * content underneath it into a single Markdown file — useful for sharing
 * your whole project structure + code in one file (e.g. to paste into a
 * chat, or keep as a dated snapshot).
 *
 * USAGE:
 *   node generate-project-snapshot.js [rootPath] [outputFile]
 *
 * EXAMPLES:
 *   node generate-project-snapshot.js
 *   node generate-project-snapshot.js . snapshot.md
 *   node generate-project-snapshot.js "E:\Project Next\Personal Digital Document Vault\document-vault" project-snapshot.md
 *
 * Defaults:
 *   rootPath   = current directory (".")
 *   outputFile = "project-snapshot.md"
 */

const fs = require('fs');
const path = require('path');

// ── Config ────────────────────────────────────────────────────────────────

const rootPath = path.resolve(process.argv[2] || '.');
const outputFile = path.resolve(process.argv[3] || 'project-snapshot.md');

// Folders to skip entirely (never descend into these)
const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'build',
  '.next',
  '.turbo',
  'coverage',
  '.vscode',
  '.idea',
  'venv',
  '.venv',
  'Code to Chunk',
  'BulkData',
  '__pycache__',
]);

// Files to skip entirely — not shown in the tree, not dumped
const IGNORE_FILES = new Set([
  '.env',
  '.env.local',
  '.env.development',
  '.env.production',
  '.env.test',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
]);

// Binary / non-text extensions — skip content dump, just note the file
const BINARY_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.bmp',
  '.pdf', '.zip', '.rar', '.7z', '.exe', '.dll', '.so',
  '.woff', '.woff2', '.ttf', '.eot',
  '.mp3', '.mp4', '.mov', '.avi',
]);

// Map file extensions to Markdown code-fence language tags
const LANG_MAP = {
  '.ts': 'typescript',
  '.tsx': 'tsx',
  '.js': 'javascript',
  '.jsx': 'jsx',
  '.json': 'json',
  '.md': 'markdown',
  '.yml': 'yaml',
  '.yaml': 'yaml',
  '.html': 'html',
  '.css': 'css',
  '.scss': 'scss',
  '.sql': 'sql',
  '.sh': 'bash',
  '.ps1': 'powershell',
  '.env': 'env',
};

// ── Helpers ───────────────────────────────────────────────────────────────

function getLang(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return LANG_MAP[ext] || '';
}

function isBinary(filePath) {
  return BINARY_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

/** Recursively collect { dirs, files } respecting ignore rules, sorted. */
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const dirs = [];
  const files = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith('.') && entry.name !== '.env') {
      // still allow dotfiles like .gitignore to show, just skip noisy ones
      if (IGNORE_DIRS.has(entry.name)) continue;
    }
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      dirs.push(entry.name);
    } else {
      if (IGNORE_FILES.has(entry.name)) continue;
      files.push(entry.name);
    }
  }
  return { dirs, files };
}

/** Build the visual tree text (like the `tree` command). */
function buildTree(dir, prefix = '') {
  let output = '';
  const { dirs, files } = walk(dir);
  const items = [
    ...dirs.map((d) => ({ name: d, isDir: true })),
    ...files.map((f) => ({ name: f, isDir: false })),
  ];

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    output += `${prefix}${connector}${item.name}${item.isDir ? '/' : ''}\n`;

    if (item.isDir) {
      const nextPrefix = prefix + (isLast ? '    ' : '│   ');
      output += buildTree(path.join(dir, item.name), nextPrefix);
    }
  });

  return output;
}

/** Recursively collect all file paths (relative to rootPath), in tree order. */
function collectFiles(dir, relBase = '') {
  const { dirs, files } = walk(dir);
  let result = [];

  for (const f of files) {
    result.push(path.join(relBase, f));
  }
  for (const d of dirs) {
    result = result.concat(collectFiles(path.join(dir, d), path.join(relBase, d)));
  }
  return result;
}

// ── Main ──────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(rootPath)) {
    console.error(`Path does not exist: ${rootPath}`);
    process.exit(1);
  }

  const projectName = path.basename(rootPath);
  const timestamp = new Date().toISOString();

  let md = `# Project Snapshot: ${projectName}\n\n`;
  md += `Generated: ${timestamp}\n\n`;
  md += `Root: \`${rootPath}\`\n\n`;

  // ── Tree section ──
  md += `## Folder Structure\n\n`;
  md += '```\n';
  md += `${projectName}/\n`;
  md += buildTree(rootPath);
  md += '```\n\n';

  // ── File contents section ──
  md += `## File Contents\n\n`;

  const allFiles = collectFiles(rootPath);

  for (const relFile of allFiles) {
    const fullPath = path.join(rootPath, relFile);
    const displayPath = relFile.split(path.sep).join('/');

    md += `### \`${displayPath}\`\n\n`;

    if (isBinary(relFile)) {
      md += `_Binary file — content not included._\n\n`;
      continue;
    }
    let content;
    try {
      content = fs.readFileSync(fullPath, 'utf8');
    } catch (err) {
      md += `_Could not read file: ${err.message}_\n\n`;
      continue;
    }

    const lang = getLang(relFile);
    md += '```' + lang + '\n';
    md += content;
    if (!content.endsWith('\n')) md += '\n';
    md += '```\n\n';
  }

  fs.writeFileSync(outputFile, md, 'utf8');
  console.log(`✅ Snapshot written to: ${outputFile}`);
  console.log(`   Files included: ${allFiles.length}`);
}

main();