import { render } from './utils.js';

const textElement = {
  type: 'TEXT_ELEMENT',
  props: { nodeValue: 'Hello' },
};

const container = document.getElementById('root');

render(textElement, container);
