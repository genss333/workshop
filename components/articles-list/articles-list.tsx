import * as types from "@/models/article";
import Link from "next/link";
const ArticleList = ({ items: article }: types.ArticleList) => {
  return (
    <>
      {article?.map((article) => (
        <Link href={`/articles/${article.id}`} key={article.id}>
          หัวข้อ
          <div>{article.title}</div>
          บทความ<div>{article.content}</div>
          <hr></hr>
        </Link>
      ))}
    </>
  );
};

export default ArticleList;
