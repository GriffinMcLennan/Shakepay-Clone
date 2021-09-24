import React, { useState, createContext, useContext } from 'react'

const ModalContext = createContext();

const useModalContext = () => {
    return useContext(ModalContext);
}

const ModalProvider = ({ children }) => {
    const [tradeModalVisible, setTradeModalVisible] = useState(false);
    const [fundingModalVisible, setFundingModalVisible] = useState(false);

    const toggleTradeModalVisible = () => {
        setTradeModalVisible(!tradeModalVisible);
    }

    const toggleFundingModalVisible = () => {
        setFundingModalVisible(!fundingModalVisible);
    }

    const value = {
        tradeModalVisible,
        toggleTradeModalVisible,
        fundingModalVisible,
        toggleFundingModalVisible,
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalProvider, useModalContext };

