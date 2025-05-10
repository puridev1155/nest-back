import express from 'express';
import catsRouter from './cats/cats.route';
const app : express.Express = express();

//* logging middleware
app.use((req, res, next)=> {
   // console.log(req.rawHeaders[1]);
    console.log('this is logging middleware');
    next();
});

//* json middleware
app.use(express.json());
app.use(catsRouter);


// * 404 middleware
app.use((req, res, next)=> {
    console.log(req.rawHeaders[1]);
    res.send({ error : '404 not found error '});
    next();
});

app.listen(3000, () => {
    console.log('server is on... http://localhost:3000');
});