require('dotenv').config();
const express = require('express'); 

// create server express
const app = express()

// add middleware for data POST
app.use(express.urlencoded({extended: true}))

// add middleware for sessions management 
// app.use(session({

// }));


// server launch
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});