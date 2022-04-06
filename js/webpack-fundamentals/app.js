var outerScope = 1;

const aFunction = (function () {
  var outerScope = 4;
  return {
    someAttr: 'lorem',
  };
})();

console.log(outerScope);
