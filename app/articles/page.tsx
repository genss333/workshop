import ArticleList from "@/components/articles-list/articles-list";
import * as types from "@/models/article";
interface ArticlesPageProps {
  searchParams: Promise<{
    page?: number;
  }>;
}

const ArticlesPage = async (params: ArticlesPageProps) => {
  const searchParams = await params.searchParams;
  const page = searchParams.page || 1;
  const url = `http://localhost:3663/articles?page=${page}`;

  const res = await fetch(url);
  const data = await (res.json() as Promise<types.ArticleList>);
  console.log(data);

  return <ArticleList {...data}></ArticleList>;
};
export default ArticlesPage;
