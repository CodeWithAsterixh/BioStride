
import { ArrowLeft, Eye, EyeOff, HeartPulse, LeafyGreen, Mail, PhoneCall, ThermometerSun } from "lucide-react";
import BloodPressureChart from "../../../features/patientsFeatures/BloodPressureChart/BloodPressureChart";
import DiagnosticList from "../../../features/patientsFeatures/DiagnosticList/DiagnosticList";
import LabResults from "../../../features/patientsFeatures/LabResults/LabResults";
import { Avatar, AvatarImage } from "../../Avatars/Avatar";
import { Button } from "../../buttons/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../cards/Card";
import Loader from "../../Loader/Loader";
import { PersonalData } from "../../../types/patientstypes";
import { Link } from "react-router-dom";


interface PersonDetailsProps {
  person?: PersonalData | null; // Allow null as a valid type
  showAllInfo: boolean;
  setShowAllInfo: (show: boolean) => void;
  toggleSidebar: () => void;
}

export default function PersonDetails({
  person,
  showAllInfo,
  setShowAllInfo,
  toggleSidebar,
}: PersonDetailsProps) {
  if (!person) {
    console.log(person)
    return (
      <div className="h-screen flex items-center justify-center ">
        <Loader/>
      </div>
    );
  }
  

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 pb-[4rem]">
      <div className="flex justify-between items-center">
        <Button variant="outline" className="md:hidden flex items-center gap-2 bg-white rounded-full py-2" onClick={toggleSidebar}>
          <ArrowLeft className="h-5 w-5" />
          People List
        </Button>
        <Button onClick={() => setShowAllInfo(!showAllInfo)} className="ml-auto rounded-full py-[0.57rem]">
          {showAllInfo ? ( <div className="flex items-center gap-2">Hide Profile <Eye className="h-5 w-5" /></div>) : ( <div className="flex items-center gap-2">Show Profile  <EyeOff className="h-5 w-5" /></div>)}
        </Button>
      </div>

      <div className="flex flex-col-reverse gap-5 lg:flex-row w-full justify-between">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Vital Signs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <BloodPressureChart />
            {/* {person.YearlyData.year.map} */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
              <div className="bg-[#00b2cb] p-4 rounded-lg bg-opacity-30 shadow-sm flex flex-col justify-between gap-3">
                <div className="flex items-center justify-center w-[4rem] h-[4rem] bg-white rounded-full"><LeafyGreen size={29} className="text-[#00b2cb] text-opacity-40"/></div>
                <div>
                  <h4 className="">Respiratory Rate</h4>
                  <p className="font-bold">{'60 breaths/min'}</p>
                </div>
                <p>Normal</p>
              </div>

              <div className="bg-[#ff5d00] p-4 rounded-lg bg-opacity-20 shadow-sm flex flex-col justify-between gap-3">
                <div className="flex items-center justify-center w-[4rem] h-[4rem] bg-white rounded-full"><ThermometerSun size={29} className="text-[#ff5d00] text-opacity-40"/></div>
                <div>
                  <h4 className="">Temperature</h4>
                  <p className="font-bold">{'98.6°F'}</p>
                </div>
                <p>Normal</p>
              </div>
              <div className="bg-red-500 pl-4 py-4 rounded-lg bg-opacity-20 shadow-sm flex flex-col justify-between gap-3">
                <div className="flex items-center justify-center w-[4rem] h-[4rem] bg-white rounded-full"><HeartPulse size={29} className="text-red-500 text-opacity-50"/></div>
                <div>
                  <h4 className="">Heart Rate</h4>
                  <p className="font-bold">{'72 bpm'}</p>
                </div>
                <p className="text-sm">Lower Than Average</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {showAllInfo && (
          <Card className="min-w-[20rem]">
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex flex-col gap-1 items-center justify-center space-x-2 rounded-lg px-2 pb-2 border-b-2">
                  <Avatar className="w-[6rem] h-[6rem] md:h-[6.5rem] md:w-[6.5rem] ">
                    <AvatarImage src={person.image} alt={person.first_name} />
                  </Avatar>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">{person.first_name} {person.last_name}</h2>
                    <p className="text-gray-500">
                      {person.date_of_birth} | {person.gender}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-4">
                    <Link to={`tel:${person.contact_information.phone_number}`} className="px-4 py-1 bg-[#56bbe3] text-white rounded-lg"><PhoneCall className="h-5 w-5"/></Link>
                      <Link to={`tel:${person.contact_information.phone_number}`} className="px-4 py-1 bg-[#56bbe3] text-white rounded-lg"><PhoneCall className="h-5 w-5"/></Link>
                      <Link to={`mailto:${person.contact_information.email}`} className="px-4 py-1 bg-[#56bbe3] text-white rounded-lg"><Mail className="h-5 w-5"/></Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="">
                    <div className="">
                      <p className="mt-2 pb-1"><span className="text-xl font-semibold">Patients Address</span></p>
                      <p><span className="font-semibold">Street:</span> {person.contact_information.address.street} {person.contact_information.address.city}</p>
                      <p><span className="font-semibold">State:</span> {person.contact_information.address.state}</p>
                      <p><span className="font-semibold">Postal Code:</span> {person.contact_information.address.postal_code}</p>
                      <p><span className="font-semibold">Country:</span> {person.contact_information.address.country}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold">Emergency Contacts</p>
                  <div>
                    <p><span className="font-semibold">Relationship:</span> {person.contact_information.emergencyContact.relationship || "N/A"}</p>
                    <p><span className="font-semibold">Phone:</span> {person.contact_information.emergencyContact.phone || "N/A"}</p>
                    <p><span className="font-semibold">Email:</span> {person.contact_information.emergencyContact.email || "N/A"}</p>
                    <p><span className="font-semibold">Street:</span> {person.contact_information.emergencyContact.street || "N/A"} {person.contact_information.emergencyContact.city || "N/A"}</p>
                    <p><span className="font-semibold">State:</span> {person.contact_information.emergencyContact.state || "N/A"}</p>
                    <p><span className="font-semibold">Postal Code:</span> {person.contact_information.emergencyContact.postal_code || "N/A"}</p>
                    <p><span className="font-semibold">Country:</span> {person.contact_information.emergencyContact.country || "N/A"}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <DiagnosticList />
      <LabResults />
    </div>
  );
}
