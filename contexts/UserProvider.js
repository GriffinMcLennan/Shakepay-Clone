import React, { useState, createContext, useContext } from 'react'
import EntranceStackScreen from '../StackScreens/EntranceStackScreen';

const UserContext = createContext();

const useUserContext = () => {
    return useContext(UserContext);
}

const UserProvider = ({ children }) => {
    const value = {
        user: null,
    };

    return (
        <UserContext.Provider value={value}>
            {value.user === null ? (
                <EntranceStackScreen />
            ) : (
                children
            )}
        </UserContext.Provider>
    )
}

export { UserProvider, useUserContext };