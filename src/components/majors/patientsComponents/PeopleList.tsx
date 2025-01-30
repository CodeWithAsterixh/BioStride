import React, { useState } from "react";

export interface Person {
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
}

interface PeopleListProps {
  onSelectPerson: (person: Person) => void;
}

const people: Person[] = [
  { id: 1, name: "John Doe", dob: "1980-05-15", gender: "Male", photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzM3NDQxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Jane Smith", dob: "1992-08-22", gender: "Female", photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzM3NDQxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Bob Johnson", dob: "1975-11-30", gender: "Male", photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzM3NDQxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "John2 Doe", dob: "1980-05-15", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Jane2 Smith", dob: "1992-08-22", gender: "Female", photo: "/placeholder.svg?height=40&width=40" },
  { id: 6, name: "Bob2 Johnson", dob: "1975-11-30", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
  { id: 7, name: "John3 Doe", dob: "1980-05-15", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
  { id: 8, name: "Jane3 Smith", dob: "1992-08-22", gender: "Female", photo: "/placeholder.svg?height=40&width=40" },
  { id: 9, name: "Bob3 Johnson", dob: "1975-11-30", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
  { id: 10, name: "John4 Doe", dob: "1980-05-15", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
  { id: 11, name: "Jane4 Smith", dob: "1992-08-22", gender: "Female", photo: "/placeholder.svg?height=40&width=40" },
  { id: 12, name: "Bob4 Johnson", dob: "1975-11-30", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
];

const PeopleList: React.FC<PeopleListProps> = ({ onSelectPerson }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[100vh] flex flex-col bg-white pb-[3.5rem] md:pb-[6.5rem] md:rounded-r-2xl overflow-hidden">
      <div className="p-4 flex items-center">
        <input
          type="text"
          placeholder="Search people..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border-2 border-[#56bbe3] rounded-full outline-none"
        />
      </div>
      <ul className="flex-1 overflow-auto">
        {filteredPeople.map((person) => (
          <li
            key={person.id}
            className="px-4 py-3 hover:bg-gray-200 cursor-pointer flex items-center"
            onClick={() => onSelectPerson(person)}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
