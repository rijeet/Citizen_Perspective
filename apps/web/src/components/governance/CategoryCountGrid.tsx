import { Link } from '@/i18n/navigation';
import type { CategoryView } from '@/lib/api';

type Props = {
  categories: CategoryView[];
  activeCategory?: string;
};

export default function CategoryCountGrid({ categories, activeCategory }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat) => {
        const active = activeCategory === cat.slug;
        return (
          <Link
            key={cat.id}
            href={
              active
                ? '/incidents'
                : `/incidents?category=${encodeURIComponent(cat.slug)}`
            }
            className={`rounded-xl border p-4 transition-colors ${
              active
                ? 'border-archive-accent bg-archive-accent/5'
                : 'border-archive-border bg-white hover:border-archive-muted'
            }`}
          >
            <p className="text-sm font-semibold text-archive-fg">{cat.name}</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-archive-accent">
              {cat.incidentCount}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
