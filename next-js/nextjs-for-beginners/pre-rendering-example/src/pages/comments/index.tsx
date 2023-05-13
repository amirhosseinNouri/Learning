import { Comment } from '@/types';
import { useState } from 'react';

const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = (await response.json()) as Comment[];
    setComments(data);
  };

  return (
    <>
      <button onClick={fetchComments}>Fetch comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </>
  );
};

export default CommentList;
