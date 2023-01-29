"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const startDB = () => {
    mongoose_1.default
        .connect("mongodb+srv://Gal:gal2004@shufergal.ptebunp.mongodb.net/sufergal?retryWrites=true&w=majority")
        .then(() => console.log("Connected to MongoDB..."))
        .catch(() => console.log("Could not connect to MongoDB..."));
};
exports.default = startDB;
