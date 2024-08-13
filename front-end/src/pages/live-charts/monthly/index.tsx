import { useEffect, useMemo, useState } from 'react';
import { fetchStocksDataByMonth } from '../../../services/api';
import ReactApexChart from 'react-apexcharts';
import { candleStickOptions } from '../../../utils/constant';

interface StocksData {
  symbol: string;
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
    '4. Time Zone': string;
  };
  'Monthly Time Series': TimeSeries;
}

const LiveChartsMonthly = (props: StocksData) => {
  const [stockData, setStockData] = useState<TimeIntervalData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStocksDataByMonth(props.symbol)
      .then(data => {
        if (data && data['Monthly Time Series']) {
          setStockData(data);
          setError(null);
        } else {
          setError(`No data found for symbol: ${props.symbol}`);
        }
      })
      .catch(() => {
        setError(`Failed to fetch data for symbol: ${props.symbol}`);
      });
  }, [props.symbol]);

  const seriesData = useMemo(() => {
    if (!stockData) return [];

    return Object.keys(stockData['Monthly Time Series']).map(timestamp => {
      const entry = stockData['Monthly Time Series'][timestamp];
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

  if (error) {
    return <div className='text-red-500 w-full flex justify-center items-center'>{error}</div>;
  }

  return (
    <div>
      <div id='chart'>
        <ReactApexChart
          options={candleStickOptions}
          series={[{ name: 'candle', data: seriesData }]}
          type='candlestick'
        />
      </div>
    </div>
  );
};

export default LiveChartsMonthly;
