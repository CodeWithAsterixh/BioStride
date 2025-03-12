import { ArrowLeft, ChevronLeft, ChevronRight, Eye, EyeOff, UserRound } from "lucide-react";
import BloodPressureChart from "../../../features/patientsFeatures/BloodPressureChart/BloodPressureChart";
import DiagnosticList from "../../../features/patientsFeatures/DiagnosticList/DiagnosticList";
import LabResults from "../../../features/patientsFeatures/LabResults/LabResults";
import { Button } from "../../buttons/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../cards/Card";
import Loader from "../../Loader/Loader";
import { MedicalHistory, PersonalData, YearlyData } from "../../../types/patientstypes";
import PatientProfile from "./PatientProfile";
import VitalSigns from "../../../features/patientsFeatures/vitalSigns/VitalSigns";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import DrawerPatientProfile from "./DrawerPatientProfile";

interface PersonDetailsProps {
  person?: PersonalData | null;  
  showAllInfo: boolean;
  setShowAllInfo: (show: boolean) => void;
  toggleSidebar: () => void;
  patientHistory: MedicalHistory;
  patientYearlyData: YearlyData[];
}

export default function PersonDetails({
  person,
  showAllInfo,
  setShowAllInfo,
  toggleSidebar,
  patientHistory,
  patientYearlyData,
}: PersonDetailsProps) {
  // Get the current year
  const currentYear = new Date().getFullYear().toString();

  // Find the index of the current year in the data
  const initialYearIndex = patientYearlyData.findIndex(
    (data) => data.year.toString() === currentYear
  );

  // Set the initial state to the current year's index (or 0 if not found)
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(
    initialYearIndex !== -1 ? initialYearIndex : 0
  );

  const selectedYear = patientYearlyData[selectedYearIndex].year;
  const filteredData = patientYearlyData[selectedYearIndex].monthly_data;

  const handlePrevYear = () => {
    if (selectedYearIndex > 0) {
      setSelectedYearIndex(selectedYearIndex - 1);
    }
  };

  const handleNextYear = () => {
    if (selectedYearIndex < patientYearlyData.length - 1) {
      setSelectedYearIndex(selectedYearIndex + 1);
    }
  };

  if (!person) {
    console.log(person)
    return (
      <div className="h-screen flex items-center justify-center ">
        <Loader/>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 pb-[4rem] dark:bg-darkComponentsBg">
      <div className="flex justify-between items-center">
        <Button variant="outline" className="md:hidden flex items-center gap-2 bg-white rounded-full py-2" onClick={toggleSidebar}>
          <ArrowLeft className="h-5 w-5" />
          People List
        </Button>
        <Button onClick={() => setShowAllInfo(!showAllInfo)} className="ml-auto rounded-full py-[0.57rem] hidden md:block">
          {showAllInfo ? ( <div className="flex items-center gap-2">Hide Profile <Eye className="h-5 w-5" /></div>) : ( <div className="flex items-center gap-2">Show Profile  <EyeOff className="h-5 w-5" /></div>)}
        </Button>
        <Drawer>
          <DrawerTrigger className="md:hidden bg-[#56bbe3] py-1 px-6 rounded-full text-white hover:bg-opacity-35"> <UserRound className="h-7 w-7" /> </DrawerTrigger>
          <DrawerContent className="w-full h-[85%] bg-white dark:bg-darkComponentsBg rounded-t-[2rem] p-0">
            <DrawerPatientProfile/>

            {/* <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader> */}
            {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">
                  <Ellipsis />
                </Button>
              </DrawerClose>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </div>

      <div className="flex flex-col-reverse gap-5 lg:flex-row w-full justify-between">
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center gap-2 justify-between">
              <CardTitle>Vital Signs</CardTitle>
              {/* Year Selector with Icons */}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={handlePrevYear}
                  className="px-4 py-1 bg-[#56bbe3] border-2 border-[#56bbe3] text-white rounded-full hover:bg-[#388aaa] hover:border-opacity-25 disabled:bg-transparent disabled:text-[#56bbe3] disabled:text-opacity-50 disabled:border-2 disabled:border-[#56bbe3] disabled:border-opacity-50"
                  disabled={selectedYearIndex === 0}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <span className="text-md font-semibold border-2 border-[#56bbe3] px-4 py-1 rounded-full text-[#56bbe3]">{selectedYear}</span>

                <button
                  onClick={handleNextYear}
                  className="px-4 py-1 bg-[#56bbe3] border-2 border-[#56bbe3] text-white rounded-full hover:bg-[#388aaa] hover:border-opacity-25 disabled:bg-transparent disabled:text-[#56bbe3] disabled:text-opacity-50 disabled:border-2 disabled:border-[#56bbe3] disabled:border-opacity-50"
                  disabled={selectedYearIndex === patientYearlyData.length - 1}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <BloodPressureChart selectedDatas={filteredData}/>
            <VitalSigns/>
          </CardContent>
        </Card>

        {showAllInfo && (
          <PatientProfile person={person} />
        )}
      </div>
      <DiagnosticList history={patientHistory} />
      <LabResults testResults={filteredData} />
    </div>
  );
}