"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  running: number;
  finished: number;
  pending: number;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  running,
  finished,
  pending,
}: DoughnutChartProps) => {
  const total = running + finished + pending;
  const runningPercentage = parseFloat(((running / total) * 100).toFixed(2));
  const finishedPercentage = parseFloat(((finished / total) * 100).toFixed(2));
  const pendingPercentage = parseFloat(((pending / total) * 100).toFixed(2));

  const data = {
    datasets: [
      {
        // data: [0, 100, 10],
        data: [runningPercentage, finishedPercentage, pendingPercentage],
        borderColor: ["#2CB629", "#009CFF", "#D69E00"],
        backgroundColor: ["#2CB629", "#009CFF", "#D69E00"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };

  const data2 = {
    datasets: [
      {
        // data: [0, 100, 10],
        data: [runningPercentage, finishedPercentage],
        borderColor: ["#2CB629", "#009CFF"],
        backgroundColor: ["#2CB629", "#009CFF"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };
  const data3 = {
    datasets: [
      {
        // data: [0, 100, 10],
        data: [ finishedPercentage],
        borderColor: [ "#009CFF"],
        backgroundColor: [ "#009CFF"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Doughnut Chart",
        color: "blue",
        font: {
          size: 34,
        },
        padding: {
          top: 0,
          bottom: 10,
        },
        responsive: true,
        animation: {
          animateScale: false,
          // animateScale: true,
        },
      },
    },
  };
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <div className="relative flex w-[120px] h-[120px]">
        <Doughnut data={data2} options={options}></Doughnut>
        <div className="absolute font-semibold text-[12px] w-[120px] h-[130px] flex flex-col justify-center items-center">
          <p className="">{running} {running >= 2 ? 'tasks' : 'task'}</p>
          <p className="">running</p>
        </div>
      </div>

      <div className="relative flex  w-[120px] h-[120px]">
        <Doughnut data={data3} options={options}></Doughnut>
        <div className="absolute font-semibold text-[12px] w-[120px] h-[130px] flex flex-col justify-center items-center">
        <p className="">{finishedPercentage}%</p>
          <p className="text-center">Completed</p>
        </div>
      </div>

      <div className="relative flex  w-[120px] h-[120px]">
        <Doughnut data={data} options={options}></Doughnut>
        <div className="absolute font-semibold text-[12px] w-[120px] h-[130px] flex flex-col justify-center items-center">
          
          <p className="">{pending} {pending >= 2 ? 'tasks' : 'task'}</p>
          <p className="">pending</p>
        </div>
      </div>

    
    </div>
  );
};

export default DoughnutChart;
