import React from 'react';
import { TooltipProps } from 'recharts';

export const ChartTooltipContent: React.FC<TooltipProps<any, any>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-darkComponentsBg p-2 border border-gray-300 dark:border-[#56bbe3] rounded shadow">
        <p className="font-semibold dark:text-white">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value} mmHg
          </p>
        ))}
      </div>
    );
  }

  return null;
};