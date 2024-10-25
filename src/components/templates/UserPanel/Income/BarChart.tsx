import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Button } from "../../../shadcn/ui/button";

const BarChart = () => {
  const [chartData] = useState<any>({
    series: [
      {
        name: "تعداد افراد",
        data: [60, 66, 75, 61, 55, 62, 69, 66],
      },
      {
        name: "درآمد",
        data: [40, 50, 60, 45, 52, 48, 54, 50],
      },
    ],
    options: {
      chart: {
        type: "bar" as const,
        height: 350,
      },
      colors: ["#60b159", "#000"],

      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
          columnWidth: "45%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
        ],
      },
      title: {
        text: "مقدار درآمد و تعداد دعوت ها",
        align: "right",
      },
    },
  });

  return (
    <div className="mt-8 w-full border-t border-gray-300 pt-8 md:!mt-0 md:!pt-0">
      <div className="bar-chart h-80 sm:h-[500px] overflow-hidden">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"  
          height={'100%'}
        />
      </div> 
    </div>
  );
};

export default BarChart;