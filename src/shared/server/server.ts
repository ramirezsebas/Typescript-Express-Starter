import express from "express";

export class Server {
  public static instance: Server;

  private app: express.Application;
  private port: number;

  static create(port: number): Server {
    if (this.instance == null) {
      this.instance = new Server(port);
    }
    return this.instance;
  }

  private constructor(port: number) {
    this.port = port;
    this.app = express();
    this.initializeServerConfig();
    this.initializeGlobalRoutes();
  }

  private initializeServerConfig(): void {
    this.app.set('port', this.port);
  }

  private initializeGlobalRoutes(): void {
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