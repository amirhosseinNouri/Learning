import React from 'react';
import Adaptor from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Controlled from './controlled';
import { beforeAll, expect } from '@jest/globals';

beforeAll(() => {
  configure({ adapter: new Adaptor() });
});

const onSubmit = jest.fn();
const firstName = 'Some firstName';
const lastName = 'Some lastName';

test('Submits the form', () => {
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

test('Submits the form with the page object pattern', () => {
  const wrapper = shallow(<Controlled onSubmit={onSubmit} />);
  const page = new Page(wrapper);
  page.fill('firstName', firstName);
  page.fill('lastName', lastName);
  page.submit();
  expect(onSubmit).toHaveBeenCalledWith(`${firstName} ${lastName}`);
});

class Page {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  fill(name, value) {
    const field = this.wrapper.find(`[name="${name}"]`);
    field.simulate('change', { target: { name, value } });
  }

  submit() {
    const form = this.wrapper.find('form');
    const noop = () => {};
    form.simulate('submit', { preventDefault: noop });
  }
}
