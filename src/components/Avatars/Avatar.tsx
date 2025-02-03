// import React from "react";

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ children, className }) => {
  return <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>;
};

export const AvatarImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-[#56bbe3] p-1 md:p-2">
      <div className="user-image-container w-full h-full flex items-center justify-center bg-white rounded-full overflow-hidden shadow-lg">
        <img src={src} alt={alt} className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export const AvatarFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center bg-gray-200 text-gray-500">
      {children}
    </div>
  );
};
