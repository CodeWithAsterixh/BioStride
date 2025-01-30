import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { people } from "./peopleData";



// interface PeopleListProps {
//   onSelectPerson: (person: Person) => void;
// }



const PeopleList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {pathname} = useLocation()
  const [currentId, setCurrentId] = useState<number>(0)

  useEffect(()=>{
    const paths = pathname.split('/')
    const currentRoute = paths[paths.length-1]
    const cId = parseInt(currentRoute)

    setCurrentId(cId)
    

  },[pathname])

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen md:h-full flex flex-col bg-white shadow-lg pb-[3.5rem] md:pb-2 md:rounded-2xl overflow-y-auto">
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
            to={`/patients/${person.id}`}
            key={person.id}
            className={`px-4 py-3 hover:bg-gray-200 ${currentId===person.id?"bg-gray-300":""} duration-300 cursor-pointer flex items-center rounded-md`}
          >
            <div className="h-10 w-10 mr-3 rounded-full overflow-hidden flex items-center justify-center bg-gray-300">
              {person.photo && person.photo.trim() !== "" ?  (
                <div className="w-auto h-auto flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-[#56bbe3] p-1">
                    <div className="user-image-container w-[2.3rem] h-[2.3rem] flex items-center justify-center bg-white rounded-full overflow-hidden">
                        <img src={person.photo} alt={person.name} className="h-full w-full object-cover" />
                    </div>
                </div>
              ) : (
                <span className="text-gray-500">
                    {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              )}
            </div>
            <div>
              <div className="font-semibold">{person.name}</div>
              <div className="text-sm text-gray-500">
                {person.dob} | {person.gender}
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
