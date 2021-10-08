import React, { useState, createContext, useContext, useEffect } from 'react'
// import { auth } from './../firebase'
// import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from './../firebase'
import { auth, db } from './../firebase'

const UserContext = createContext();

const useUserContext = () => {
    return useContext(UserContext);
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [shaketag, setShaketag] = useState(null);
    const uid = auth?.currentUser?.uid;

    const signUp = async (shaketag, email, password) => {
        try {
            const data = await auth.createUserWithEmailAndPassword(email, password);
            const uid = data.user.uid;
            const createUser = await db.collection('users').doc(uid).set({
                shaketag: shaketag,
                email: email,
                password: password,
                Dollars: "3000",
                Bitcoin: "0.5",
                Ethereum: "32",
                DollarTransactions: [],
                BitcoinTransactions: [],
                EthereumTransactions: [],
            });
        } catch (e) {
            console.log(e);
        }
    };

    const login = async (email, password) => {
        const data = await auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const userDocRef = db.collection('users').doc(uid);
            const userDoc = await userDocRef.get();
            const data = userDoc.data();

            setUser({
                email: data.email,
                shaketag: data.shaketag,
            });
        };

        const unsubscribe = auth.onAuthStateChanged(userData => {
            if (userData === null) {
                setUser(null);
            }
            else {
                fetchUserData();
            }
        });

        return unsubscribe;
    }, []);


    const value = {
        user,
        uid,
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