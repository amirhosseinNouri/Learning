import express, { Application } from 'express';
import { Server as SocketIOServer } from 'socket.io';
import { createServer, Server as HTTPServer } from 'http';
import path from 'path';

export class Server {
  private httpServer: HTTPServer;
  private app: Application;
  private io: SocketIOServer;

  private readonly DEFAULT_PORT = 5000;
  private activeSockets: string[] = [];

  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);
    this.configureApp();
    this.io = new SocketIOServer(this.httpServer, { allowEIO3: true });

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
      const existingSocket = this.activeSockets.find((s) => s === socket.id);

      if (!existingSocket) {
        this.activeSockets.push(socket.id);

        socket.emit('update-user-list', {
          users: this.activeSockets.filter(
            (existingSocket) => existingSocket !== socket.id,
          ),
        });

        socket.broadcast.emit('update-user-list', {
          users: [socket.id],
        });
      }

      socket.on('disconnect', () => {
        this.activeSockets = this.activeSockets.filter((s) => s !== socket.id);
        socket.broadcast.emit('remove-user', {
          socketId: socket.id,
        });
      });
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
