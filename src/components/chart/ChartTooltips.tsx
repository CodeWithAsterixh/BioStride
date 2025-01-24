import React from 'react';

interface ChartTooltipProps {
  children: React.ReactNode;
}

export const ChartTooltips: React.FC<ChartTooltipProps> = ({ children }) => (
  <div className="bg-white shadow-lg rounded pr-2">
    {children}
  </div>
);

interface ChartTooltipContentProps {
  active: boolean;
  payload: { value: { systolic: number; diastolic: number } }[];
}

export const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { systolic, diastolic } = payload[0].value; // Extract systolic and diastolic from value
    return (
      <ChartTooltips>
        <div>Systolic: {systolic}</div>
        <div>Diastolic: {diastolic}</div>
      </ChartTooltips>
    );
  }

  return null;
};
