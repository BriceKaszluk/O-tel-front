const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const {User} = require('../models');


module.exports = {
    
    
    signUpForm: async (request, response) => {
        try {
            const errors = []
            //we check if first_name is not empty
            if (!request.body.first_name || request.body.first_name.length === 0) {
                errors.push('veuillez indiquer votre prénom !')
            }
            //we check if last_name is not empty
            if (!request.body.last_name || request.body.last_name.length === 0) {
                errors.push('veuillez indiquer votre nom !')
            }
            //we check if address is not empty
            if (!request.body.address || request.body.address.length === 0) {
                errors.push('veuillez indiquer votre adresse')
            }
            //we check if email is valid
            if (!emailValidator.validate(request.body.email)) {
                errors.push('email non valide !')
            }
            //we check if phone_number is not empty
            if (!request.body.phone_number || request.body.phone_number.length === 0) {
                errors.push('veuillez indiquer votre numéro de téléphone')
            }
            //we check if password contains at least 8 characters
            if(!request.body.password || request.body.password.length < 8) {
                errors.push('le mot de passe doit contenir plus de caractères !')
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
                    response.json({errors: ["Une erreur s'est produite lors de la création !"]})
                } else {
                    // if the email does not exist we can create a new user

                    // we hash the password for store it in DB
                    const hashPassword = bcrypt.hashSync(request.body.password, 10);

                    // we create a new user
                    const newUser = new User ({
                        first_name: request.body.first_name,
                        last_name: request.body.last_name,
                        address: request.body.address,
                        phone_number: request.body.phone_number,
                        email: request.body.email, 
                        password: hashPassword
                    });
                    // we save in DB
                    await newUser.save(); 
                }
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    loginForm: async (request, response) => {
        try {
            const checkUser = await User.findOne({
                where: {
                    email: request.body.email
                }
            });
            if (!checkUser) {
                
                response.json({errors: "problème d'authentification"});
            
            } else {
                
                const comparePassword = bcrypt.compareSync(request.body.password, checkUser.password);
            
                if (!comparePassword) {
                    response.json({errors: "problème d'authentification"});
                } else {
                    request.session.user = checkUser
                }
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}