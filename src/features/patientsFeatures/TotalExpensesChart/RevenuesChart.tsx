import {
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { RevenueData } from '../../../types';

const RevenueChart = ({ data }: { data: RevenueData[] }) => {
  return (
    <ResponsiveContainer width="100%" height={208}>
      <ComposedChart
        data={data}
        margin={{ top: 0, right: 5, left: -15, bottom: 0 }}
      >
        {/* Light gray grid for clarity */}
        <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-border-color)" />
        
        {/* X-Axis displays the date; styled for clarity */}
        <XAxis
          dataKey="date" 
          tick={{ fill: "var(--chart-color-text)", fontSize: 12 }} 
          axisLine={{ stroke: "#ccc" }} 
        />
        
        {/* Y-Axis for numeric values with a $ prefix */}
        <YAxis 
          tickFormatter={(value) => `$${value}`} 
          tick={{ fill: "var(--chart-color-text)", fontSize: 12 }} 
          axisLine={{ stroke: "#ccc" }} 
        />
        
        <Tooltip 
          formatter={(value) => `$${value}`}
          contentStyle={{ backgroundColor: "var(--chart-color-bg)", border: "1px solid #ccc", borderRadius: 4 }}
          labelStyle={{ color: "#555" }}
        />
        
        {/* Data as bars */}
        <Bar dataKey="expenses" fill="#ff6b6b" name="Expenses" barSize={10} />
        <Bar dataKey="income" fill="#4caf50" name="Income" barSize={10} />
        
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
