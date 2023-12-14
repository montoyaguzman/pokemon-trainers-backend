const express = require('express');
const app = express();

const cors = require('cors');
const { routerApi } = require('./routes/main.routes');

app.use(cors());

app.use(express.json());

routerApi(app);
module.exports = { app };
