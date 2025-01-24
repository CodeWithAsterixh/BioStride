import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/cards/Card';
import { ChartContainer } from '../../components/chart/ChartContainer';

const data = [
  { month: 'Jan', systolic: 120, diastolic: 80 },
  { month: 'Feb', systolic: 124, diastolic: 82 },
  { month: 'Mar', systolic: 118, diastolic: 78 },
  { month: 'Apr', systolic: 122, diastolic: 80 },
  { month: 'May', systolic: 126, diastolic: 84 },
  { month: 'Jun', systolic: 120, diastolic: 78 },
];

interface ChartTooltipContentProps {
  active?: boolean;
  payload?: {
    payload: { systolic: number; diastolic: number };
  }[];
}

const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    const { systolic, diastolic } = payload[0].payload; // Access the systolic and diastolic values
    return (
      <div className="bg-white shadow-lg rounded p-2">
        <div>Systolic: {systolic}</div>
        <div>Diastolic: {diastolic}</div>
      </div>
    );
  }
  return null;
};

const BloodPressureChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Pressure</CardTitle>
        <CardDescription>Monthly systolic and diastolic readings</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            systolic: {
              label: 'Systolic',
              color: 'hsl(var(--chart-1))',
            },
            diastolic: {
              label: 'Diastolic',
              color: 'hsl(var(--chart-2))',
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="systolic" stroke="var(--chart-1)" strokeWidth={2} />
              <Line type="monotone" dataKey="diastolic" stroke="var(--chart-2)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default BloodPressureChart;
