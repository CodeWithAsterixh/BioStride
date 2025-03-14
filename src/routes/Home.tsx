// import React from 'react'

import {
  CalendarCheck2Icon,
  HeartPulseIcon,
  PersonStandingIcon,
} from "lucide-react";
import DashboardSectionContainer from "../components/DashboardSectionContainer/DashboardSectionContainer";
import DashboardTrendCard from "../components/DashboardTrendCard/DashboardTrendCard";
import PatientStatistics from "../components/PatientsStatistics";
import Revenues from "../components/Revenues";
import ActivityReport from "../components/ActivityReport";
import DoctorsTable from "../components/DoctorsTable";
import RecentPatientsTable from "../components/RecentPatients";

export default function Home() {
  return (
    <div className="h-full overflow-y-auto no-scrollbar md:px-4 pb-3 gap-2 grid grid-cols-1 md:grid-cols-[1fr_300px]">
      <div className="w-full md:bg-neutral-50 md:dark:bg-slate-900 pb-10 rounded-lg px-1 flex flex-col gap-4 md:max-h-full md:overflow-y-auto scrollBar">
        {/* summary report */}

        <section
          id="trend"
          className="w-full shrink-0 scroll-px-2 px-2 pt-7 md:pt-0 lg:pt-7 box-border flex items-center justify-start gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          <DashboardTrendCard
            averageTotalRate={2500}
            trendRate={20}
            title={"Total Patients"}
            trendFor="last week"
            icon={<PersonStandingIcon />}
          />
          <DashboardTrendCard
            averageTotalRate={250}
            trendRate={1.2}
            title={"Total Appointments"}
            trendFor="last week"
            icon={<CalendarCheck2Icon />}
          />
          <DashboardTrendCard
            averageTotalRate={20}
            trendRate={0.13}
            title={"Total Surgery"}
            trendFor="this week"
            icon={<HeartPulseIcon />}
          />
        </section>

        {/* main dashboard content */}
        <main className="w-full px-2 flex flex-col gap-4">
          <div className="w-full *:!h-full *:!max-h-full grid lg:grid-cols-[2fr_3fr] gap-4">
            <PatientStatistics />
            <Revenues />
          </div>
          <div className="w-full *:!h-full *:!max-h-full grid lg:grid-cols-[3fr_2fr] gap-4">
            {/* Patient management summary */}
            <RecentPatientsTable/>
            <div className="w-full grid gap-4 grid-cols-1 min-[920px]:grid-cols-2 lg:grid-cols-1">
              <ActivityReport />
              <DoctorsTable />
            </div>
          </div>
        </main>
      </div>
      <div className="w-full h-full px-3 md:px-0 mb-16 md:pb-0">
      <DashboardSectionContainer header={{ title: "Appointments" }} />
      </div>
    </div>
  );
}
