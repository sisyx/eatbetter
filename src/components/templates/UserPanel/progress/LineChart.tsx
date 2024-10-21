import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Button } from "../../../shadcn/ui/button";

const LineChart = () => {
  const [chartData] = useState<any>({
    series: [
      {
        name: "Data 1",
        data: [60, 66, 75, 61, 55, 62, 69, 66, 65],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line" as const,
        zoom: {
          enabled: false,
        },
      },
      colors: ["#60b159"],
      toolbar: {
        left: "7px",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "تغییرات وزن",
        align: "right",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "فروردین",
          "اردبیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
        ],
      },
    },
  });

  return (
    <div className="w-full md:!w-1/2">
      <div className="line-chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
      <div>
        <p>ثبت وزن جدید</p>
        <div className="mt-3 xs:!flex-row flex-col flex gap-3">
          <div className="relative">
            <input
              dir="ltr"
              type="number"
              className="rounded-md w-full xs:!w-auto bg-[#0080003b] pl-10 p-2 outline-none"
            />
            <span className="absolute left-0 rounded-l-md px-2 pt-2 bg-[#a4dcb3] h-full">Kg</span>
          </div>
          <Button variant={"main"}>ثبت</Button>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
