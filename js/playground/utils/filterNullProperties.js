const obj = { phone: null, cellphone: '09195850787', id: '1234' };

function filterNullProperties(obj) {
  const filteredObject = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      filteredObject[key] = value;
    }
  });

  return filteredObject;
}

console.log(filterNullProperties(obj));
