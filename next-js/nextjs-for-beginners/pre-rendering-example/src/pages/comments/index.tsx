import { Comment } from '@/types';
import { ChangeEvent, useState } from 'react';
import s from '@/styles/comments.module.css';

const CommentList = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState('');
  const [editingComment, setEditingComment] = useState<number>();

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

  const editComment = (comment: Comment) => {
    setComment(comment.text);
    setEditingComment(comment.id);
  };

  const handleSubmitEditingComment = async () => {
    const response = await fetch(`/api/comments/${editingComment}`, {
      method: 'PATCH',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    setEditingComment(undefined);
    setComment('');
    fetchComments();
  };

  return (
    <>
      <input type="text" value={comment} onChange={handleCommentChange} />
      {editingComment ? (
        <button onClick={handleSubmitEditingComment}>Done</button>
      ) : (
        <button onClick={submitComment}>Submit comment</button>
      )}

      <div className={s.commentsContainer}>
        <h4>Comments</h4>
        <button onClick={fetchComments}>Fetch comments</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className={s.comment}>
            <h4>{comment.text}</h4>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
            <button onClick={() => editComment(comment)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentList;
