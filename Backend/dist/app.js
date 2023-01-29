"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("start/db"));
const app = (0, express_1.default)();
(0, db_1.default)();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
