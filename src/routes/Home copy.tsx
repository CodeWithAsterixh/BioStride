// import React from 'react'

import { CalendarCheck2Icon, HeartPulseIcon, PersonStandingIcon } from "lucide-react";
import DashboardTrendCard from "../components/DashboardTrendCard/DashboardTrendCard";
import DashboardSectionContainer from "../components/DashboardSectionContainer/DashboardSectionContainer";
import PatientStatisticsChart from "../features/patientsFeatures/PatientStatisticsChart/PatientStatisticsChart";
import TotalExpensesChart from "../features/patientsFeatures/TotalExpensesChart/TotalExpensesChart";
import { totalExpenseData } from "../features/patientsFeatures/TotalExpensesChart/expensesData";

export default function Home() {
  return (
    <div className="h-full overflow-y-auto no-scrollbar">
      {/* summary report */}
      <section
        id="trend"
        className="w-full scroll-px-4 px-4 pt-7 md:pt-0 lg:pt-7 box-border flex items-center justify-start gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        <DashboardTrendCard
          averageTotalRate={2500}
          trendRate={20}
          title={"Total Patients"}
          trendFor="last week"
          icon={<PersonStandingIcon/>}
        />
        <DashboardTrendCard
          averageTotalRate={250}
          trendRate={1.2}
          title={"Total Appointments"}
          trendFor="last week"
          icon={<CalendarCheck2Icon/>}
        />
        <DashboardTrendCard
          averageTotalRate={20}
          trendRate={0.13}
          title={"Total Surgery"}
          trendFor="this week"
          icon={<HeartPulseIcon/>}
        />
      </section>

      {/* main dashboard content */}
      <main className="w-full p-4 flex flex-col gap-4">
        {/* statistics */}
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:flex gap-4">
          <DashboardSectionContainer header={{title:"Patients Statistics"}}>
            <PatientStatisticsChart/>
          </DashboardSectionContainer>
          <DashboardSectionContainer header={{title:"Total Expense"}}>
            
            <div className="w-full flex flex-col-reverse min-[498px]:flex-row items-center justify-center">
              <div className="w-full min-[498px]:w-[50%] bg-blue-300 p-2">
                <span>
                  <b>Total Expense</b>
                  <p>${totalExpenseData.find(d=>d.name === 'total')?.value}</p>
                </span>
                <ul className="flex flex-col gap-2">
                  {
                    totalExpenseData.map((item,ind)=>{
                      const isNotTotal = item.name==="total"
                      const total = totalExpenseData.find(d=>d.name === 'total')?.value
                      if(!total || isNotTotal){
                        return null
                      }
                      return <li key={ind} className="flex gap-2 relative before:relative before:">
                        <span className="font-bold">{item.name}</span>
                        <span className="">{Math.floor((item.value / total) * 100)}%</span>
                      </li>
                    })
                  }
                </ul>
              </div>
            <TotalExpensesChart dataList={totalExpenseData}/>
            </div>
          </DashboardSectionContainer>
        </div>
        {/* Patient management summary */}
        <DashboardSectionContainer header={{title:"Patient Management"}}/>

      </main>
    </div>
  );
}
