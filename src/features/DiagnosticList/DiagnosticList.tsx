import React from "react";

interface Diagnostic {
  problem: string;
  description: string;
  status: string;
}

const diagnostics: Diagnostic[] = [
  { problem: "Hypertension", description: "High blood pressure", status: "Ongoing" },
  { problem: "Type 2 Diabetes", description: "Elevated blood sugar levels", status: "Managed" },
  { problem: "Osteoarthritis", description: "Joint pain and stiffness", status: "Chronic" },
];

const DiagnosticList: React.FC = () => {
  return (
    <div className="border rounded shadow p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Diagnostic List</h2>
      </div>
      <div className="overflow-auto h-[300px]">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-2 w-[150px] text-left">Problem/Diagnosis</th>
              <th className="border border-gray-200 p-2 text-left">Description</th>
              <th className="border border-gray-200 p-2 w-[100px] text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((diagnostic, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-200 p-2 font-medium">{diagnostic.problem}</td>
                <td className="border border-gray-200 p-2">{diagnostic.description}</td>
                <td className="border border-gray-200 p-2">{diagnostic.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
