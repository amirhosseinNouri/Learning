import { expect } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';
import TodoTextInput from './todo-text-input';

test('Snapshot test', () => {
  const noop = () => {};
  const component = renderer.create(<TodoTextInput onSave={noop} editing />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
