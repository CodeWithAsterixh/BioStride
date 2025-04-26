import {
  ActivityIcon,
  ChevronRight,
  EllipsisVertical,
  Wrench,
} from "lucide-react";
import DashboardSectionContainer from "../DashboardSectionContainer/DashboardSectionContainer";
import { Card } from "../cards/Card";
import { Button } from "../buttons/Button";

type Props = object;

export default function ActivityReport(props: Props) {
  return (
    <DashboardSectionContainer
      sx={{
        headerSLotClass: "flew-wrap *:flex-grow min-[498px]:*:flex-grow-0",
      }}
      header={{
        title: (
          <span className="flex flex-col text-neutral-800 dark:text-neutral-200">
            <h2 className="text-lg text-neutral-700 dark:text-neutral-300 font-bold">
              Activity Report
            </h2>
            <p className="text-sm">According to days</p>
          </span>
        ),
        extra: (
          <>
            <span className="p-1 !flex-grow-0 active:scale-95 duration-300 flex items-center cursor-pointer justify-center">
              <EllipsisVertical className="size-5 text-neutral-800 dark:text-neutral-200" />
            </span>
          </>
        ),
      }}
      fallback={{
        text: "Activity Report is empty",
        icon: <ActivityIcon />,
      }}
    >
      <div className="w-full flex flex-col gap-2 max-h-full min-[498px]:max-h-[320px] overflow-y-auto scrollBar pr-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card
            key={index}
            className="w-full p-3 flex items-center justify-between gap-2 dark:text-neutral-200 text-neutral-800 !border-0 !bg-primary-dark/10 dark:!bg-primary-dark/10"
          >
            <div className="flex gap-2 w-full">
              <span className="shrink-0 p-2 h-fit flex items-center justify-center overflow-hidden rounded-full border-2 border-primary-dark dark:border-primary text-primary-dark dark:text-primary">
                <Wrench className="size-5" />
              </span>
              <span className="w-full flex flex-col justify-center">
                <strong className="text-sm line-clamp-2">Equipment maintenance</strong>
                <strong className="text-xs line-clamp-2">3 minutes ago</strong>
              </span>
            </div>
            <div>
              <Button
                variant={"solid"}
                className={
                  "!bg-transparent !p-0 dark:!text-neutral-200 !text-neutral-800"
                }
              >
                <ChevronRight />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardSectionContainer>
  );
}
