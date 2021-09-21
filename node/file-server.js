const http = require('http');
const parse = require('url');
const { resolve, sep } = require('path');
const { createReadStream } = require('fs');
const { stat, readdir } = require('fs').promises;
const mime = require('mime');

const PORT = 8000;
const BASE_DIRECTORY = process.cwd();

const method = {};

method.GET = async (request) => {
  const path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (err) {
    if (err.code != 'ENOENT') {
      throw err;
    }
    return { status: 404, body: 'File not found' };
  }

  if (stats.isDirectory()) {
    return { body: (await readdir(path)).join('\n') };
  } else {
    return { body: createReadStream(path), type: mime.getType(path) };
  }
};

const server = http.createServer(async (request, response) => {
  const handler = method[request.method] || notAllowed;
  try {
    const { body, status = 200, type = 'text/plain' } = await handler(request);
    response.writeHead(status, { 'Content-Type': type });

    if (body && body.pipe) {
      body.pipe(response);
    } else {
      response.end(body);
    }
  } catch (err) {
    if (err.status != null) {
      return err;
    }
    return { body: String(err), status: 500 };
  }
});

const notAllowed = (request) => {
  return { status: 405, body: `Method ${request.method} not allowed.` };
};

const urlPath = (url) => {
  const { pathname } = parse(url);
  const path = resolve(decodeURIComponent(pathname).slice(1));

  if (path != BASE_DIRECTORY && !path.startsWith(BASE_DIRECTORY + sep)) {
    throw { status: 403, body: 'Forbidden' };
  }

  return path;
};

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
