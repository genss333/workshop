import ArticleDetailsModal from "@/components/article-detail/article-detail-modal";
import { Article } from "@/models/article";

interface ArticleDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ArticleDetailsPage = async ({ params }: ArticleDetailsPageProps) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`, {
    cache: "no-store",
  });
  const article = await (res.json() as Promise<Article>);

  return <ArticleDetailsModal {...article} />;
};

export default ArticleDetailsPage;
