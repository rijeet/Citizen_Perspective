FROM node:22-alpine AS builder

WORKDIR /workspace

COPY package.json package-lock.json ./
COPY packages/shared ./packages/shared
COPY apps/api ./apps/api

RUN npm ci
RUN npm run build -w api

FROM node:22-alpine

WORKDIR /workspace

ENV NODE_ENV=production

COPY package.json package-lock.json ./
COPY packages/shared ./packages/shared
COPY apps/api ./apps/api

RUN npm ci --omit=dev

COPY --from=builder /workspace/apps/api/dist ./apps/api/dist
COPY --from=builder /workspace/node_modules/.prisma ./node_modules/.prisma

EXPOSE 3001

CMD ["sh", "-c", "cd apps/api && npx prisma migrate deploy && NODE_PATH=/workspace/node_modules node dist/src/main.js"]
