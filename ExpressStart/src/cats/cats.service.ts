import{Request, Response} from "express";
import { Cat, CatType } from './cats.model';

// * 교양이 조회
export const readAllCat = (req: Request, res: Response) => {
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

};

// * 교양이 조회
export const readCat = (req: Request, res: Response) => {
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

};


//* Create 
export const createCat = (req: Request, res: Response) => {
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
};


//* Update
export const updateCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body;
                result = cat;
            }
        })

        res.status(200).send({
            success: true,
            data: { 
                cat: result
             }
        })
    } catch (error) {

    }
};

//* 부분적으로 update
export const patchCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = { ...cat, ...body};
                result = cat;
            }
        })

        res.status(200).send({
            success: true,
            data: { 
                cat: result
             }
        })
    } catch (error) {

    }
};

//* Delete
export const deleteCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const newCat = Cat.filter((cat) => cat.id !== params.id)
       
        res.status(200).send({
            success: true,
            data: { 
                cat: newCat
             }
        })
    } catch (error) {

    }
};