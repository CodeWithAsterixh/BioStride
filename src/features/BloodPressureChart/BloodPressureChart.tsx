import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartTooltipContent } from '../../components/chart/ChartTooltips';
import { ChartContainer } from './../../components/chart/ChartContainer';

const data = [
  { month: 'Jan', systolic: 125, diastolic: 240 },
  { month: 'Feb', systolic: 104, diastolic: 12 },
  { month: 'Mar', systolic: 230, diastolic: 208 },
  { month: 'Apr', systolic: 22, diastolic: 80 },
  { month: 'May', systolic: 126, diastolic: 84 },
  { month: 'Jun', systolic: 220, diastolic: 278 },
  { month: 'Jul', systolic: 10, diastolic: 50 },
  { month: 'Aug', systolic: 50, diastolic: 12 },
  { month: 'Sep', systolic: 18, diastolic: 68 },
  { month: 'Oct', systolic: 42, diastolic: 20 },
  { month: 'Nov', systolic: 26, diastolic: 84 },
  { month: 'Dec', systolic: 60, diastolic: 18 },
];

const BloodPressureChart: React.FC = () => {
  return (
    <ChartContainer
      config={{
        systolic: {
          label: 'Systolic',
          color: '#00b2cb', // our primary
        },
        diastolic: {
          label: 'Diastolic',
          color: '#ea996c', // dark red color
        },
      }}
      className="h-[325px]"
    >
      <ResponsiveContainer width="100%" height={300} className='w-full flex-1'>
        <AreaChart data={data} >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          {/* Systolic Area */}
          <Area
            type="monotone"
            dataKey="systolic"
            stroke="#00b2cb"
            strokeWidth={1}
            fill="#00b2cb"
            fillOpacity={0.4} // Semi-transparent fill
          />
          {/* Diastolic Area */}
          <Area
            type="monotone"
            dataKey="diastolic"
            stroke="#ff5d00"
            strokeWidth={1}
            fill="#ff5d00"
            fillOpacity={0.2} // Semi-transparent fill
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default BloodPressureChart;