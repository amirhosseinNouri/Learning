const http = require('http');
const PORT = 8000;
const handler = (req, res) => {
  console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(
    `<h1>Hello</h1>
        <p>You asked for <code>${req.url}</code> </p>
      `,
  );

  res.end();
};

const server = http.createServer(handler);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
