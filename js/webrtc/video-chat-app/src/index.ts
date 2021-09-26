import { Server } from './server';

const server = new Server();

server.listen((port) =>
  console.log(`Server is running on http://localhost:${port}`),
);
