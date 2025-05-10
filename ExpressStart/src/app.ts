import express from 'express';
import catsRouter from './cats/cats.route';

class Server {
    public app: express.Application;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    private setRoute(){
        this.app.use(catsRouter);
    }

    public listen() {
        this.setMiddleware();
        this.app.listen(3000, () => {
            console.log('server is on... http://localhost:3000');
        });
    }

    private setMiddleware() {

        //* logging middleware
this.app.use((req, res, next)=> {
    // console.log(req.rawHeaders[1]);
     console.log('this is logging middleware');
     next();
 });
 
 //* json middleware
 this.app.use(express.json());
 this.setRoute();
 
 // * 404 middleware
 this.app.use((req, res, next)=> {
     console.log(req.rawHeaders[1]);
     res.send({ error : '404 not found error '});
     next();
 });
 

    }
}

function init(){
    const server = new Server();
    server.listen();
}

init();
