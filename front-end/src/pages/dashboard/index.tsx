import { useAtom } from 'jotai';
import Card from '../../components/card';
import Header from '../header';
import LiveChartsDay from '../live-charts/day';
import StockDetails from '../stock-details';
import { searchStock } from '../../atom/stockSearchAtom';

const Dashboard = () => {
  const [searchValueAtom] = useAtom(searchStock);

  return (
    <div className='xl:h-auto h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-12 md:p-8 xl:p-10 max-sm:p-3'>
      <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1'>
        <Card className='h-auto p-4 md:p-6'>
          <Header />
        </Card>
      </div>

      <div className='md:col-span-2 row-span-4 max-sm:mt-12'>
        <Card className='h-auto p-4 md:p-6 max-sm:h-full'>
          <div>
            <LiveChartsDay symbol={searchValueAtom} interval={"1min"} />
          </div>
        </Card>
      </div>

      <div className='row-span-2 xl:row-span-4 max-sm:pb-12'>
        <Card className='h-auto p-4 md:p-6 max-sm:pb-12'>
          <StockDetails symbol={searchValueAtom} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
