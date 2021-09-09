import React from 'react';
import Adaptor from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Controlled from './controlled';
import { beforeAll, expect } from '@jest/globals';

beforeAll(() => {
  configure({ adapter: new Adaptor() });
});

test('Submits the form', () => {
  const firstName = 'Some firstName';
  const lastName = 'Some lastName';
  const onSubmit = jest.fn();
  const wrapper = shallow(<Controlled onSubmit={onSubmit} />);
  const firstNameInput = wrapper.find('[name="firstName"]');
  firstNameInput.simulate('change', {
    target: { name: 'firstName', value: firstName },
  });

  const lastNameInput = wrapper.find('[name="lastName"]');
  lastNameInput.simulate('change', {
    target: { name: 'lastName', value: lastName },
  });

  const form = wrapper.find('form');
  form.simulate('submit', { preventDefault: () => {} });

  expect(onSubmit).toHaveBeenCalledWith(`${firstName} ${lastName}`);
});
