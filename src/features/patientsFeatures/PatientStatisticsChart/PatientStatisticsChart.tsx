import { Area, AreaChart, Tooltip, XAxis } from "recharts";

interface patientStats {
  month:
    | "jan"
    | "feb"
    | "mar"
    | "apr"
    | "may"
    | "jun"
    | "jul"
    | "aug"
    | "sep"
    | "oct"
    | "nov"
    | "dec";
  amt: number;
}
const data: patientStats[] = [
  {
    month: "jan",
    amt: 20,
  },
  {
    month: "feb",
    amt: 40,
  },
  {
    month: "mar",
    amt: 26,
  },
  {
    month: "apr",
    amt: 50,
  },
];

export default function PatientStatisticsChart() {
  return (
    <AreaChart
      width={300}
      height={250}
      data={data}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#9eccdf" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#56bbe3" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="month" className="capitalize" startOffset={0} />
      <Tooltip contentStyle={{
        backgroundColor:"#f8fafc",
        borderRadius:"10px",
        borderColor:"#56bbe3"
      }}   />

      <Area
        type="monotone"
        dataKey="amt"
        stroke="#127aa3"
        fillOpacity={1}
        fill="url(#colorAmt)"
        baseValue={0}
      />
    </AreaChart>
  );
}
