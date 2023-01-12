const replaceTemplate = (template, product) => {
  const { productName, image, price, from, nutrients, quantity, id } = product;

  return template
    .replace(/{%PRODUCT_NAME%}/g, productName)
    .replace(/{%PRODUCT_IMAGE%}/g, image)
    .replace(/{%PRODUCT_PRICE%}/g, price)
    .replace(/{%PRODUCT_FROM%}/g, from)
    .replace(/{%PRODUCT_NUTRIENTS%}/g, nutrients)
    .replace(/{%PRODUCT_QUANTITY%}/g, quantity)
    .replace(/{%PRODUCT_ID%}/g, id)
    .replace(/{%PRODUCT_NOT_ORGANIC%}/g, product.organic ? '' : 'not-organic');
};

module.exports = replaceTemplate;
