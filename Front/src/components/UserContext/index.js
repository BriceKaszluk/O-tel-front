import React, { createContext, useState, useEffect, useContext } from "react";
const userContext = createContext();

//will be use to provide context in 'src/index'
const UserProvider = (props) => {
    //user state
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    //booking and old booking state
    const [booking, setBooking] = useState(null);
    const [oldBooking, setOldBooking] = useState(null);
    //to show the modal to connect
    const [isActiveModalConnexion, setIsActiveModalConnexion] = useState(false);

    //function called to set user info et put them in localStorage
    const authenticate = (userProfile, userToken) => {
        setUser(userProfile);
        setToken(userToken);
        setLoading(false);
        localStorage.setItem('profile', JSON.stringify(userProfile));
        localStorage.setItem('token', userToken );
    }

    const bookingGestion = (actualBookings, pastBookings) => {
        setBooking(actualBookings);
        setOldBooking(pastBookings);
    }

    useEffect(() => {
        //we check local storage
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
            user, token, loading, authenticate, 
            bookingGestion, booking, oldBooking,
            isActiveModalConnexion, setIsActiveModalConnexion
        }}>
            {props.children}
        </userContext.Provider>
    );
}

const useAuthentication = () => {
    return useContext(userContext);
}

export {UserProvider, useAuthentication};