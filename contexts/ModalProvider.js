import React, { useState, createContext, useContext } from 'react'

const ModalContext = createContext();

const useModalContext = () => {
    return useContext(ModalContext);
}

const ModalProvider = ({ children }) => {
    const [tradeModalVisible, setTradeModalVisible] = useState(false);
    const [fundingModalVisible, setFundingModalVisible] = useState(false);
    const [interacModalVisible, setInteracModalVisible] = useState(false);
    const [shakingModalVisible, setShakingModalVisible] = useState(true);

    const toggleTradeModalVisible = () => {
        setTradeModalVisible(!tradeModalVisible);
    }

    const toggleFundingModalVisible = () => {
        setFundingModalVisible(!fundingModalVisible);
    }

    const toggleInteracModalVisible = () => {
        setInteracModalVisible(!interacModalVisible);
    }

    const toggleShakingModalVisible = () => {
        setShakingModalVisible(!shakingModalVisible);
    }

    const value = {
        tradeModalVisible,
        toggleTradeModalVisible,
        fundingModalVisible,
        toggleFundingModalVisible,
        interacModalVisible,
        toggleInteracModalVisible,
        shakingModalVisible,
        toggleShakingModalVisible,
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalProvider, useModalContext };

