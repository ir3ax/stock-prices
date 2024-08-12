const API_KEY = "demo"
// const API_KEY = import.meta.env.VITE_API_KEY


// export const fetchStocksDataByMins = async (symbol: string, interval: string) => {
//     const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`);

//     const data = await response.json();
//     return data;
// }


export const fetchStocksDataByMins = async (symbol: string, interval: string) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`);

    const data = await response.json();
    return data;
}

// export const fetchStocksDataByQuotesEnd = async (symbol: string) => {
//     const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);

//     const data = await response.json();
//     return data;
// }

export const fetchStocksDataByQuotesEnd = async (symbol: string) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${API_KEY}`);

    const data = await response.json();
    return data;
}


