import axios from "axios"
const periodToDays = { "H": 1, "D": 1, "W": 7, "M": 30, "Y": 365 };
// const link = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=bidaily";

export default priceService = async (currency, timePeriod) => {
    currency = currency.toLowerCase();
    const days = periodToDays[timePeriod];
    const priceFrequency = days > 30 ? 'daily' : 'bidaily';
    const url = `https://api.coingecko.com/api/v3/coins/${currency}/market_chart?vs_currency=usd&days=${days}&interval=${priceFrequency}`;
    // const url = `https://api.coingecko.com/api/v3/coins/${currency}/market_chart?vs_currency=usd&days=5&interval=daily`;

    const response = await axios.get(url);
    const prices = response.data.prices;
    const mapped = prices.map(tuple => ({ x: tuple[0].toFixed(2), y: tuple[1].toFixed(2) }));

    if (timePeriod === "H") {
        return mapped.slice(-60);
    }
    return mapped;
}

const basicPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd";
    const response = await axios.get(url);
    const data = response.data;
    const btcPrice = data.bitcoin.usd.toFixed(2);
    const ethPrice = data.ethereum.usd.toFixed(2);
    return { "btcPrice": btcPrice, "ethPrice": ethPrice };
}

export { basicPrices as basicPrices };