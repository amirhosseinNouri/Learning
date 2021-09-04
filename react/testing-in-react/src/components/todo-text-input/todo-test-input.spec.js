import React from 'react';
import TodoTextInput from './todo-text-input';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { beforeAll, expect } from '@jest/globals';

const noop = () => {};

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

test('Sets the text prop as value', () => {
  const text = 'text';
  const wrapper = shallow(<TodoTextInput text={text} onSave={noop} />);
  expect(wrapper.prop('value')).toBe(text);
});

test('Uses the placeholder prop', () => {
  const placeholder = 'placeholder';
  const wrapper = shallow(
    <TodoTextInput placeholder={placeholder} onSave={noop} />,
  );
  expect(wrapper.prop('placeholder')).toBe(placeholder);
});

test('Applies the right class name', () => {
  const wrapper = shallow(<TodoTextInput editing newTodo onSave={noop} />);
  expect(wrapper.hasClass('edit new-todo')).toBe(true);
});

test('Fires onSave on enter', () => {
  const onSave = jest.fn();
  const value = 'value';
  const wrapper = shallow(<TodoTextInput onSave={onSave} />);
  wrapper.simulate('keydown', { target: { value }, which: 13 });
  expect(onSave).toBeCalled();
  expect(onSave).toHaveBeenCalledWith(value);
});

test('Does not fire onSave on key down', () => {
  const onSave = jest.fn();
  const wrapper = shallow(<TodoTextInput onSave={onSave} />);
  wrapper.simulate('keydown', { target: { value: '' } });
  expect(onSave).not.toBeCalled();
});

test('Clears the value, after save if new', () => {
  const noop = () => {};
  const value = 'value';
  const wrapper = shallow(<TodoTextInput onSave={noop} newTodo />);
  wrapper.simulate('keydown', { target: { value }, which: 13 });
  expect(wrapper.prop('value')).toBe('');
});

test('Fires onSave onBlur if not new', () => {
  const onSave = jest.fn();
  const value = 'value';
  const wrapper = shallow(<TodoTextInput onSave={onSave} />);
  wrapper.simulate('blur', { target: { value } });
  expect(onSave).toHaveBeenCalledWith(value);
});
