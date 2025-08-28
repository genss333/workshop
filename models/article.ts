export interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

export interface Paging {
  limit: number;
  totalPages: number;
  currentPage: number;
  prevPage: number | null;
  nextPage: number | null;
  totalItems: number;
}

export interface Article {
  id: number;
  title: string;
  content: string;
}

export interface ArticleList {
  items: Article[];
  paging: Paging;
}
