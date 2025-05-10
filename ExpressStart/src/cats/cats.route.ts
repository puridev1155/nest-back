import { Router } from 'express';
import { readAllCat, createCat, readCat, updateCat, patchCat, deleteCat } from './cats.service';

const router = Router();

router.get('/cats', readAllCat);
router.get('/cats/:id', readCat); //수정을 위해 cmd + 클릭
router.post('/cats', createCat);
router.put('/cats/:id', updateCat);
router.patch('/cats/:id', patchCat);
router.delete('/cats/:id', deleteCat);

export default router;