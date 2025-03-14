import { useEffect, useState } from "react";
import PersonDetails from "../components/majors/patientsComponents/PersonDetails";
import { useNavigate, useParams } from "react-router-dom";
import PatientData from "../datas/PatientData";
import { Patient } from "../types/patientstypes";

export default function Patients() {
  const [selectedPerson, setSelectedPerson] = useState<Patient | undefined>();
  const [showAllInfo, setShowAllInfo] = useState(false);


  console.log(selectedPerson)
  const navigate = useNavigate();
  const handleNavigateBackToList = () => {
    navigate("/patients");
  };

  const { patient_id } = useParams();

    useEffect(() => {
    console.log("Patient ID from URL:", patient_id);
    const idNum = parseInt(patient_id || "0");
    console.log("Parsed ID:", idNum);
    const person = PatientData.find(
      (person: Patient) => person.patient_id === idNum
    );
    console.log("Found Person:", person);
    setSelectedPerson(person);
}, [patient_id]);

  return (
    <div className="h-full md:min-h-[85vh] absolute w-full md:relative z-10 overflow-y-auto no-scrollbar bg-white md:rounded-2xl">
      {selectedPerson ? (
        <PersonDetails
          person={selectedPerson.personal_data}
          patientHistory={selectedPerson.medical_history}
          patientYearlyData={selectedPerson.yearly_data}
          showAllInfo={showAllInfo}
          setShowAllInfo={setShowAllInfo}
          toggleSidebar={handleNavigateBackToList}
        />
      ) : (
        <div>No patient selected or patient not found.</div>
      )}
    </div>
  );
}