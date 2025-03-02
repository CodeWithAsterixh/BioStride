
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function MainLayout() {
  return (
    <main className='flex flex-col items-center w-full h-screen bg-[#f2f8fc]'>
          {/* Navbar here*/}
          <nav className='w-full fixed top-0 left-0 z-[100] bg-white'>
              <Navbar/>
          </nav>
        <div className="w-full pt-[3rem] md:pt-[6rem] overflow-y-hidden">
          <Outlet />
        </div>
          {/* footer below here */}
    </main>
  )
}
