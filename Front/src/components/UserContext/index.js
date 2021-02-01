import React, { createContext, useState, useEffect, useContext } from "react";

const userContext = createContext();

const UserProvider = (props) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const authenticate = (userProfile, userToken) => {
        setUser(userProfile);
        setToken(userToken);
        setLoading(false);
        localStorage.setItem('profile', JSON.stringify(userProfile));
        localStorage.setItem('token', userToken );
    }

    useEffect(() => {
        //on vérifie le local storage
        const userProfile = localStorage.getItem('profile');
        const userToken = localStorage.getItem('token');
        if(userProfile && userToken){
            setUser(JSON.parse(userProfile));
            setToken(userToken);
        } 
        setLoading(false);
    }, [])

    return (
        <userContext.Provider value={{
            user, token, loading, authenticate
        }}>
            {props.children}
        </userContext.Provider>
    );
}

const useAuthentication = () => {
    return useContext(userContext);
}

export {UserProvider, useAuthentication};