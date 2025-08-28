export interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;   
}

export interface Article {
  id: number;
  name: string;
  image: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt?: string;
  comments?: Comment[]; 
}
