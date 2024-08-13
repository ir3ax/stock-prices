import { useAtom } from 'jotai';
import Card from '../../components/card';
import Header from '../header';
import StockDetails from '../stock-details';
import { searchStock } from '../../atom/stockSearchAtom';
import LiveChartsMinutes from '../live-charts/min';
import { stockRange } from '../../atom/stockRangeAtom';
import LiveChartDay from '../live-charts/day';
import LiveChartMonthly from '../live-charts/monthly';
import LiveChartWeekly from '../live-charts/weekly';
import { stockPrice } from '../../atom/stockPriceAtom';
import { SetStateAction } from 'react';

const Dashboard = () => {
  const [searchValueAtom] = useAtom(searchStock);
  const [stockPriceAtom] = useAtom(stockPrice);
  const [selectedOption, setSelectedOption] = useAtom(stockRange);

  const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='xl:h-auto h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-12 md:p-8 xl:p-10 max-sm:p-3'>
      <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1'>
        <Card className='h-auto p-4 md:p-6'>
          <Header />
        </Card>
      </div>

      <div className='xl:col-span-2 xl:mt-0 lg:col-span-1 lg:mt-24 md:col-span-1 md:mt-24 row-span-4 max-sm:mt-12'>
        <Card className='h-auto p-4 md:p-6 max-sm:h-full'>
        <div className='flex'>
          <div className='flex flex-col gap-2 pb-4'>
            <p className='font-semibold text-3xl tracking-wide ml-1 max-sm:text-xl'>{searchValueAtom}</p>
            <p className='font-bold text-4xl tracking-wide text-[#239c5e] max-sm:text-2xl'>{stockPriceAtom}</p>
          </div>
          <div className='flex justify-end items-end w-full'>
            <div className='flex justify-end items-end gap-2 rounded-md p-2 max-sm:w-[80%]'>
              <div>
                <input
                  type='radio'
                  name='option'
                  id='1'
                  value='5min'
                  className='peer hidden'
                  checked={selectedOption === '5min'}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor='1'
                  className='block cursor-pointer select-none rounded-lg p-2 text-center peer-checked:bg-[#142539] peer-checked:font-bold peer-checked:text-white max-sm:text-[12px]'
                >
                  5min
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  name='option'
                  id='2'
                  value='daily'
                  className='peer hidden'
                  checked={selectedOption === 'daily'}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor='2'
                  className='block cursor-pointer select-none rounded-lg p-2 text-center peer-checked:bg-[#142539] peer-checked:font-bold peer-checked:text-white max-sm:text-[12px]'
                >
                  D
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  name='option'
                  id='3'
                  value='weekly'
                  className='peer hidden'
                  checked={selectedOption === 'weekly'}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor='3'
                  className='block cursor-pointer select-none rounded-lg p-2 text-center peer-checked:bg-[#142539] peer-checked:font-bold peer-checked:text-white max-sm:text-[12px]'
                >
                  W
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  name='option'
                  id='4'
                  value='monthly'
                  className='peer hidden'
                  checked={selectedOption === 'monthly'}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor='4'
                  className='block cursor-pointer select-none rounded-lg p-2 text-center peer-checked:bg-[#142539] peer-checked:font-bold peer-checked:text-white max-sm:text-[12px]'
                >
                  M
                </label>
              </div>
              
            </div>
          </div>
        </div>
          <div>
            {
              selectedOption === '5min' ? (
                <LiveChartsMinutes symbol={searchValueAtom} interval={'5min'}/>
              ) : selectedOption === 'daily' ? (
                <LiveChartDay symbol={searchValueAtom}/>
              ) : selectedOption === 'weekly' ? (
                <LiveChartWeekly symbol={searchValueAtom}/>
              ) : selectedOption === 'monthly' ? (
                <LiveChartMonthly symbol={searchValueAtom}/>
              ) : null
            }
          </div>
        </Card>
      </div>

      <div className='row-span-2 xl:row-span-4 max-sm:pb-12 xl:mt-0 lg:mt-24 md:mt-24 max-md:mt-24'>
        <Card className='h-auto p-4 md:p-6 max-sm:pb-12'>
          <StockDetails symbol={searchValueAtom} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
