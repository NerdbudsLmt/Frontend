"use client";
 

import {Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  Title
} from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip, 
  Legend
)
export const DoughnutChart = () => {

  const data = {
    // labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        // label: "Attendance",
        data: [25, 24, 25],
        borderColor: [
          "#2CB629",
          "rgba(232,211,6,1)",
          "rgba(54,162,235,1)",
        ],
        backgroundColor: [
          "#2CB629",
          "rgba(232,211,6,1)",
          "rgba(54,162,235,1)",
        ],
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
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };
  return (
    <div>
        <div className="relative flex  w-[120px] h-[120px]">
              <Doughnut
                data={data}
                options={options}
              >
              </Doughnut>
              <div className="absolute font-bold w-[120px] h-[130px] flex justify-center items-center">
              <p className="">30%</p>

              </div>
            </div>
    </div>
  )
}
