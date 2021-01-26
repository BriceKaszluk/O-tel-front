const jwt = require('jsonwebtoken'); 


module.exports = {
    // 1st what we want to store in the token
    // 2nd argument is the secret key 
    // 3rd argument options object
    generateTokenForUser: (userData) => (jwt.sign({
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email
        }, 
        process.env.SECRET_TOKEN, 
        { 
        expiresIn: '1h' 
        })  
    ),

    // verifyTokenForUser: (request, response, next) => {

        
    // } 
}