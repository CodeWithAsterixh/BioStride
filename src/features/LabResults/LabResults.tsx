import React from "react";
import { Download } from "lucide-react";

interface LabResult {
  name: string;
  date: string;
  file: string;
}

const labResults: LabResult[] = [
  { name: "Complete Blood Count", date: "2023-05-15", file: "cbc_results.pdf" },
  { name: "Lipid Panel", date: "2023-04-22", file: "lipid_panel.pdf" },
  { name: "Thyroid Function Test", date: "2023-03-10", file: "thyroid_test.pdf" },
];

const LabResults: React.FC = () => {
  return (
    <div className="border rounded shadow p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Lab Results</h2>
      </div>
      <div>
        <ul className="space-y-4">
          {labResults.map((result, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0"
            >
              <div>
                <h4 className="font-semibold">{result.name}</h4>
                <p className="text-sm text-gray-500">{result.date}</p>
              </div>
              <button
                className="flex items-center px-4 py-2 border rounded text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleDownload(result.file)}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const handleDownload = (file: string) => {
  alert(`Downloading file: ${file}`);
  // Logic to handle file download can be added here
};

export default LabResults;
