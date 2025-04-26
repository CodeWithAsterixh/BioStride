// useDateNavigator.ts
import { useState, useCallback, useMemo } from "react";
import { getLastDayOfMonth } from "../utils/lib/dateHandlers";
import { ONE_DAY_MS } from "../utils/constants/time";

export type DateRangeNavigatorProps = {
  initialMin: string; // ISO date string, e.g. "2020-01-10"
  initialMax: string; // ISO date string, e.g. "2024-12-20"
  initialFilter?: "day" | "month" | "year";
};


// Hook: useDateNavigator
// Simulates smooth navigation through time (like Google Calendar) within fixed boundaries.
const useDateNavigator = ({
  initialMin,
  initialMax,
  initialFilter = "day",
}: DateRangeNavigatorProps) => {
  // Convert ISO strings to Date objects.
  const minDate = useMemo(() => new Date(initialMin), [initialMin]);
  const maxDate = useMemo(() => new Date(initialMax), [initialMax]);
  // Start with the max date as the initial current date.
  const [current, setCurrent] = useState<Date>(maxDate);

  const [filterType, setFilterType] = useState<"day" | "month" | "year">(initialFilter);

  // Navigation: handlePrev subtracts one unit from current date.
  const handlePrev = useCallback(() => {
    setCurrent((prev) => {
      let newDate: Date;
      if (filterType === "day") {
        newDate = new Date(prev.getTime() - ONE_DAY_MS);
      } else if (filterType === "month") {
        // In month view, always set the day to 1.
        newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      } else {
        // In year view, set month to January and day to 1.
        newDate = new Date(prev.getFullYear() - 1, 0, 1);
      }
      // Clamp to minDate.
      return newDate < minDate ? minDate : newDate;
    });
  }, [filterType, minDate]);

  // Navigation: handleNext adds one unit to current date.
  const handleNext = useCallback(() => {
    setCurrent((prev) => {
      let newDate: Date;
      if (filterType === "day") {
        newDate = new Date(prev.getTime() + ONE_DAY_MS);
      } else if (filterType === "month") {
        newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      } else {
        newDate = new Date(prev.getFullYear() + 1, 0, 1);
      }
      // Clamp to maxDate.
      return newDate > maxDate ? maxDate : newDate;
    });
  }, [filterType, maxDate]);

  // Compute slider boundaries for the active unit.
  const currentBoundaries = useMemo(() => {
    if (filterType === "day") {
      return {
        min: 1,
        max: getLastDayOfMonth(current.getFullYear(), current.getMonth() + 1),
      };
    }
    if (filterType === "month") {
      return { min: 1, max: 12 };
    }
    return { min: minDate.getFullYear(), max: maxDate.getFullYear() };
  }, [filterType, current, minDate, maxDate]);

  // Active unit's numeric value.
  const currentPosition = useMemo(() => {
    if (filterType === "day") return current.getDate();
    if (filterType === "month") return current.getMonth() + 1;
    return current.getFullYear();
  }, [filterType, current]);

  // Formatted current value string.
  const currentValueString = useMemo(() => {
    const monthNames = [
      "",
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    if (filterType === "year") {
      return `${current.getFullYear()}`;
    }
    if (filterType === "month") {
      return `${monthNames[current.getMonth() + 1]}/${current.getFullYear()}`;
    }
    return `${current.getDate()}/${monthNames[current.getMonth() + 1]}/${current.getFullYear()}`;
  }, [filterType, current]);

  // Compute the current range for the active unit.
  // For "day": from start to end of the day.
  // For "month": from the first to the last day of the month.
  // For "year": from January 1 to December 31.
  const currentRange = useMemo(() => {
    if (filterType === "day") {
      const start = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 0, 0, 0, 0);
      const end = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 23, 59, 59, 999);
      return { start: start.toISOString(), end: end.toISOString() };
    }
    if (filterType === "month") {
      const start = new Date(current.getFullYear(), current.getMonth(), 1, 0, 0, 0, 0);
      const lastDay = getLastDayOfMonth(current.getFullYear(), current.getMonth() + 1);
      const end = new Date(current.getFullYear(), current.getMonth(), lastDay, 23, 59, 59, 999);
      return { start: start.toISOString(), end: end.toISOString() };
    }
    const start = new Date(current.getFullYear(), 0, 1, 0, 0, 0, 0);
    const end = new Date(current.getFullYear(), 11, 31, 23, 59, 59, 999);
    return { start: start.toISOString(), end: end.toISOString() };
  }, [filterType, current]);

  // Compute the previous range based on the active unit.
  const previousRange = useMemo(() => {
    if (filterType === "day") {
      const prevDate = new Date(current.getTime() - ONE_DAY_MS);
      const start = new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate(), 0, 0, 0, 0);
      const end = new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate(), 23, 59, 59, 999);
      return { start: start.toISOString(), end: end.toISOString() };
    }
    if (filterType === "month") {
      const prevDate = new Date(current.getFullYear(), current.getMonth() - 1, 1);
      const lastDay = getLastDayOfMonth(prevDate.getFullYear(), prevDate.getMonth() + 1);
      const start = new Date(prevDate.getFullYear(), prevDate.getMonth(), 1, 0, 0, 0, 0);
      const end = new Date(prevDate.getFullYear(), prevDate.getMonth(), lastDay, 23, 59, 59, 999);
      return { start: start.toISOString(), end: end.toISOString() };
    }
    const prevYear = current.getFullYear() - 1;
    const start = new Date(prevYear, 0, 1, 0, 0, 0, 0);
    const end = new Date(prevYear, 11, 31, 23, 59, 59, 999);
    return { start: start.toISOString(), end: end.toISOString() };
  }, [filterType, current]);

  // Compute the next range based on the active unit.
  const nextRange = useMemo(() => {
    if (filterType === "day") {
      const nextDate = new Date(current.getTime() + ONE_DAY_MS);
      const start = new Date(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate(), 0, 0, 0, 0);
      const end = new Date(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDate(), 23, 59, 59, 999);
      return { start: start.toISOString(), end: end.toISOString() };
    }
    if (filterType === "month") {
      const nextDate = new Date(current.getFullYear(), current.getMonth() + 1, 1);
      const lastDay = getLastDayOfMonth(nextDate.getFullYear(), nextDate.getMonth() + 1);
      const start = new Date(nextDate.getFullYear(), nextDate.getMonth(), 1, 0, 0, 0, 0);
      const end = new Date(nextDate.getFullYear(), nextDate.getMonth(), lastDay, 23, 59, 59, 999);
      return { start: start.toISOString(), end: end.toISOString() };
    }
    const nextYear = current.getFullYear() + 1;
    const start = new Date(nextYear, 0, 1, 0, 0, 0, 0);
    const end = new Date(nextYear, 11, 31, 23, 59, 59, 999);
    return { start: start.toISOString(), end: end.toISOString() };
  }, [filterType, current]);

  // Underlying current date as ISO string.
  const underlying = useMemo(() => current.toISOString().split("T")[0], [current]);

  return {
    current: currentBoundaries,         // Slider boundaries for active unit.
    currentPosition,                     // Numeric value of active unit.
    currentValueString,                  // Formatted value string.
    currentRange,                        // Range of the selected period.
    previousRange,                       // Range of the previous period.
    nextRange,                           // Range of the next period.
    underlying,                          // Underlying date as ISO string.
    handlePrev,                          // Function to navigate backward.
    handleNext,                          // Function to navigate forward.
    filterType,                          // Active navigation unit.
    setFilterType,                       // Setter for navigation unit.
    min: minDate.toISOString().split("T")[0],
    max: maxDate.toISOString().split("T")[0],
  };
};

export default useDateNavigator;
