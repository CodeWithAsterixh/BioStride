import { MedicalHistory } from "../../../types/patientstypes";

interface Diagnostic {
  history: MedicalHistory;
}

const DiagnosticList = ({ history }: Diagnostic) => {
  // Check if history or history.conditions is empty
  if (!history || !history.conditions || history.conditions.length === 0) {
    return (
      <div className="border rounded shadow p-4 bg-white">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Diagnostic List</h2>
        </div>
        <p>No medical conditions available.</p>
      </div>
    );
  }

  return (
    <div className="border rounded shadow p-4 bg-white">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Diagnostic List</h2>
      </div>
      <div className="overflow-auto h-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="min-w-[10rem] border border-gray-200 p-2 text-left">Problem/Diagnosis</th>
              <th className="min-w-[15rem] border border-gray-200 p-2 text-left">Treatments</th>
              <th className="border border-gray-200 p-2 w-[100px] text-left">Status</th>
              <th className="border border-gray-200 p-2 w-[100px] text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {history.conditions.map((condition, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-200 p-2 font-medium">{condition.condition_name}</td>
                <td className="border border-gray-200 p-2">
                  {condition.treatments.map((treatment, index) => (
                    <div key={index}>
                      {treatment.medication} {treatment.dosage} {treatment.frequency}
                    </div>
                  ))}
                </td>
                <td className="border border-gray-200 p-2">{condition.status}</td>
                <td className="border border-gray-200 p-2">{condition.diagnosis_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;