// import React, { createContext, useContext, useState } from "react";
// import jsPDF from "jspdf";

// interface DownloadContextType {
//   handleDownload: (content: { title: string; date: string; body: string }, filename: string) => void;
//   downloadedFiles: string[]; // Track downloaded files
//   isLoading: boolean; // Track loading state
// }

// const DownloadContext = createContext<DownloadContextType | undefined>(undefined);

// export const useDownload = () => {
//   const context = useContext(DownloadContext);
//   if (!context) {
//     throw new Error("useDownload must be used within a DownloadProvider");
//   }
//   return context;
// };

// export const DownloadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [downloadedFiles, setDownloadedFiles] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleDownload = (content: { title: string; date: string; body: string }, filename: string) => {
//     setIsLoading(true);

//     // Simulate a delay for the download process
//     setTimeout(() => {
//       const doc = new jsPDF();
//       doc.text(`Title: ${content.title}`, 10, 10);
//       doc.text(`Date: ${content.date}`, 10, 20);
//       doc.text(content.body, 10, 30);
//       doc.save(filename);

//       // Update the list of downloaded files
//       setDownloadedFiles((prev) => [...prev, filename]);
//       setIsLoading(false);
//     }, 1000); // Simulate a 1-second delay
//   };

//   return (
//     <DownloadContext.Provider value={{ handleDownload, downloadedFiles, isLoading }}>
//       {children}
//     </DownloadContext.Provider>
//   );
// };