const express = require('express');
import bodyParser from 'body-parser';
import todoRoutes from '../src/routes/todo';
const app = express();
app.use(bodyParser.json());
app.use(todoRoutes);
app.listen(3000);