// import React from 'react'

import { Link, Mail, PhoneCall } from "lucide-react"
import { Avatar, AvatarImage } from "../../Avatars/Avatar"
import { Card, CardContent, CardHeader, CardTitle } from "../../cards/Card"
import { PersonalData } from "../../../types/patientstypes"

function PatientProfile({ person }: { person: PersonalData }) {
  return (
    <Card className="min-w-[16rem] xl:min-w-[20rem]">
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
  )
}

export default PatientProfile