import { PencilLineIcon, TrashIcon } from "lucide-react";
import PatientData from "../../datas/PatientData";
import { calculateAge } from "../../utils/lib/dateHandlers";
import { Button } from "../buttons/Button";
import DashboardSectionContainer from "../DashboardSectionContainer/DashboardSectionContainer";


export default function RecentPatientsTable() {
  return (
    <DashboardSectionContainer
      header={{
        title: "Recent patients",
        extra: (
          <>
            <a href="#" className="dark:text-neutral-200 text-neutral-800">
              See all
            </a>
          </>
        ),
      }}
      sx={{
        mainSLotClass: "!max-w-full",
      }}
    >
      <div className="w-full min-w-0 flex flex-col overflow-auto scrollBar p-2">
        <table className="table-fixed text-black dark:text-white bg-curve">
          <thead>
            <tr>
              <th className="text-left w-10">No</th>
              <th className="text-left w-[4.5rem]">Date in</th>
              <th className="text-left ">Name</th>
              <th className="w-12">Age</th>
              <th className="text-left ">Country</th>
              <th className="text-left w-20">Gender</th>
              <th className="text-left w-20">Settings</th>
            </tr>
          </thead>
          <tbody>
            {PatientData.map((p, i) => {
              const { personal_data } = p;
              const {
                first_name,
                last_name,
                date_of_birth,
                gender,
                contact_information,
              } = personal_data;
              const country = contact_information.address.country;
              const age = calculateAge(date_of_birth);
              // For "Date in", use a placeholder; you can replace this with a real admission date if available.
              const dateIn = "N/A";
              return (
                <tr key={i}>
                  <td className="dark:!bg-slate-700 !bg-neutral-300">
                    {i + 1}
                  </td>
                  <td className="px-2">{dateIn}</td>
                  <td>{`${first_name} ${last_name}`}</td>
                  <td>{age}</td>
                  <td>{country}</td>
                  <td>{gender}</td>
                  <td className="flex items-center justify-between">
                    <Button
                      variant="solid"
                      className="!p-1 !bg-transparent !text-neutral-800 dark:!text-neutral-200"
                    >
                      <PencilLineIcon className="size-5" />
                    </Button>
                    <Button
                      variant="solid"
                      className="!p-1 !bg-transparent !text-red-800 dark:!text-red-400"
                    >
                      <TrashIcon className="size-5" />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </DashboardSectionContainer>
  );
}
