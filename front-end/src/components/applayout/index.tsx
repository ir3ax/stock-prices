import { Outlet } from "react-router-dom";
import Footer from "../footer";
import { TopBar } from "../topbar";

export const AppLayout = () => {

    return (
        <>
        {
            <div className='mainDiv w-full h-full flex flex-col'>
                
                <div className='w-full h-full'>
                    <div className='sticky top-0 z-50 drop-shadow-md shadow-black bg-[#f3efef]'>
                        <TopBar />
                    </div>
                    <main className='grow h-auto min-h-[100dvh]'>
                        <Outlet />
                    </main>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        }
        </>
    )
}
