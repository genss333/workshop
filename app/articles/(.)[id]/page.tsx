import ArticleDetailsModal from "@/components/article-detail/article-detail-modal";
import ArticleList from "@/components/articles-list/articles-list";
import * as types from "@/models/article";
import { Article } from "@/models/article";

interface ArticleDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams?: {
    page?: number;
  };
}

const ArticleDetailsPage = async ({
  params,
  searchParams,
}: ArticleDetailsPageProps) => {
  const { id } = await params;

  const page = searchParams?.page || 1;

  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles?page=${page}`;
  const resarticlelist = await fetch(url, { cache: "no-store" });
  const data = await (resarticlelist.json() as Promise<types.ArticleList>);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`, {
    cache: "no-store",
  });
  const article = await (res.json() as Promise<Article>);

  return (
    <>
      <ArticleDetailsModal {...article} />
      <ArticleList {...data} />
    </>
  );
};

export default ArticleDetailsPage;
