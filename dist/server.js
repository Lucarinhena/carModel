"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/courses", (req, res) => {
    console.log(req);
    const { name } = req.body;
    res.json({ name });
});
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
