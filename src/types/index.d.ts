export interface RevenueData {
  date: string; // ISO date string, e.g. "2023-01-15"
  income: number;
  expenses: number;
}

export interface PatientStatistics {
  date: string;
  adult: number;
  elderly: number;
  children: number;
}
