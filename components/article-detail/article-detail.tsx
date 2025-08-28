import CommentList from "@/components/article-detail/comment";
import { Article } from "@/models/article";

const ArticleDetail = ({ id, title, content }: Article) => {
  return (
    <div>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>

      
    </div>
  );
};

export default ArticleDetail;
