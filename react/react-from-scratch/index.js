import { render, createTextElement } from './utils.js';

const textElement = createTextElement('Hello');

const element = {
  type: 'h1',
  props: {
    children: [textElement],
  },
};

const container = document.getElementById('root');

render(element, container);
