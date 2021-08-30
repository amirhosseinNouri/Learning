import React, { useState } from 'react';
import TodosForm from '../todos-form';
import TodosList from '../todos-list';

export default function Todos() {
  const [items, setItems] = useState(['foo', 'bar']);
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (value) => {
    setItems((currentItems) => [...currentItems, value]);
  };

  return (
    <div>
      <TodosList items={items} />
      <TodosForm onSubmit={handleSubmit} />
    </div>
  );
}
