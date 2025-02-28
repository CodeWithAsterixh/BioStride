// import { useEffect, useRef } from "react";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   className?: string;
//   children: React.ReactNode;
// }

// export const PopOverButton: React.FC<ButtonProps> = ({ className = "", children, ...props }) => {
//   return (
//     <button
//       className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// interface PopoverProps {
//   children: React.ReactNode;
// }

// export const Popover: React.FC<PopoverProps> = ({ children }) => {
//   return <div className="relative inline-block">{children}</div>;
// };

// interface PopoverTriggerProps {
//   children: React.ReactNode;
//   onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
// }

// export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children, onClick }) => {
//   return (
//     <div className="cursor-pointer" onClick={onClick}>
//       {children}
//     </div>
//   );
// };

// interface PopoverContentProps {
//   className?: string;
//   children: React.ReactNode;
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }

// export const PopoverContent: React.FC<PopoverContentProps> = ({ className = "", children, isOpen, setIsOpen }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent | Event) => {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [setIsOpen]);

//   return (
//     isOpen && (
//       <div
//         ref={ref}
//         className={`absolute mt-2 p-2 bg-white rounded-md shadow-lg border border-gray-200 ${className}`}
//       >
//         {children}
//       </div>
//     )
//   );
// };