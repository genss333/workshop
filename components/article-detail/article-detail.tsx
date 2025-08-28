import { Article } from "@/models/article";

const ArticleDetailComponent = ({ id, title, content }: Article) => {
  return (
    <div>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </div>
  );
};

export default ArticleDetailComponent;
