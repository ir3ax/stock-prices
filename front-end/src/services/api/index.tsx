const API_KEY = 'demo'
// const API_KEY = import.meta.env.VITE_API_KEY

//API for Fetching By 5minutes
export const fetchStocksDataByMins = async (symbol: string, interval: string) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`);

    const data = await response.json();
    return data;
}

//API for Fetching By Day
export const fetchStocksDataByDay = async (symbol: string) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`);

    const data = await response.json();
    return data;
}

//API for Fetching By Week
export const fetchStocksDataByWeek = async (symbol: string) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${API_KEY}`);

    const data = await response.json();
    return data;
}

//API for Fetching By Month
export const fetchStocksDataByMonth = async (symbol: string) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${API_KEY}`);

    const data = await response.json();
    return data;
}

//API for Fetching By Quotes End
export const fetchStocksDataByQuotesEnd = async (symbol: string) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);

    const data = await response.json();
    return data;
}

//API for Stock Search
export const fetchStocksDataSearch = async (value: string) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${API_KEY}`);

    const data = await response.json();
    return data;
}
