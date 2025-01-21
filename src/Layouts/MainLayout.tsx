
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function MainLayout() {
  return (
    <main className='flex flex-col justify-center items-center w-full h-screen bg-[#f2f8fc]'>
          {/* Navbar here*/}
          <nav className='w-full fixed top-0 left-0 z-[100] bg-white'>
              <Navbar/>
          </nav>
        <div className="w-full px-4 pb-[1rem] pt-[4rem]">
          <Outlet />
        </div>
          {/* footer below here */}
          
    </main>
  )
}
