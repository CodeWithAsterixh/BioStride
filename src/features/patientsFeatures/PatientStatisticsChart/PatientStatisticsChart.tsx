import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { PatientStatistics } from "../../../types";

const COLORS = ["#005f6b", "#00b2cb", "#80dce5"];

export default function PatientStatisticsChart({
  data,
}: {
  data: PatientStatistics[];
}) {
  // Aggregate the data across all records.
  const aggregatedData = data.reduce(
    (acc, item) => {
      return {
        adult: acc.adult + item.adult,
        elderly: acc.elderly + item.elderly,
        children: acc.children + item.children,
      };
    },
    { adult: 0, elderly: 0, children: 0 }
  );

  const pieData = [
    { name: "Adult", value: aggregatedData.adult },
    { name: "Elderly", value: aggregatedData.elderly },
    { name: "Children", value: aggregatedData.children },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={60}
        >
          {pieData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--primary-dark)",
            border: "1px solid #ccc",
            borderRadius: 10,
            padding: "0.125rem 0.5rem",
          }}
          itemStyle={{ color: "#fff" }}
          formatter={(value) => `${value}`}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
