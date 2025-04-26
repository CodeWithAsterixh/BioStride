// Helper: Returns the last day of a given month (month is 1-indexed)
export const getLastDayOfMonth = (year: number, month: number): number =>
  new Date(year, month, 0).getDate();
export function getDayOfWeek(year: number, month: number, day: number): number {
  const date = new Date(year, month - 1, day); // Month is 0-indexed in JS Date
  return date.getDay();
}

export function getDateRange(data: { date: string }[]): {
  min: string;
  max: string;
} {
  if (data.length === 0) {
    throw new Error("Data array is empty");
  }
  // Convert all date strings to Date objects.
  const dates = data.map((item) => new Date(item.date));
  // Initialize min and max with the first date.
  let minDate = dates[0];
  let maxDate = dates[0];

  dates.forEach((d) => {
    if (d < minDate) {
      minDate = d;
    }
    if (d > maxDate) {
      maxDate = d;
    }
  });
  // Convert back to ISO date strings (YYYY-MM-DD).
  return {
    min: minDate.toISOString().split("T")[0],
    max: maxDate.toISOString().split("T")[0],
  };
}




// Helper function to calculate age from a date string
export function calculateAge(dateString: string): number {
  const birthDate = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}