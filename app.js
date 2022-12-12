const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
var cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(cors()) 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', require('./routes/imageRoutes') )

app.listen(port, () => console.log(`${port}`))
