import { SyringeIcon } from "lucide-react";
import React from "react";

type Props = {
  header?: {
    title?: React.ReactNode;
    extra?: React.ReactNode;
  };
  children?: React.ReactNode;
  fallback?: {
    icon?: React.ReactNode;
    text?: string;
  };

  sx?:{
    mainSLotClass?:string;
    headerSLotClass?:string;
  }
};

export default function DashboardSectionContainer(props: Props) {
  return (
    <section  className={`w-full h-fit min-h-full p-4 *:!w-full dark:bg-slate-800 bg-white shadow-md rounded-lg flex flex-col gap-4 ${props.sx?.mainSLotClass}`}>
      {/* header */}
      {
        props.header&&<header className={`w-full flex flex-wrap gap-2 items-center justify-between shrink-0 ${props.sx?.headerSLotClass}`}>
        
        {typeof props.header?.title === "string"?<h2 className="text-lg dark:text-neutral-300 text-neutral-700 font-bold">
          {props.header.title}
        </h2>:props.header.title}
        {props.header?.extra}
      </header>
      }

      {props.children || (
        <div className="w-full h-32 flex items-center justify-center flex-col gap-2 dark:text-neutral-400 text-neutral-600">
          <span className="size-10 *:size-full">{props.fallback?.icon||<SyringeIcon />}</span>
          <em className="not-italic text-lg">{props.fallback?.text||`${props.header?.title} is empty`}</em>
        </div>
      )}
    </section>
  );
}
