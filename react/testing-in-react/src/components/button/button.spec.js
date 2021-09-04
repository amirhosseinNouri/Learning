import React from 'react';
import { shallow, configure } from 'enzyme';
import Button from './button';
import { beforeAll } from '@jest/globals';
import Adapter from 'enzyme-adapter-react-16';

beforeAll(() => {
  configure({ adapter: new Adapter() });
});
test('Testing button component', () => {
  const text = 'text';
  const onClick = jest.fn();
  const button = shallow(<Button onClick={onClick} text={text} />);
  expect(button.type()).toBe('button');
  expect(button.text()).toBe(text);
  button.simulate('click');
  expect(onClick).toBeCalled();
});
