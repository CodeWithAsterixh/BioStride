import React from 'react';

interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

interface ChartContainerProps {
  config: ChartConfig;
  className?: string;
  children: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ config, className, children }) => {
  return (
    <div className={className}>
      {/* Example: Render a legend using the config */}
      <div className="flex gap-2 space-r-4 mb-4">
        {Object.entries(config).map(([key, { label, color }]) => (
          <div key={key} className="flex gap-1 items-center">
            <div className="w-4 h-4" style={{ backgroundColor: color }}></div>
            <span className='dark:text-white'>{label}</span>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};