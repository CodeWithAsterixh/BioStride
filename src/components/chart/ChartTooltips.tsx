import React from 'react';

interface ChartContainerProps {
  config: {
    systolic: {
      label: string;
      color: string;
    };
    diastolic: {
      label: string;
      color: string;
    };
  };
  className?: string;
  children: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ config, className, children }) => (
  <div className={`relative flex flex-col ${className} overflow-hidden`}>
    {/* SVG Wave Lines */}
    <svg className="absolute top-0 left-0 w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#E0F7FA" fillOpacity="0.9" d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,165.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        <animate attributeName="d" dur="10s" repeatCount="indefinite" values="\\n M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,165.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;\\n M0,160L60,176C120,192,240,224,360,218.7C480,213,600,171,720,154.7C840,139,960,149,1080,160C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;\\n M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,165.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z\\n" />
      </path>
    </svg>

    <div className="flex justify-between pr-2 z-10">
      <div style={{ color: config.systolic.color }}>{config.systolic.label}</div>
      <div style={{ color: config.diastolic.color }}>{config.diastolic.label}</div>
    </div>
    <div className="mt-6 z-10">{children}</div>
  </div>
);

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
