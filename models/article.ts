export interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
}

export interface ArticleList {
  items: Article[];
}
