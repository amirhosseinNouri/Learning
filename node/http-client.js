const http = require('http');
const requestStream = http.request(
  {
    hostname: 'localhost',
    path: '/signup',
    method: 'GET',
    headers: { Accept: 'text/html' },
    port : 8000
  },
  (response) => {
    console.log(`Server responded with status code ${response.statusCode}`);
  },
);

requestStream.end();
