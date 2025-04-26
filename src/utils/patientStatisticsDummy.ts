// demographicsDataGenerator.ts


export type DemographicData = {
  date: string; // ISO date string, e.g. "2024-01-15"
  adult: number;
  elderly: number;
  children: number;
};

function generateDemographicDataForRange(
  minYear: number,
  maxYear: number
): DemographicData[] {
  const data: DemographicData[] = [];
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
    const day = d.getDate();

    data.push({
      date: dateStr,
      adult: Math.floor((Math.random() + 1) * 200) + day * 5, // Example formula for adult count
      elderly: Math.floor((Math.random() + 1) * 100) + day * 3, // Example formula for elderly count
      children: Math.floor((Math.random() + 1) * 50) + day * 2, // Example formula for children count
    });

    // Move to the next day.
    d.setDate(d.getDate() + 1);
  }

  return data;
}

const thisYear = new Date().getFullYear();
export const patientStatisticsDummy = generateDemographicDataForRange(
  thisYear - 2,
  thisYear
);
