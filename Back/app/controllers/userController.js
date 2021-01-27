require("dotenv").config();
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jsw = require('jsonwebtoken'); 
const {User} = require('../models');


module.exports = {
    
    
    signUpForm: async (request, response) => {
        try {
            console.log('registration received');
            const errors = []
            //we check if first_name is not empty
            if (!request.body.first_name || request.body.first_name.length === 0) {
                errors.push('veuillez indiquer votre prénom !')
                response.json(errors); 
            }
            //we check if last_name is not empty
            if (!request.body.last_name || request.body.last_name.length === 0) {
                errors.push('veuillez indiquer votre nom !')
                response.json(errors); 
            }
            //we check if address is not empty
            // if (!request.body.address || request.body.address.length === 0) {
            //     errors.push('veuillez indiquer votre adresse')
            // }

            //we check if email is valid
            if (!emailValidator.validate(request.body.email)) {
                errors.push('email non valide !')
                response.json(errors); 
            }
            //we check if phone_number is not empty
            if (!request.body.phone_number || request.body.phone_number.length === 0) {
                errors.push('veuillez indiquer votre numéro de téléphone')
                response.json(errors); 
            }
            //we check if password contains at least 8 characters
            if(!request.body.password || request.body.password.length < 8) {
                errors.push('le mot de passe doit contenir plus de caractères !')
                response.json(errors); 
            }
            // we check if we have at least one error
            if (errors.length > 0) {
                response.json({errors})
            } else {
                // we check if the user does not exist in BDD
                const checkUser = await User.findOne({
                    where: {
                        email: request.body.email
                    }
                });
                
                // if we have a result, we send an error
                if (checkUser) {
                    console.log('problème: ')
                    return response.status(404).json({errors: ["Une erreur s'est produite lors de la création !"]})
                } else {
                    // if the email does not exist we can create a new user

                    // we hash the password for store it in DB
                    const hashPassword = bcrypt.hashSync(request.body.password, 10);

                    // we create a new user
                    const newUser = new User ({
                        first_name: request.body.first_name,
                        last_name: request.body.last_name,
                        // address: request.body.address,
                        phone_number: request.body.phone_number,
                        email: request.body.email, 
                        password: hashPassword
                    });
                    
                    // what we want to store in the token
                    // 2nd argument is the secret string to put in .env
                    // 3rd argument options object
                    const token = jsw.sign({
                        first_name: newUser.first_name,
                        last_name: newUser.last_name,
                        email: newUser.email
                    }, `${process.env.SECRET_TOKEN}`, { expiresIn: "1h" })
                    
                    // JWT VERIFY
                    // It checks if the signature and expiration date are valid
                    const verif = jsw.verify(token, `${process.env.SECRET_TOKEN}`); 
                    if (verif){
                        console.log("token good: ", verif); 
                        
                    } else {
                        return response.status(404).json("Token not valid");
                    }

                    // we save in DB
                    await newUser.save();
                    console.log(newUser, 'user saved');
                    

                   return response.status(200).json({data: newUser, token}); 

                    
                   
                }
            }
        } catch (error) {
            console.log(error);
            return response.status(500).send(error.message );
        }
    },

    loginForm: async (request, response) => {
        try {
            // we check if the user exist in DB
            const checkUser = await User.findOne({
                where: {
                    email: request.body.email
                }
            });
            
            const token = jsw.sign({
                first_name: checkUser.first_name,
                last_name: checkUser.last_name,
                email: checkUser.email
            }, `${process.env.SECRET_TOKEN}`, { expiresIn: "1h" });

            const verif = jsw.verify(token, `${process.env.SECRET_TOKEN}`); 
                    if (verif){
                        console.log("token good: ", verif); 
                       
                    } else {
                        response.status(404).json("Token not valid");
                    }


            // if isn't exist, we launch an error
            if (!checkUser) {
                
                response.json({errors: "problème d'authentification"});
            
            } else {
                // we compare the password hashed in DB
                const comparePassword = bcrypt.compareSync(request.body.password, checkUser.password);
                
                //if the password is not the same, we launch an error
                if (!comparePassword) {
                    response.json({errors: "problème d'authentification"});
                } else {
                    // else connection
                    response.json({data: checkUser, token, verif}); 
                }
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }
}