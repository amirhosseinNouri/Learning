import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('ADD_TODO');

export const toggleTodo = createAction('TODO_TODO');

export const remoteTodo = createAction('REMOVE_TODO');
