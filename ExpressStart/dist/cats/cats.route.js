"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cats_model_1 = require("./cats.model");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/cats/:id', (req, res, next) => {
    try {
        const params = req.params;
        console.log(params.id);
        const cats = cats_model_1.Cat.find((cat) => {
            return cat.id === params.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cats,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: '',
        });
    }
    res.send({ cats: cats_model_1.Cat });
    next();
});
router.post('/cats', (req, res, next) => {
    try {
        const data = req.body;
        console.log(data, 'data check');
        cats_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data }
        });
    }
    catch (error) {
    }
});
exports.default = router;
//# sourceMappingURL=cats.route.js.map