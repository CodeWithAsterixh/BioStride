import { useEffect, useState } from "react";
import useDateNavigator from "../../contexts/useRangerFilters";
import PatientStatisticsChart from "../../features/patientsFeatures/PatientStatisticsChart/PatientStatisticsChart";
import { PatientStatistics as PatientStatisticsType } from "../../types";
import { patientStatisticsDummy } from "../../utils/patientStatisticsDummy";
import DashboardSectionContainer from "../DashboardSectionContainer/DashboardSectionContainer";
import FilterRange from "../FilterType/FilterRange";
import FilterType from "../FilterType/FilterType";
import { getDateRange } from "../../utils/lib/dateHandlers";


export default function PatientStatistics() {
    const range = getDateRange(patientStatisticsDummy)
  
  const {
    currentValueString, // Formatted string (e.g., "20/dec/2024").
    handlePrev, // Function to navigate backward.
    handleNext, // Function to navigate forward.
    setFilterType, // Function to change the navigation unit.
    underlying,
    max,
    min,
    currentRange
  } = useDateNavigator({
    initialMin: range.min,
    initialMax: range.max,
    initialFilter: "day",
  });

  const [filteredData , setFilteredData] = useState<PatientStatisticsType[]>([]);
    const filterStats = (data: PatientStatisticsType[], start: string, end: string): PatientStatisticsType[] => {
      return data.filter(item => item.date >= start && item.date <= end);
    };

  
    useEffect(() => {
      setFilteredData(filterStats(patientStatisticsDummy, currentRange.start, currentRange.end))
    }, [currentRange])



  return (
    <DashboardSectionContainer
      sx={{
        headerSLotClass:"flew-wrap *:flex-grow min-[498px]:*:flex-grow-0"
      }}
      header={{
        title: <span className="flex flex-col text-neutral-800 dark:text-neutral-200" >
          <h2 className="text-lg text-neutral-700 dark:text-neutral-300 font-bold">Patient Overview</h2>
          <p className="text-sm">According to age stages</p>
        </span>,
        extra: <FilterType onChange={setFilterType} />,
      }}
    >
      <div className="w-full flex gap-4 flex-col *:flex-grow min-[498px]:*:flex-grow-0">
        <div className="w-full flex justify-end">
          <FilterRange
            currentValue={currentValueString}
            actions={{
              prev: handlePrev,
              next: handleNext,
            }}
            disabledNext={underlying === max}
            disabledPrev={underlying === min}
          />
        </div>
        <div className="w-full flex items-center justify-between gap-3 text-neutral-800 dark:text-neutral-200">
          <ul className="w-full flex items-center gap-3">
            <li className="revenueType before:bg-[#005f6b]">Adult</li>
            <li className="revenueType before:bg-[#00b2cb]">Elderly</li>
            <li className="revenueType before:bg-[#80dce5]">Children</li>
          </ul>
         
        </div>
      </div>
      <PatientStatisticsChart data={filteredData} />
      

    </DashboardSectionContainer>
  )
}