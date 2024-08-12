import { useEffect, useMemo, useState } from 'react';
import { fetchStocksDataByMins } from '../../../services/api';
import ReactApexChart from 'react-apexcharts';
import { candleStickOptions } from '../../../utils/constant';
import { useAtom } from 'jotai';
import { stockPrice } from '../../../atom/stockPriceAtom';

interface StocksData {
  symbol: string;
  interval: string;
}

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

const LiveChartsDay = (props: StocksData) => {
  const [stockData, setStockData] = useState<TimeIntervalData | null>(null);
  const [stockPriceAtom] = useAtom(stockPrice);

  useEffect(() => {
    fetchStocksDataByMins(props.symbol, props.interval).then(data =>
      setStockData(data)
    );
  }, [props.symbol, props.interval]);

  const seriesData = useMemo(() => {
    if (!stockData) return [];

    return Object.keys(stockData['Time Series (5min)']).map(timestamp => {
      const entry = stockData['Time Series (5min)'][timestamp];
      return {
        x: new Date(timestamp).getTime(),
        y: [
          parseFloat(entry['1. open']),
          parseFloat(entry['2. high']),
          parseFloat(entry['3. low']),
          parseFloat(entry['4. close']),
        ],
      };
    });
  }, [stockData]);

  return (
    <div>
      <div id='chart'>
      <div className='flex flex-col gap-2 pb-4'>
        <p className='font-semibold text-3xl tracking-wide ml-1'>{props.symbol}</p>
        <p className='font-bold text-4xl tracking-wide text-[#239c5e]'>{stockPriceAtom}</p>
      </div>
        <ReactApexChart
          options={candleStickOptions}
          series={[{ name: 'candle', data: seriesData }]}
          type="candlestick"
        />
      </div>
    </div>
  );
};

export default LiveChartsDay;
