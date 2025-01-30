import { useEffect, useState } from "react";
// import PeopleList from "../components/majors/patientsComponents/PeopleList";
import PersonDetails from "../components/majors/patientsComponents/PersonDetails";
import { useNavigate, useParams } from "react-router-dom";
import { people } from "../components/majors/patientsComponents/PeopleList";

export type Person = {
  id: number;
  name: string;
  photo: string;
  dob: string;
  gender: string;
  contact?: string;
  emergencyContact?: string;
  insuranceProvider?: string;
  respiratoryRate?: number | string;
  temperature?: number | string;
  heartRate?: number | string;
}; // Match the type used in PeopleList

export default function Patients() {
  const [selectedPerson, setSelectedPerson] = useState<Person>();
  const [showAllInfo, setShowAllInfo] = useState(false);
  
  const navigate = useNavigate()
  const handleNavigateBackToList = () => {
    navigate('/patients');
  }

  const {name} = useParams();

  useEffect(() => {
   const person = people.find(person => person.name === name);
    setSelectedPerson(person);

  }, [name])
  

  return (
    <div className="h-screen bg-gray-100 absolute w-full md:relative z-10 overflow-y-auto">
      <PersonDetails
          person={selectedPerson}
          showAllInfo={showAllInfo}
          setShowAllInfo={setShowAllInfo}
          toggleSidebar={handleNavigateBackToList}
        />
    </div>
  );
}
