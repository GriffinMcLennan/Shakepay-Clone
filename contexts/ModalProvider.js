import React, { useState, createContext, useContext } from 'react'

const ModalContext = createContext();

const useModalContext = () => {
    return useContext(ModalContext);
}

const ModalProvider = ({ children }) => {
    const [tradeModalVisible, setTradeModalVisible] = useState(false);
    const [fundingModalVisible, setFundingModalVisible] = useState(false);
    const [interacModalVisible, setInteracModalVisible] = useState(false);
    const [shakingModalVisible, setShakingModalVisible] = useState(false);
    const [fromModalVisible, setFromModalVisible] = useState(false);
    const [toModalVisible, setToModalVisible] = useState(false);
    const [bitcoinModalVisible, setBitcoinModalVisible] = useState(false);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState("Dollars");

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

    const toggleFromModalVisible = () => {
        setFromModalVisible(!fromModalVisible);
    }

    const toggleToModalVisible = () => {
        setToModalVisible(!toModalVisible);
    }

    const toggleBitcoinModalVisible = () => {
        setBitcoinModalVisible(!bitcoinModalVisible);
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
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        fromModalVisible,
        toModalVisible,
        toggleFromModalVisible,
        toggleToModalVisible,
        bitcoinModalVisible,
        toggleBitcoinModalVisible,
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalProvider, useModalContext };

