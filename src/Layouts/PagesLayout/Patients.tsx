import { Outlet } from "react-router-dom";
import PeopleList from "../../components/majors/patientsComponents/PeopleList";

type Props = object

export default function PatientsLayout({ }: Props) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100 relative">
      <div className={`md:w-1/4 border-r block`}>
        <PeopleList/>
          </div>
          
          
          <Outlet/>
     
    </div>
  )
}