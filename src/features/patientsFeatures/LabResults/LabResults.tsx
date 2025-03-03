import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable, { UserOptions } from 'jspdf-autotable';
import { MonthlyData } from '../../../types/patientstypes';

interface LabTest {
  test_name: string;
  test_date: string;
  results: Record<string, string>;
  interpretation: string;
  month?: string;
}

const LabResults = ({ testResults }: { testResults: MonthlyData[] }) => {
  // Flatten and sort the lab test data by most recent date
  const allLabTests: LabTest[] = testResults
    .flatMap((monthData) =>
      monthData.lab_tests.map((test) => ({
        ...test,
        month: monthData.month,
      }))
    )
    .sort((a, b) => new Date(b.test_date).getTime() - new Date(a.test_date).getTime()); // Sort by most recent date

  const handleDownload = (test: LabTest) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(`Lab Test Result: ${test.test_name}`, 14, 22);

    const tableData = Object.entries(test.results).map(([key, value]) => [key, value]);

    autoTable(doc, {
      startY: 30,
      head: [['Parameter', 'Value']],
      body: tableData,
      theme: 'grid',
      styles: { fontSize: 12 },
      headStyles: { fillColor: [41, 128, 185] },
    } as UserOptions);

    // Correctly infer the final Y position from autoTable
    const finalY = (doc as jsPDF & { autoTable?: { previous?: { finalY?: number } } })?.autoTable?.previous?.finalY || 40;

    doc.setFontSize(12);
    doc.text(`Interpretation: ${test.interpretation}`, 14, finalY + 10);

    doc.save(`${test.test_name}_${test.test_date}.pdf`);
  };

  return (
    <div className="border dark:border-[#56bbe3] rounded-lg shadow p-4 bg-white dark:bg-darkComponentsBg">
      <div className="mb-4">
        <h2 className="text-lg font-semibold dark:text-[#56bbe3]">Lab Results</h2>
      </div>
      <div className="overflow-auto h-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-t-lg overflow-hidden">
          <thead>
            <tr className="bg-[#56bbe3] text-gray-200 text-start">
              <th className="min-w-[15rem] py-2 px-4 border-b text-start">Test Name</th>
              <th className="min-w-[8rem] py-2 px-4 border-b text-start">Date</th>
              <th className="min-w-[19rem] py-2 px-4 border-b text-start">Results</th>
              <th className="py-2 px-4 border-b text-start">Interpretation</th>
              <th className="py-2 px-4 border-b text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {allLabTests.length > 0 ? (
              allLabTests.map((test, index) => (
                <tr key={index} className="odd:bg-white dark:odd:bg-gray-600 even:bg-gray-100 dark:even:bg-[#56bbe3] dark:text-gray-200 dark:border-[#56bbe3] dark:even:bg-opacity-35">
                  <td className="py-2 px-4 border">{test.test_name}</td>
                  <td className="py-2 px-4 border">{test.test_date}</td>
                  <td className="py-2 px-4 border">
                    {(() => {
                      const entries = Object.entries(test.results);
                      if (entries.length === 0) return "No results";
                      
                      const [firstKey, firstValue] = entries[0];
                      return `${firstKey}: ${firstValue.length > 30 ? firstValue.slice(0, 30) + '...' : firstValue} ${entries.length > 1 ? "..." : ""}`;
                    })()}
                  </td>
                  <td className="py-2 px-4 border whitespace-nowrap">{test.interpretation}</td>
                  <td className="py-2 px-4 border">
                    <button
                      className="flex items-center px-4 py-2 border border-[#56bbe3] rounded-full bg-opacity-90 bg-[#56bbe3] text-white hover:bg-[#2baadc]"
                      onClick={() => handleDownload(test)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </button>
                  </td>
                </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-2 px-4 border-b">
                    No lab tests found
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabResults;
