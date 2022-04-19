import { createAction } from '@reduxjs/toolkit';
import { CREATE_POST, UPDATE_POST, DELETE_POST } from './constants';

export const addTodo = createAction('ADD_TODO');

export const toggleTodo = createAction('TODO_TODO');

export const remoteTodo = createAction('REMOVE_TODO');

// Post actions

export const createPost = createAction(CREATE_POST);

export const updatePost = createAction(UPDATE_POST);

export const deletePost = createAction(DELETE_POST);
