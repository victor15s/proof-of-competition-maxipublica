'use strict';

const dotenv = require('dotenv');
const express = require('express');

const { wordRouter } = require('./routes/word-router');

dotenv.config();
require('./settings/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/', wordRouter); 

app.listen(port, () => console.log(`Server running at port ${port}`));