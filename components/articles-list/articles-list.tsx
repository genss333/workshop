import * as types from "@/models/article";
import Link from "next/link";
const ArticleList = ({ items: article }: types.ArticleList) => {
  return (
    <>
      {article?.map((article) => (
        <div key={article.id}>
          หัวข้อ
          <div>{article.title}</div>
          บทความ<div>{article.content}</div>
          <hr></hr>
        </div>
      ))}
    </>
  );
};

export default ArticleList;
