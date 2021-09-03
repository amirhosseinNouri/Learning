import React from 'react';
import Button from './button';
import renderer, { create, act } from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';

// test('Works', () => {
//   expect(true).toBe(true);
// });

// test('Renders the text', () => {
//   const text = 'text';
//   const component = renderer.create(<Button text={text} />);
//   expect(component.root.props.text).toBe(text);
// });

test('shit test', () => {
  let root;
  act(() => {
    root = create(<Button text={'text1'} />);
  });

  // make assertions on root
  expect(root.toJSON()).toMatchSnapshot();

  // update with some different props
  act(() => {
    root.update(<Button text={'text2'} />);
  });

  // make assertions on root
  expect(root.toJSON()).toMatchSnapshot();
});
