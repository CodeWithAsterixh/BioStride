import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PatientData from "../../../datas/PatientData";


const PeopleList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {pathname} = useLocation()
  const [currentId, setCurrentId] = useState<number>(0)

  useEffect(()=>{
    const paths = pathname.split('/')
    const currentRoute = paths[paths.length-1]
    const cId = parseInt(currentRoute)

    setCurrentId(cId)
    

  }, [pathname])


  const filteredPeople = PatientData.filter((person) => {
    // person.name.toLowerCase().includes(searchTerm.toLowerCase())
    const fullName = `${person.personal_data.first_name} ${person.personal_data.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="h-screen md:min-h-[85vh] md:h-full flex flex-col bg-white shadow-lg pb-[3.5rem] md:pb-2 md:rounded-2xl overflow-y-auto">
      <div className="p-4 flex items-center">
        <input
          type="text"
          placeholder="Search people..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border-2 border-[#56bbe3] rounded-full outline-none"
        />
      </div>
      <ul className="gap-1 flex flex-col overflow-auto no-scrollbar px-2">
        {filteredPeople.map((person) => (
          <Link
            to={`/patients/${person.patient_id}`}
            key={person.patient_id}
            className={`px-4 py-3 ${currentId === person.patient_id ? "bg-gray-200" : "hover:bg-gray-100"} duration-300 cursor-pointer flex items-center rounded-md`}
          >
            {/* Directly accessing personal_data properties */}
            <div className="flex items-center gap-2">
              <div className="mr-1 rounded-full overflow-hidden flex items-center justify-center bg-gray-300">
                {person.personal_data.image && person.personal_data.image.trim() !== "" ? (
                  <div className="w-auto h-auto flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-[#56bbe3] p-1">
                    <div className="user-image-container w-[2.3rem] h-[2.3rem] flex items-center justify-center bg-white rounded-full overflow-hidden">
                      <img src={person.personal_data.image} alt={person.personal_data.first_name} className="h-full w-full object-cover" />
                    </div>
                  </div>
                ) : (
                  <span className="text-gray-500">
                    {person.personal_data.first_name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
              </div>
              <div>
                <div className="font-semibold">
                  {person.personal_data.first_name} {person.personal_data.last_name}
                </div>
                <div className="text-sm text-gray-500">
                  {person.personal_data.date_of_birth} | {person.personal_data.gender}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
