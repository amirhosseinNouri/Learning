import React from 'react';

function Task({ task: { id, title, state } }) {
  return (
    <div className="list-item">
      <label htmlFor="title">
        <input type="text" name="title" value={title} readOnly />
      </label>
    </div>
  );
}

export default Task;
