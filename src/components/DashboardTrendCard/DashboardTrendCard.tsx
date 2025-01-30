import { TrendingUpIcon } from "lucide-react"
import React from "react"

type Props = {
    averageTotalRate: number,
    icon?:React.ReactNode,
    trendFor?:'last month'|'this month'|'last week'|'this week'|'today'|'yesterday'|'last year'|'this year',
    /**
     * trendRate as percentage value
     */
    trendRate:number,
    title:string

}

export default function DashboardTrendCard({trendFor="last month",...props}: Props) {
  return (
    <div className="shrink-0 w-[300px] bg-slate-300 hover:shadow-lg hover:bg-slate-400/50 duration-500 rounded-lg p-4 flex flex-col gap-2 snap-start">
        {/* title and icon */}
        <div className="w-full flex items-center justify-start gap-3">
            <span className="size-10 rounded-full bg-slate-400 text-slate-100 flex items-center justify-center">
                {props.icon||<TrendingUpIcon/>}
            </span>
            <strong className="text-lg text-neutral-700">
                {props.title}
            </strong>
        </div>
        {/* rates */}
        <div className="w-full flex items-center justify-between gap-3">
            <strong className="text-2xl text-neutral-700">{props.averageTotalRate}+</strong>
            <span className="py-2 px-4 bg-slate-400 text-slate-600 font-bold rounded-full">{props.trendRate}%</span>
        </div>
        {/* trend for */}
        <div className="w-full p-2 flex items-center justify-end gap-3">
            <strong className="font-normal capitalize text-slate-700">{trendFor}</strong>
        </div>
    </div>
  )
}