import { useState } from "react";
import Chart from "react-apexcharts";
import { Button } from "../../../shadcn/ui/button";
import { useTranslation } from "react-i18next";

const BarChart = () => {
  const { i18n } = useTranslation();

  const [chartData] = useState<any>({
    series: [
      {
        name: "Sales",
        data: [60, 66, 75, 61, 55, 62, 69, 66],
      },
    ],
    options: {
      chart: {
        type: "bar" as const,
        height: 350,
      },
      colors: ["#60b159"],

      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
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
        ],
      },
      title: {
        text: "مقدار کالری دریافتی",
        align: "right",
      },
    },
  });

  return (
    <div className="mt-8 w-full border-t border-gray-300 pt-8 md:!mt-0 md:!w-1/2 md:!pt-0">
      <div className="bar-chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
      <div>
        <p>
        {i18n.language === 'fa' ? '  ثبت کالری دریافتی جدید': 'Record new calorie intake'}
        </p>
        <div className="mt-3 xs:!flex-row flex-col flex gap-3">
          <div className="relative">
            <input
              dir="ltr"
              type="number"
              className="rounded-md  w-full xs:!w-auto bg-[#0080003b] p-2 pl-11 outline-none"
            />
            <span className="absolute left-0 h-full rounded-l-md bg-[#a4dcb3] px-2 pt-2">
              Cal
            </span>
          </div>
          <Button variant={"main"}>
          {i18n.language === 'fa' ? 'ثبت ': 'save'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
