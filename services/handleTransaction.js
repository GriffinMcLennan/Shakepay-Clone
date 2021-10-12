import { db } from './../firebase'
import { formatNumber } from './formatNumber'
import { stringToNumber } from './stringToNumber'

const handleTransaction = async (fromCurrency, toCurrency, fromAmount, uid, toAmount) => {
    const userDocRef = db.collection('users').doc(uid);
    const userDoc = await userDocRef.get();
    const data = userDoc.data();
    let {
        Bitcoin,
        Ethereum,
        Dollars,
        BitcoinTransactions,
        EthereumTransactions,
        DollarTransactions,
    } = data;

    Bitcoin = Number(Bitcoin);
    Ethereum = Number(Ethereum);
    Dollars = Number(Dollars);


    const toAmountNum = stringToNumber(toAmount);
    const fromAmountNum = stringToNumber(fromAmount);
    const fromAmountFormattedArr = formatNumber(fromAmount);

    const fromAmountFormatted = fromAmountFormattedArr.join("");
    const toAmountFormatted = formatNumber(toAmountNum).join("");


    /*
        type,
        amount,
        date,
        address
    */

    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = `${months[d.getMonth()]} ${d.getDate()}`;

    if (fromCurrency === 'Bitcoin') {
        if (fromAmountNum > Bitcoin) {
            return false;
        }

        Bitcoin -= fromAmountNum;
        BitcoinTransactions.push({
            type: "Sell",
            amount: fromAmountFormatted,
            date: date,
        });
    }
    else if (fromCurrency === 'Ethereum') {
        if (fromAmountNum > Ethereum) {
            return false;
        }

        Ethereum -= fromAmountNum;
        EthereumTransactions.push({
            type: "Sell",
            amount: fromAmountFormatted,
            date: date,
        });
    }
    else if (fromCurrency === 'Dollars') {
        if (fromAmountNum > Dollars) {
            return false;
        }

        Dollars -= fromAmountNum;
        DollarTransactions.push({
            type: "Sell",
            amount: fromAmountFormatted,
            date: date,
        });
    }
    else {
        return false;
    }

    if (toCurrency === 'Bitcoin') {
        Bitcoin += toAmountNum;
        BitcoinTransactions.push({
            type: "Buy",
            amount: toAmountFormatted,
            date: date,
        });
    }
    else if (toCurrency === 'Ethereum') {
        Ethereum += toAmountNum;
        EthereumTransactions.push({
            type: "Buy",
            amount: toAmountFormatted,
            date: date,
        });
    }
    else if (toCurrency === 'Dollars') {
        Dollars += toAmountNum;
        DollarTransactions.push({
            type: "Buy",
            amount: toAmountFormatted,
            date: date,
        });
    }
    else {
        return false;
    }

    userDocRef.update({
        Dollars: Dollars.toString(),
        Bitcoin: Bitcoin.toString(),
        Ethereum: Ethereum.toString(),
        DollarTransactions: DollarTransactions,
        BitcoinTransactions: BitcoinTransactions,
        EthereumTransactions: EthereumTransactions,
    });

    return true;
}

export { handleTransaction };