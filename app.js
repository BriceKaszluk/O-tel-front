require('dotenv').config();

const express = require('express');

//const jwt = require('jsonwebtoken'); 

const cors = require('cors');

// create server express
const app = express()

const router = require('./Back/app/routers'); 

// add middleware for data POST
app.use(express.urlencoded({extended: true}))

app.use(express.json());

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type'
}));

// use JWT auth to secure the api
// app.use(jwt());

app.use(router);




// server launch
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});