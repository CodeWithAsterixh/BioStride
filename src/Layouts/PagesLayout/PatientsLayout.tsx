import { Outlet } from "react-router-dom";
import PeopleList from "../../components/majors/patientsComponents/PeopleList";


export default function PatientsLayout() {
  return (
    <div className="flex flex-col md:flex-row md:gap-3 md:pt-0 lg:pt-4 xl:pt-0 h-full w-full bg-transparent relative md:px-5 md:pb-4">
      <div className={`md:min-w-[280px] md:w-1/4 block`}>
        <PeopleList/>
          </div>
          
          
          <Outlet/>
     
    </div>
  )
}