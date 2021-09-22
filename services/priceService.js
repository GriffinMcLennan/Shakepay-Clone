import axios from "axios"
const periodToDays = { "H": 1, "D": 1, "W": 7, "M": 30, "Y": 365 };
// const link = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=bidaily";

export default priceService = async (currency, timePeriod) => {
    currency = currency.toLowerCase();
    const days = periodToDays[timePeriod];
    const url = `https://api.coingecko.com/api/v3/coins/${currency}/market_chart?vs_currency=usd&days=${days}&interval=bidaily`;
    const response = await axios.get(url);
    const prices = response.data.prices;
    const mapped = prices.map(tuple => ({ x: tuple[0], y: tuple[1] }));
    return mapped;
}