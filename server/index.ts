import express, { Request, Response } from 'express';
import { createServer as createServerHttp } from 'http';
import next from 'next';

const isDev = !['production', 'test'].includes(process.env.NODE_ENV);
const app = next({ dev: isDev });
const handle = app.getRequestHandler();
const server = express();

// vars from .env.* files are available inside prepare()
app.prepare().then(() => {
    server.use('/uploads', express.static(__dirname + '/../uploads')); // Note: from /dist/

    server.all('*', (req: Request, res: Response) => {
        return handle(req, res);
    });

    const port = parseInt(process.env.PORT || '3001', 10);

    createServerHttp(server).listen(port);

    // tslint:disable-next-line:no-console
    console.log(
        `> NODE_ENV=${process.env.NODE_ENV}\n> Server listening at 
      http://localhost:${port} as ${process.env.NODE_ENV}, dev mode:${isDev}`
    );

});