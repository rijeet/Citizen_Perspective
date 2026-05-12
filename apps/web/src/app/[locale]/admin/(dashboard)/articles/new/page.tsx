import ArticleForm from '@/components/admin/ArticleForm';

export default async function AdminNewArticlePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const c = category?.trim();
  return (
    <ArticleForm mode="create" defaultCategory={c || undefined} />
  );
}
