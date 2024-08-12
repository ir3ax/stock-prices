interface TimeSeriesEntry {
    '1. open': string;
    '2. high': string;
    '3. low': string;
    '4. close': string;
}

interface TimeSeries {
    [timestamp: string]: TimeSeriesEntry;
}

interface TimeIntervalData {
    'Meta Data': {
        '1. Information': string;
        '2. Symbol': string;
        '3. Last Refreshed': string;
        '4. Interval': string;
        '5. Output Size': string;
        '6. Time Zone': string;
    };
    'Time Series (5min)': TimeSeries;
}

export const utilsStockData = (stockData: TimeIntervalData) => {
    const formattedData: { x: string; y: string[]; }[] = [];

    if (stockData['Time Series (5min)']) {
        Object.entries(
            stockData['Time Series (5min)']
        ).map(
            ([key, value]) => {
                formattedData.push({
                    x: key,
                    y: [
                        value['1. open'],
                        value['2. high'],
                        value['3. low'],
                        value['4. close'],
                    ]
                })
            }
        )
    }

    return formattedData
}