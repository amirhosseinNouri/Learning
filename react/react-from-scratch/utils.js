export function render(element, container) {
  if (typeof element.type === 'function') {
    element = element();
  }

  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  const isProperty = (key) => key !== 'children';

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  console.log({ finalNodeValue: dom.nodeValue });

  element.props.children?.forEach((child) => render(child, element));

  container.appendChild(dom);
}

export function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
