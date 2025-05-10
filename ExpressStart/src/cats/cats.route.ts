import { Cat, CatType } from './cats.model';
import { Router } from 'express';

const router = Router();

// * 교양이 조회
router.get('/cats/:id', (req, res, next) => {
    //console.log(req.rawHeaders[1]);
    
    try {
        const params = req.params;
        console.log(params.id);
        const cats = Cat.find((cat) => {
            return cat.id === params.id
        });
        res.status(200).send({ 
            success: true,
            data: {
                cats,
            }
        }); 
    } catch (error) {
        res.status(400).send({ 
            success: false,
            error: '',
         }); 
    }
    res.send({ cats: Cat }); 
    next();
});



router.post('/cats', (req, res, next) => {
    try {
        const data = req.body;
        console.log(data, 'data check');
        Cat.push(data); //create data

        res.status(200).send({
            success: true,
            data: { data }
        })
    } catch (error) {

    }
});

export default router;