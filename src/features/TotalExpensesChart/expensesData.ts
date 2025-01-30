export interface totalExpense {
  name: string;
  value: number;
  color?: string;
}
export const totalExpenseData: totalExpense[] = [
  {
    name: "revenue",
    value: 5000,
    color: "#a0d8ef",
  },
  {
    name: "expense",
    value: 2000,
    color: "#56bbe3",
  },
  {
    name: "others",
    value: 500,
    color: "#1b7b9e",
  },
  {
    name:"total",
    value:9000,
  }
];
