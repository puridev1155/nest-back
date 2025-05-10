"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cats_route_1 = __importDefault(require("./cats/cats.route"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log('this is logging middleware');
    next();
});
app.use(express_1.default.json());
app.use(cats_route_1.default);
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    res.send({ error: '404 not found error ' });
    next();
});
app.listen(3000, () => {
    console.log('server is on... http://localhost:3000');
});
//# sourceMappingURL=app.js.map