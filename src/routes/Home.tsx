// import React from 'react'

import { FilterIcon, MenuIcon } from "lucide-react";
import DashboardSectionContainer from "../components/DashboardSectionContainer/DashboardSectionContainer";


export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:gap-3 md:pt-0 lg:pt-2 xl:pt-0 h-full w-full bg-transparent shadow-lg relative md:px-5 md:pb-4">
      <DashboardSectionContainer header={{
        extra:<div className="w-full p-2 flex items-center justify-between">
          {/* tabs */}
          <ul className="w-fit bg-slate-200 p-1 rounded-md flex items-center gap-2 *:duration-300 *:cursor-pointer *:font-bold hover:*:bg-white/50">
            <li className="w-fit px-4 py-1 bg-white hover:!bg-white rounded-md shadow-md">Dashboard</li>{/* present child */}
            <li className="w-fit px-4 py-1 rounded-md">Dashboard</li>
            <li className="w-fit px-4 py-1 rounded-md">Dashboard</li>
            <li className="w-fit px-4 py-1 rounded-md">Dashboard</li>
          </ul>
          {/* side controls */}
          <div className="flex items-center justify-between gap-2 *:cursor-pointer hover:*:shadow-lg *:duration-300">
            <button className="buttonEffect w-fit p-1 px-3 flex items-center justify-center gap-2 border-2 border-slate-500 rounded-md text-slate-500">Filter<FilterIcon className="size-4"/></button>
            <button className="buttonEffect w-fit p-1 aspect-square border-2 border-slate-500 rounded-md text-slate-500"><MenuIcon/></button>
          </div>
        </div>
      }} sx={{
        mainSLotClass: "!h-[calc(85vh-1rem)] !overflow-y-auto !border-[1px] border-slate-300"
      }}></DashboardSectionContainer>
    </div>
  );
}
