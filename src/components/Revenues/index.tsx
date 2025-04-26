// Revenues.tsx
import { useEffect, useState } from "react";
import useDateNavigator from "../../contexts/useRangerFilters";
import RevenueChart from "../../features/patientsFeatures/TotalExpensesChart/RevenuesChart";
import DashboardSectionContainer from "../DashboardSectionContainer/DashboardSectionContainer";
import FilterRange from "../FilterType/FilterRange";
import FilterType from "../FilterType/FilterType";
import { getDateRange } from "../../utils/lib/dateHandlers";
import { RevenueData } from "../../types";
import { revenueData } from "../../utils/revenuesDummy";

export default function Revenues() {

  const range = getDateRange(revenueData)


  const {
    currentValueString, // Formatted string (e.g., "20/dec/2024").
    handlePrev, // Function to navigate backward.
    handleNext, // Function to navigate forward.
    setFilterType, // Function to change the navigation unit.
    underlying,
    max,
    min,
    currentRange,
    filterType
  } = useDateNavigator({
    initialMin: range.min,
    initialMax: range.max,
    initialFilter: "day",
  });
  const [filteredData , setFilteredData] = useState<RevenueData[]>([]);
  const filterRevenueData = (data: RevenueData[], start: string, end: string): RevenueData[] => {
    return data.filter(item => item.date >= start && item.date <= end);
  };
  const changePercentage = (data: RevenueData[]): number => {
    const totalIncome = data.reduce((acc, item) => acc + item.income, 0);
    const totalExpenses = data.reduce((acc, item) => acc + item.expenses, 0);
    if (totalIncome === 0) return 0; // Avoid division by zero
    return Math.round(((totalIncome - totalExpenses) / totalIncome) * 100);
  };

  useEffect(() => {
    setFilteredData(filterRevenueData(revenueData, currentRange.start, currentRange.end))
  }, [currentRange])
  

  // Explicit type for boundaries

  return (
    <DashboardSectionContainer
      header={{
        title: "Revenues",
        extra: <FilterType onChange={setFilterType} />,
      }}
    >
      <div className="w-full flex gap-4 flex-col">
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
        <div className="w-full flex flex-wrap  items-center justify-between gap-3">
          <ul className="w-fit flex items-center gap-3 text-neutral-800 dark:text-neutral-200">
            <li className="revenueType before:bg-[#4caf50]">Income</li>
            <li className="revenueType before:bg-[#ff6b6b]">Expenses</li>
          </ul>
          <span className="py-1 basis-[15rem] max-w-fit w-fit shrink-0 px-3 rounded-md bg-primary text-white">
            You saved {changePercentage(filteredData)}% {filterType==="day" ? "this day" : filterType==="month"?"this month":"this year"}
          </span>
        </div>
      </div>

      <RevenueChart data={filteredData}/>
    </DashboardSectionContainer>
  );
}
