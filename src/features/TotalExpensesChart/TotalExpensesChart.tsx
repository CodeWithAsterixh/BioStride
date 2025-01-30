import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { totalExpense } from "./expensesData";



type props = {
  dataList:totalExpense[]
  
};

export default function TotalExpensesChart({ dataList }: props) {
  const data = dataList.filter(d => d.name !== 'total')

  const totalExpense = ()=>{
    const total = dataList.find(d=>d.name === 'total')?.value||0
    if(total === 0){
      return 0
    }
    let sum = 0;
    data.forEach((item) => {
      sum += item.value;
    })
    // return in percent
    const percent = Math.floor((sum / total) * 100)
    return percent;
  }
  
  return (
    <div className="w-full flex items-center justify-center relative isolate">
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={100}
          activeIndex={-1} // Disables active slice behavior
          stroke="none" // Removes default borders
          isAnimationActive={false} // Disables animation
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "#f1f5f9",
            borderRadius: "10px",
            borderColor: "#64748b",
          }}
          itemStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          separator=""
        />
      </PieChart>
      <div className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 text-center -z-10">
        <h3 className="text-2xl font-bold text-neutral-700">{totalExpense()||"0"}%</h3>
        <p className="text-sm">Earnings</p>
      </div>
    </div>
  );
}
