export interface Comment {
  id: number;
  message: string;
  articleId: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
}

export interface ArticleList {
  items: Article[];
}
