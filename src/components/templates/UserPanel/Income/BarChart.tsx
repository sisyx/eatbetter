import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import useGetData from "../../../../hooks/useGetData";
import { getIncomeChartData } from "../../../../utils/fetchs";
import { authStore } from "../../../../stores/auth";
import Loader from "../../../modules/loader/Loader";

const BarChart = () => {
  const { t, i18n } = useTranslation();
  const { userData } = authStore((state) => state);
  const [userWallet, setUserWallet] = useState([]);
  const [userDates, setuserDates] = useState([]);

  const { data, isLoading, refetch } = useGetData<any>(
    ["progressChart", i18n.language],
    () => getIncomeChartData(userData?.id as any),
  );
  useEffect(() => {
    if (userData?.id) {
      refetch();
    }
  }, [userData?.id]);

  console.log(data);

  const [chartData, setChartData] = useState<any>({
    series: [
      {
        name: t("income.optionTwo"),
        data: [],
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
        categories: [],
      },
      // title: {
      //   text:t('income.title'),
      //   align: "right",
      // },
    },
  });

  useEffect(() => {
    if (data && data.data) {
      const allBalanceData = data.data.map((val: any) => val.balance);
      const allDateData = data.data.map((val: any) => val.date);
      setUserWallet(allBalanceData);
      setuserDates(allDateData);
    }
  }, [data]);

  useEffect(() => {
    if (userWallet.length && userDates.length) {
      setChartData((prev: any) => ({
        ...prev,
        series: [{ name: "Data 1", data: userWallet }],
        options: {
          ...prev.options,
          xaxis: { categories: userDates },
        },
      }));
    }
  }, [userWallet, userDates]);

  return (
    <div className="mt-8 w-full border-t border-gray-300 pt-8 md:!mt-0 md:!pt-0">
      <div className="bar-chart h-80 overflow-hidden sm:h-[500px]">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={"100%"}
        />
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default BarChart;
