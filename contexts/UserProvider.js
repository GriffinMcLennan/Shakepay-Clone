import React, { useState, createContext, useContext } from 'react'
import EntranceStackScreen from '../StackScreens/EntranceStackScreen';

const UserContext = createContext();

const useUserContext = () => {
    return useContext(UserContext);
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const value = {
        user: user,
        setUser: setUser
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, useUserContext };