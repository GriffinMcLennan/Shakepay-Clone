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
    const [email, setEmail] = useState(null);
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
        const unsubscribe = auth.onAuthStateChanged(userData => {
            setUser(userData);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        const getAccountInfo = async () => {
            try {
                const userDocRef = db.collection('users').doc(uid);
                const userDoc = await userDocRef.get();
                const data = userDoc.data();
                setShaketag(data.shaketag);
                setEmail(data.email);
            }
            catch (e) {
                console.log(e);
            }
        };

        if (uid !== undefined) {
            getAccountInfo();
        }
    }, [uid]);

    const value = {
        user,
        uid,
        signUp,
        login,
        logout,
        email,
        shaketag,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, useUserContext };