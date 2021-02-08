import React, { createContext, useState, useEffect, useContext } from "react";
const adminContext = createContext();

const AdminProvider = (props) => {
    const [adminActualBookings, setAdminActualBookings] = useState(null);
    const [adminOldsBookings, setAdminOldsBookings] = useState(null);
    const [loading, setLoading] = useState(true);

    const adminSetUsersBookings = (actualsBookings, oldsBookings) => {
        setAdminActualBookings(actualsBookings);
        setAdminOldsBookings(oldsBookings);
        setLoading(false);
    }

    return(
        <adminContext.Provider value={{
            adminActualBookings, adminOldsBookings, 
            adminSetUsersBookings,
            loading, setLoading
        }}>
            {props.children}
        </adminContext.Provider>
    )
}

const useAdminManagement = () => {
    return useContext(adminContext);
}

export { AdminProvider, useAdminManagement }


