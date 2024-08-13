import { Link, Outlet } from "react-router-dom";
import stockImage from "../../assets/stock-image.jpg"

export const AppLayout = () => {

    return (
        <>
        {
            <div className='mainDiv w-full h-full flex flex-col'>
                
                <div className='w-full h-full'>
                    <div className='max-sm:w-[100%] h-full w-full relative text-white  bg-gradient-to-r from-gray-700 to-black'>
                        <div className='absolute h-screen w-full' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${stockImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='w-full h-full flex flex-col justify-center items-center gap-10 p-24 max-sm:p-6'>
                                <h1 className='text-[#e2e1e1] text-8xl tracking-wider text-center font-bold max-sm:text-4xl'>STOCK MARKET PRICE</h1>
                                <p className='text-[#d6d4d4] text-2xl flex text-center max-sm:text-lg'>
                                    Stay ahead of the market with real-time stock price updates. Our platform provides comprehensive data on stock performance, including current prices, historical trends, and detailed charts. Whether you're a seasoned investor or new to the market, our tools are designed to help you make informed decisions and stay on top of market movements.
                                </p>
                                <div>
                                    <Link className='p-4 pl-8 pr-8 bg-[#2a75d8] w-24 h-24 text-[#c7c5c5] font-semibold text-xl tracking-wide rounded-xl hover:bg-[#3d71b6]' to={'/stocks'}>
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <main className='grow h-auto min-h-[100dvh]'>
                        <Outlet />
                    </main>
                </div>
            </div>
        }
        </>
    )
}
