import { BriefcaseMedical, EllipsisVertical } from "lucide-react";
import { doctors } from "../../utils/dummyDoctor";
import { formatHour } from "../../utils/lib/timeMethods";
import DashboardSectionContainer from "../DashboardSectionContainer/DashboardSectionContainer";
import { Button } from "../buttons/Button";
import { Card } from "../cards/Card";
import { isWithinWorkSchedule } from "@/utils/lib/isWithinWorkSchedule";


export default function DoctorsTable() {
  return (
    <DashboardSectionContainer
      sx={{
        headerSLotClass: "flew-wrap *:flex-grow min-[498px]:*:flex-grow-0",
      }}
      header={{
        title: (
          <span className="flex flex-col text-neutral-800 dark:text-neutral-200">
            <h2 className="text-lg text-neutral-700 dark:text-neutral-300 font-bold">
              Doctors table
            </h2>
            <p className="text-sm">According to days</p>
          </span>
        ),
        extra: (
          <>
            <span className="p-1 !flex-grow-0  active:scale-95 duration-300 flex items-center cursor-pointer justify-center">
              <EllipsisVertical className="size-5 text-neutral-800 dark:text-neutral-200" />
            </span>
          </>
        ),
      }}
      fallback={{
        text: "No doctor available",
        icon: <BriefcaseMedical />,
      }}
    >
      <div className="w-full flex flex-col gap-2 max-h-full min-[498px]:max-h-[320px] overflow-y-auto scrollBar pr-1">
        {doctors.map((doctor) => {
          const isAvailable = !doctor.workProfile.isAvailable
            ? false
            : isWithinWorkSchedule(doctor.workProfile.workSchedule)
            ? true
            : doctor.workProfile.isAvailable
            ? true
            : false;
          return (
            <Card
              key={doctor.id}
              className="w-full p-3 flex items-center justify-between gap-2 dark:text-neutral-200 text-neutral-800"
            >
              <div className="flex gap-2 w-full">
                <span className="shrink-0 size-10 overflow-hidden rounded-full border border-primary-dark dark:border-primary">
                  <img
                    width={100}
                    height={100}
                    className="size-full object-cover object-center"
                    src={doctor.personalProfile.profilePictureUrl}
                    alt={`${doctor.workProfile.staffRole} ${doctor.personalProfile.firstName} ${doctor.personalProfile.lastName}'s image`}
                  />
                </span>
                <span className="w-full flex flex-col justify-center">
                  <strong className="text-sm line-clamp-2">
                    {doctor.workProfile.staffRole === "Doctor" ? "DR" : "NR"}/{" "}
                    {doctor.personalProfile.firstName}{" "}
                    {doctor.personalProfile.lastName}
                  </strong>
                  <strong className="text-xs line-clamp-2">
                    {doctor.workProfile.department}
                  </strong>
                  <strong className="text-xs line-clamp-2">
                    {formatHour(doctor.workProfile.workSchedule[0].startTime)} -{" "}
                    {formatHour(doctor.workProfile.workSchedule[0].endTime)}
                  </strong>
                </span>
              </div>
              <div>
                <Button
                  variant={isAvailable ? "solid" : "outline"}
                  className={`py-1 rounded-md text-sm ${
                    !isAvailable
                      ? "!bg-transparent !text-neutral-700 dark:!text-neutral-300"
                      : "!bg-primary dark:!bg-primary-dark !text-white"
                  }`}
                >
                  {isAvailable ? "Available" : "Unavailable"}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </DashboardSectionContainer>
  );
}
