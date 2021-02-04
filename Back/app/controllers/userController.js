require("dotenv").config();
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jwt = require('jsonwebtoken'); 
const {User} = require('../models');
const nodemailer = require('nodemailer');

// we require googleapis to get the client google auth
const {google} = require('googleapis');


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
                    return response.status(404).send({errors: ["Une erreur s'est produite lors de la création !"]})
                } else {
                    // if the email does not exist we can create a new user

                    // we hash the password for store it in DB
                    const hashPassword = bcrypt.hashSync(request.body.password, 10);

                    // we create a new user
                    const newUser = new User ({
                        id: request.params.id, 
                        first_name: request.body.first_name,
                        last_name: request.body.last_name,
                        // address: request.body.address,
                        phone_number: request.body.phone_number,
                        email: request.body.email, 
                        password: hashPassword, 
                        role_id: request.body.role_id
                    });
                    
                    // what we want to store in the token
                    // 2nd argument is the secret string to put in .env
                    // 3rd argument options object
                    const token = jwt.sign({
                        id: newUser.id, 
                        first_name: newUser.first_name,
                        last_name: newUser.last_name,
                        email: newUser.email, 
                        role_id: newUser.role_id
                    }, process.env.SECRET_TOKEN, { expiresIn: "1h" })
                    console.log('my token: ', token);
                    // JWT VERIFY
                    // It checks if the signature and expiration date are valid
                    const verif = jwt.verify(token, process.env.SECRET_TOKEN); 
                    if (verif){
                        console.log("token good: ", verif); 
                    } else {
                        return response.status(404).json("Token not valid");
                    }

                    const {email, first_name, last_name} = request.body
        
        
                const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
        
                const {
                EMAIL_NAME,
                SECRET_PASS,
                EMAIL_CLIENT_ID,
                EMAIL_CLIENT_SECRET,
                EMAIL_REFRESH_TOKEN
                } = process.env; 
        
            const oAuth2Client = new google.auth.OAuth2(EMAIL_CLIENT_ID, EMAIL_CLIENT_SECRET, EMAIL_REFRESH_TOKEN, OAUTH_PLAYGROUND); 
            console.log('probleme: ', oAuth2Client)
            oAuth2Client.setCredentials({refresh_token: EMAIL_REFRESH_TOKEN});
        
                const accessToken = await oAuth2Client.getAccessToken(); 
                
                const transport = nodemailer.createTransport({
                    service: 'gmail', 
                    auth: {
                        type: 'OAuth2',
                        user:EMAIL_NAME,
                        pass:SECRET_PASS,
                        clientId: EMAIL_CLIENT_ID,
                        clientSecret: EMAIL_CLIENT_SECRET, 
                        refreshToken: EMAIL_REFRESH_TOKEN,
                        accessToken: accessToken
                    }
                    
                })
        
                const mailOption = {
                    from: EMAIL_NAME,
                    to: `${email}`,
                    subject: "Message de " + EMAIL_NAME + " Confirmation d'inscription", 
                    text: `Bonjour ${first_name}, ${last_name} merci pour votre inscription, voici votre confirmation.`
                }
        
                const info = await transport.sendMail(mailOption);
                console.log("Message sent: ", info.messageId);
               
        
                    // we save in DB
                    await newUser.save();
                  
                    console.log(newUser, 'user saved');
                    
                   return response.status(200).json({data: newUser, token, verif, mailOption}); 
                   
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
                const token = jwt.sign({
                id: checkUser.id, 
                first_name: checkUser.first_name,
                last_name: checkUser.last_name,
                email: checkUser.email, 
                role_id: checkUser.role_id
                }, process.env.SECRET_TOKEN, { expiresIn: "1h" });

            const verif = jwt.verify(token, process.env.SECRET_TOKEN); 
                    if (verif){
                       verif.id == token.id
                       verif.first_name == token.first_name 
                       verif.last_name == token.last_name
                       verif.email == token.email; 
                       verif.role_id == token.role_id
                    
                    } else {
                        response.status(404).json("Token not valid");
                    }

                    response.json({data: {user: checkUser}, token, verif}); 
                }
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({error});
        }
    }
}