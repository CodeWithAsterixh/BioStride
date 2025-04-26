// import React from 'react'

import Scene from "@/components/3D/Scene"
import { AvatarImage } from "@/components/Avatars/Avatar"
import { DrawerClose, DrawerTitle } from "@/components/ui/drawer"
import { ArrowLeft, Settings } from "lucide-react"

function DrawerPatientProfile() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-full md:hidden">
      <div className="relative flex h-[11rem] bg-[#56bbe3] w-full bottomShadow">
        <div className="flex items-start justify-between bg-[#56bbe3] w-full">
          <div className="relative w-full h-full">
            <Scene />
          </div>
          <div className="absolute flex justify-between w-full px-4">
            <DrawerClose className="pt-2">
              <div className="p-2 bg-slate-500 dark:bg-darkComponentsBg rounded-full text-white">
                <ArrowLeft className="h-6 w-6" />
              </div>
            </DrawerClose>
            <div className="flex justify-center ">
              <span className="w-[7rem] h-6 bg-slate-500 dark:bg-darkComponentsBg rounded-br-[17px] rounded-bl-[17px]"></span>
            </div>
            <div className="flex pt-2">
                <button className="bg-slate-500 dark:bg-darkComponentsBg flex items-center justify-center rounded-full text-xl text-white p-2">
                  <Settings  className="w-6 h-6 rounded-full" />
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute mt-[-20.7rem] flex items-center justify-start w-full px-4 DrawerImageContainer">
        <div className="flex items-center justify-center overflow-hidden w-[8rem] h-[8rem] bg-[#56bbe3] rounded-full bottomShadow shadow-b-xl p-4 border-spacing-3">
          <div className="relative w-[7rem] h-[7rem] flex items-center justify-center">
            <Scene/>
          </div>
          <div className="absolute w-[7rem] h-[7rem] flex items-center justify-center">
            <AvatarImage src="https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxwYXRpZW50fGVufDB8fHx8MTc0MTE2Njg3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="hello" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 h-full w-full bg-white dark:bg-darkComponentsBg pt-[2rem] px-4">
        <div className="flex items-center justify-between pt-[1.8rem] w-full rounded-lg px-2 pb-4 border-b-2 dark:border-[#56bbe3]">
          <div className="flex flex-col items-start justify-center">
            <DrawerTitle className="text-2xl text-[#56bbe3] font-bold">John Doe</DrawerTitle>
            <p className=" text-gray-500 dark:text-white">gendar - Yrs 6 mos</p>
          </div>
          <p className="border px-4 py-2 border-[#56bbe3] text-[#56bbe3]">135646573657</p>
        </div>
        <div className="flex flex-col items-start justify-center pt-4 w-full">
          <p className="text-sm text-[#56bbe3] font-semibold">Address</p>
          <p>123 Main Street, Anytown USA</p>
        </div>
      </div>
    </div>
  )
}

export default DrawerPatientProfile