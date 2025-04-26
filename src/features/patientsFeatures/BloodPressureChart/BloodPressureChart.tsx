import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartTooltipContent } from "../../../components/chart/ChartTooltips";
import { ChartContainer } from "../../../components/chart/ChartContainer";
import { MonthlyData } from "../../../types/patientstypes";

const BloodPressureChart = ({ selectedDatas }: { selectedDatas: MonthlyData[] }) => {
  // Process the data to calculate total systolic and diastolic pressure per month
  const processedData = selectedDatas.map((monthData) => {
    const totalSystolic = monthData.vital_signs.reduce(
      (sum, entry) => sum + entry.systolic_blood_pressure,
      0
    );

    const totalDiastolic = monthData.vital_signs.reduce(
      (sum, entry) => sum + entry.diastolic_blood_pressure,
      0
    );

    return {
      month: monthData.month,
      systolic: totalSystolic,
      diastolic: totalDiastolic,
    };
  });

  return (
    <div className="bg-white dark:bg-darkComponentsBg rounded-lg">
      {/* Chart Container */}
      <ChartContainer
        config={{
          systolic: { label: "Systolic", color: "#00b2cb" },
          diastolic: { label: "Diastolic", color: "#ea996c" },
        }}
        className="h-[325px]"
      >
        <ResponsiveContainer width="100%" height={300} className="w-full flex-1">
          <AreaChart data={processedData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="systolic"
              stroke="#00b2cb"
              strokeWidth={1}
              fill="#00b2cb"
              fillOpacity={0.4}
            />
            <Area
              type="monotone"
              dataKey="diastolic"
              stroke="#ff5d00"
              strokeWidth={1}
              fill="#ff5d00"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default BloodPressureChart;
