import express, { Application } from 'express';
import socketIO, { Server as SocketIOServer } from 'socket.io';
import { createServer, Server as HTTPServer } from 'http';
import path from 'path';

export class Server {
  private httpServer: HTTPServer;
  private app: Application;
  private io: SocketIOServer;

  private readonly DEFAULT_PORT = 5000;

  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);
    this.configureApp();
    this.io = new SocketIOServer(this.httpServer);

    this.handleRoutes();

    this.handleSocketConnection();
  }

  private handleRoutes(): void {
    this.app.get('/', (req, res) => {
      res.send(`<h1>Hello World</h1>`);
    });
  }

  private handleSocketConnection(): void {
    this.io.on('connection', (socket) => {
      console.log('Socket connected');
    });
  }

  public listen(callback: (port: number) => void): void {
    this.httpServer.listen(this.DEFAULT_PORT, () =>
      callback(this.DEFAULT_PORT),
    );
  }

  private configureApp(): void {
    this.app.use(express.static(path.join(__dirname, '../public')));
  }
}
