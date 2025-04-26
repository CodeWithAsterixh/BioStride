
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function MainLayout() {
  return (
    <main className='flex flex-col justify-center items-center w-full h-screen bg-[#f2f8fc] dark:bg-black'>
          {/* Navbar here*/}
          <nav className='w-full fixed top-0 left-0 z-[100] bg-white dark:bg-transparent'>
              <Navbar/>
          </nav>
        <div className="w-full pt-[3rem] md:pt-[6rem] overflow-y-hidden">
          <Outlet />
        </div>
          {/* footer below here */}
    </main>
  )
}
