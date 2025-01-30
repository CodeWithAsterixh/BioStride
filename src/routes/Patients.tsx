import { useEffect, useState } from "react";
// import PeopleList from "../components/majors/patientsComponents/PeopleList";
import PersonDetails from "../components/majors/patientsComponents/PersonDetails";
import { useNavigate, useParams } from "react-router-dom";
import { people, Person } from "../components/majors/patientsComponents/peopleData";



export default function Patients() {
  const [selectedPerson, setSelectedPerson] = useState<Person>();
  const [showAllInfo, setShowAllInfo] = useState(false);
  
  const navigate = useNavigate()
  const handleNavigateBackToList = () => {
    navigate('/patients');
  }

  const {id} = useParams();

  useEffect(() => {
    const idNum = parseInt(id||'0')
   const person = people.find(person => person.id === idNum);
    setSelectedPerson(person);

  }, [id])
  

  return (
    <div className="h-full absolute w-full md:relative z-10 overflow-y-auto no-scrollbar bg-white md:rounded-2xl">
      <PersonDetails
          person={selectedPerson}
          showAllInfo={showAllInfo}
          setShowAllInfo={setShowAllInfo}
          toggleSidebar={handleNavigateBackToList}
        />
    </div>
  );
}
