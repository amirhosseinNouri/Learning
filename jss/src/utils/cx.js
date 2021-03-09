function cx() {
  let result = '';
  let length = arguments.length;

  for (let i = 0; i < length; i++) {
    if (arguments[i] && typeof arguments[i] === 'object') {
      result += Object.keys(arguments[i])
        .filter((key) => arguments[i][key])
        .join(' ');
    } else {
      result += arguments[i] ? (i === length - 1 ? '' : ' ') : '';
    }
  }

  return result;
}

export default cx;
