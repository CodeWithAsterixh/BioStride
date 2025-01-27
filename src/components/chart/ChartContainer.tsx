// import React from 'react';

// interface ChartContainerProps {
//   config: {
//     systolic: {
//       label: string;
//       color: string;
//     };
//     diastolic: {
//       label: string;
//       color: string;
//     };
//   };
//   className?: string;
//   children: React.ReactNode;
// }

// export const ChartContainer: React.FC<ChartContainerProps> = ({ config, className, children }) => (
//   <div className={`flex flex-col ${className}`}>
//     <div className="flex justify-between pr-2">
//       <div style={{ color: config.systolic.color }}>{config.systolic.label}</div>
//       <div style={{ color: config.diastolic.color }}>{config.diastolic.label}</div>
//     </div>
//     {children}
//   </div>
// );
