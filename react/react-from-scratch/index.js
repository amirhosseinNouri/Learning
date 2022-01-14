import { render, createTextElement } from './utils.js';

const textElement = createTextElement('Hello');

const container = document.getElementById('root');

render(textElement, container);
