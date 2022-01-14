import { render, createTextElement, createElement } from './utils.js';

const textElement = createTextElement('Hello');

const element = createElement('h1' , undefined , textElement);

const container = document.getElementById('root');

render(element, container);
