"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var product_route_1 = __importDefault(require("../routes/product.route"));
dotenv_1.default.config();
var app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/products', product_route_1.default);
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(function () {
    console.log('Connected to DATABASE!');
    app.listen(process.env.PORT, function () {
        console.log('Server is running on port 3000');
    });
})
    .catch(function () {
    console.log('Connection failed.');
});
