import { Comment } from '@/types';
import { ChangeEvent, useState } from 'react';

const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = (await response.json()) as Comment[];
    setComments(data);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  const deleteComment = async (id: number) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <input type="text" value={comment} onChange={handleCommentChange} />
      <button onClick={submitComment}>Submit comment</button>
      <button onClick={fetchComments}>Fetch comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.text}</h4>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default CommentList;
