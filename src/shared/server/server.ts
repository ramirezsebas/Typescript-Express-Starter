import express from "express";

export class Server {
  public static instance: Server;

  private app: express.Application;
  private port: number;

  static create(puerto: number): Server {
    if (this.instance == null) {
      this.instance = new Server(puerto);
    }
    return this.instance;
  }

  private constructor(puerto: number) {
    this.port = puerto;
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.set('port', this.port);
  }

  private routes(): void {
    this.app.get('/', (req, res) => {
      res.send('Hello world');
    }
    );
  }

  public start(): void {
    this.app.listen(this.port);
    console.log('Server running on port: ' + this.port);
  }
}