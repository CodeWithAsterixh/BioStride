import { forwardRef, useState } from "react";
import { MedicalHistory } from "../../../types/patientstypes";
import { CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Diagnostic {
  history: MedicalHistory;
}

const DiagnosticList = ({ history }: Diagnostic) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

  // Sort conditions by diagnosis_date (latest date first)
  const sortedConditions = [...history.conditions].sort(
    (a, b) =>
      new Date(b.diagnosis_date).getTime() - new Date(a.diagnosis_date).getTime()
  );

  // Filter conditions based on selected date
  const filteredConditions = selectedDate
    ? sortedConditions.filter(
        (condition) =>
          new Date(condition.diagnosis_date).toDateString() ===
          selectedDate.toDateString()
      )
    : sortedConditions;

  // Custom input component for the DatePicker
  const CustomInput = forwardRef<HTMLButtonElement, { value?: string; onClick?: () => void }>(
  ({ value, onClick }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className="bg-[#56bbe3] text-white rounded-full px-4 py-2 font-semibold flex items-center gap-2"
    >
      <CalendarDays className="w-5 h-5" />
      {value || "Select Date"}
    </button>
  )
);

  return (
    <div className="border dark:border-[#56bbe3] rounded-lg shadow p-4 bg-white dark:bg-darkComponentsBg">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold dark:text-[#56bbe3]">
          Diagnostic History
        </h2>
        <div className="relative">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            customInput={<CustomInput />}
            dateFormat="yyyy-MM-dd"
            popperClassName="responsive-datepicker"
            popperPlacement="bottom-end"
          />
        </div>
      </div>
      <div className="overflow-auto h-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-t-lg overflow-hidden">
          <thead>
            <tr className="bg-[#56bbe3] text-gray-200">
              <th className="min-w-[10rem] border border-gray-200 p-2 text-left">
                Problem/Diagnosis
              </th>
              <th className="min-w-[15rem] border border-gray-200 p-2 text-left">
                Treatments
              </th>
              <th className="border border-gray-200 p-2 w-[100px] text-left">
                Status
              </th>
              <th className="border border-gray-200 p-2 w-[100px] text-left">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredConditions.length > 0 ? (
              filteredConditions.map((condition, index) => (
                <tr
                  key={index}
                  className="odd:bg-white dark:odd:bg-gray-600 even:bg-gray-100 dark:even:bg-[#56bbe3] dark:text-gray-200 dark:border-[#56bbe3] dark:even:bg-opacity-35"
                >
                  <td className="border border-gray-200 p-2 font-medium">
                    {condition.condition_name}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {condition.treatments.map((treatment, index) => (
                      <div key={index}>
                        {treatment.medication} {treatment.dosage}{" "}
                        {treatment.frequency}
                      </div>
                    ))}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {condition.status}
                  </td>
                  <td className="border border-gray-200 p-2 whitespace-nowrap">
                    {condition.diagnosis_date}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-4 text-gray-400">
                  No records found for the selected date.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;