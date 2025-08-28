import ArticleDetailComponent from "@/components/article-detail/article-detail";
import { Article } from "@/models/article";

interface ArticleDetailPageProps {
  params: Promise<{ id: string }>;
}

const ArticleDetailPage = async ({ params }: ArticleDetailPageProps) => {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
    { cache: "no-store" }
  );
  const data: Article = await response.json();

  return (
    <div>
      <ArticleDetailComponent {...data} />
    </div>
  );
};

export default ArticleDetailPage;
