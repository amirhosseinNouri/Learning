export default (body) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SSR</title>
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="./bundle.js"></script>
    </body>
  </html>
`;
