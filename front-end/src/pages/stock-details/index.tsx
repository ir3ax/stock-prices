import { useEffect, useState } from "react";
import { fetchStocksDataByQuotesEnd } from "../../services/api";
import { useAtom } from "jotai";
import { stockPrice } from "../../atom/stockPriceAtom";
interface StocksData {
    symbol: string;
}
interface GlobalQuote {
    "01. symbol": string;
    "02. open": string;
    "03. high": string;
    "04. low": string;
    "05. price": string;
    "06. volume": string;
    "07. latest trading day": string;
    "08. previous close": string;
    "09. change": string;
    "10. change percent": string;
}
interface StockQuote {
    "Global Quote": GlobalQuote;
}
  
const StockDetails = (props: StocksData) => {
    const [stockDataByQuoteEnds, setStockDataByQuoteEnds] = useState<StockQuote | null>(null);
    const [, setStockPriceAtom] = useAtom(stockPrice);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchStocksDataByQuotesEnd(props.symbol)
            .then(data => {
                if (data && data['Global Quote']) {
                    setStockDataByQuoteEnds(data);
                    setStockPriceAtom(data["Global Quote"]["05. price"]);
                    setError(null);
                } else {
                    setStockDataByQuoteEnds(null);
                    setError(`No data found for symbol: ${props.symbol}`);
                    setStockPriceAtom('');
                }
            })
            .catch(() => {
                setStockDataByQuoteEnds(null);
                setError(`Failed to fetch data for symbol: ${props.symbol}`);
                setStockPriceAtom('');
            });
    }, [props.symbol]);

    if (error) {
        return <div className='text-red-500 w-full flex justify-center items-center'>{error}</div>;
    }

    return (
        <div id='details' className='w-full'>
            <h1 className='p-4 font-semibold'>Details</h1>
            <main>
                <section className='w-full flex p-4 border-b'>
                    <p className='w-full flex-1 flex justify-start items-start'>Symbol</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["01. symbol"]}</p>
                </section>
                <section className='w-full flex p-4 border-b'>
                    <p className='w-full flex-1 flex justify-start items-start'>Price</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["05. price"]}</p>
                </section>
                <section className='w-full flex p-4 border-b'>
                    <p className='w-full flex-1 flex justify-start items-start'>Open</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["02. open"]}</p>
                </section>
                <section className='w-full flex p-4 border-b'>
                    <p className='w-full flex-1 flex justify-start items-start'>High</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["03. high"]}</p>
                </section>
                <section className='w-full flex p-4 border-b'>
                    <p className='w-full flex-1 flex justify-start items-start'>Low</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["04. low"]}</p>
                </section>
                <section className='w-full flex p-4 border-b'>
                    <p className='w-full flex-1 flex justify-start items-start'>Volume</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["06. volume"]}</p>
                </section>
                <section className='w-full flex p-4 border-b'>
                    <p className='w-full flex-1 flex justify-start items-start'>Previous Close</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["08. previous close"]}</p>
                </section>
                <section className='w-full flex p-4 border-b'>
                    <p className='w-full flex-1 flex justify-start items-start'>Change</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["09. change"]}</p>
                </section>
                <section className='w-full flex p-4 border-b'>
                    <p className='w-full flex-1 flex justify-start items-start'>Change Percent</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["10. change percent"]}</p>
                </section>
                <section className='w-full flex p-4'>
                    <p className='w-full flex-1 flex justify-start items-start'>Latest Trading Day</p>
                    <p className='w-full flex-1 flex justify-end items-end'>{stockDataByQuoteEnds?.["Global Quote"]["07. latest trading day"]}</p>
                </section>  
            </main> 
        </div>
    );
}

export default StockDetails;
