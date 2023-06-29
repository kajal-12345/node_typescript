"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const body_parser_1 = __importDefault(require("body-parser"));
const todo_1 = __importDefault(require("../src/routes/todo"));
const app = express();
app.use(body_parser_1.default.json());
app.use(todo_1.default);
app.listen(3000);
