import React, { useState, createContext, useContext, useEffect } from 'react'
// import { auth } from './../firebase'
// import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from './../firebase'
import { auth } from './../firebase'

const UserContext = createContext();

const useUserContext = () => {
    return useContext(UserContext);
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password).then(userData => console.log(userData));
    }

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userData => {
            setUser(userData);
        });

        return unsubscribe;
    }, []);

    const value = {
        user: user,
        setUser: setUser,
        signUp,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, useUserContext };