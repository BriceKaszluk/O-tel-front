require('dotenv').config();
const express = require('express');

const cors = require('cors');

// create server express
const app = express()

const router = require('./Back/app/routers'); 

// add middleware for data POST
app.use(express.urlencoded({extended: true}))

app.use(express.json());

app.use(cors('*'));

app.use(router);

// add middleware for sessions management 
// app.use(session({

// }));


// server launch
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});