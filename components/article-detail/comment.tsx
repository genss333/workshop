import { useEffect } from "react";

const CommentList = ({ id }: { id: string }) => {
  useEffect(() => {
    function fetchComments() {}

    fetchComments();
  }, [id]);
  return <div></div>;
};

export default CommentList;
