/* eslint-disable prefer-const, prefer-destructuring, prefer-rest-params */
// function cx() {
//   let ret = '';
//   let length = arguments.length;
//   for (let i = 0; i < length; i += 1) {
//     if (typeof arguments[i] === 'object' && arguments[i] !== null) {
//       ret += Object.keys(arguments[i])
//         .filter((key) => arguments[i][key])
//         .join(' ');
//     } else {
//       ret += arguments[i] ? arguments[i] + (i === length - 1 ? '' : ' ') : '';
//     }
//   }
//   return ret;
// }

// export default cx;

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
