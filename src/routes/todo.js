"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    return res.status(200).json({ todos: todos });
});
router.post("/todos", (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    return res.status(201).json({ message: "added todo", todo: newTodo });
});
router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex((todo) => todo.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text,
        };
        return res.status(200).json({ message: "updated", todos: todos });
    }
    return res.status(404).json({ message: "cannot find todo for this id" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    todos = todos.filter((todo) => todo.id !== tid);
    return res.status(200).json({ message: "deleted todo", todos: todos });
});
exports.default = router;
