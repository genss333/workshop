"use client";

import { Comment } from "@/models/article";
import { useEffect, useState } from "react";

const CommentList = ({ id }: { id: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/comments?articleId=${id}`
      );
      const data = await response.json();
      setComments(data.items);
    };
    if (id) {
      fetchComments();
    }
  }, [id]);

  return (
    <div>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.message}</p>
            </li>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </ul>
    </div>
  );
};

export default CommentList;
