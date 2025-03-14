import { RevenueData } from "../types";

// milliseconds in one day

function generateRevenueDataForRange(
  minYear: number,
  maxYear: number
): RevenueData[] {
  const data: RevenueData[] = [];
  const today = new Date();
  // Compute cutoff as yesterday
  const cutoff = new Date(today.getTime());

  // Candidate end date: December 31 of maxYear
  const candidateEndDate = new Date(maxYear, 11, 31);
  // Actual end date is the earlier of candidateEndDate and cutoff
  const endDate = cutoff < candidateEndDate ? cutoff : candidateEndDate;

  // Start from January 1 of minYear.
  const d = new Date(minYear, 0, 1);

  while (d <= endDate) {
    const dateStr = d.toISOString().split("T")[0];
    // Create two dummy entries for this day.
    const day = d.getDate();

    Array.from({ length: 5 }, () => {
      data.push({
        date: dateStr,
        income: Math.floor((Math.random() + 1) * 50) + day * 8, // example formula for income
        expenses: Math.floor((Math.random() + 1) * 50) + day * 4, // example formula for expenses
      });
    });
    // Move to the next day.
    d.setDate(d.getDate() + 1);
  }

  return data;
}

const thisYear = new Date().getFullYear();
export const revenueData = generateRevenueDataForRange(thisYear - 2, thisYear);
