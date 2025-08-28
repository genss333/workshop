import ArticleList from "@/components/articles-list/articles-list";
import Pagination from "@/components/Pagin/Pagination";
import * as types from "@/models/article";
interface ArticlesPageProps {
  searchParams: Promise<{
    page?: number;
  }>;
}

const ArticlesPage = async (params: ArticlesPageProps) => {
  const searchParams = await params.searchParams;
  const page = searchParams.page || 1;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/articles`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await (res.json() as Promise<types.ArticleList>);
  console.log(data);

  return (
    <div>
      <ArticleList {...data}></ArticleList>
      <Pagination {...data.paging}></Pagination>
    </div>
  );
};
export default ArticlesPage;
