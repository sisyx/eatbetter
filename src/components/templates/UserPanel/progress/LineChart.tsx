import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Button } from "../../../shadcn/ui/button";
import { useTranslation } from "react-i18next";
import usePostData from "../../../../hooks/usePostData";
import Loader from "../../../modules/loader/Loader";
import { authStore } from "../../../../stores/auth";
import useGetData from "../../../../hooks/useGetData";
import { getWeightChartData } from "../../../../utils/fetchs";

const LineChart = () => {
  const { i18n } = useTranslation();
  const { userData } = authStore((state) => state);
  const [userWeight, setuserWeight] = useState([]);
  const [userDates, setuserDates] = useState([]);
  const [weight, setWeight] = useState("");

  const { mutate: mutation, isPending } = usePostData(
    `/api/UserWeight/UpdateWeight?userId=${userData?.id}&weight=${weight}`,
    i18n.language === "fa"
      ? "وزن جدید با موفقیت ثبت شد"
      : "New weight successfully recorded",
    false,
    (data) => {
      if (data.statusCode === 200) {
        setWeight("");
      }
    },
    false,
    "progressChart"
  );

  const { data, isLoading, refetch } = useGetData<any>(
    ["progressChart", i18n.language],
    () => getWeightChartData(userData?.id as any)
  );

  useEffect(() => {
    if (userData?.id) {
      refetch();
    }
  }, [userData?.id]);

  useEffect(() => {
    if (data && data.data) {
      const allWeightData = data.data.map((val: any) => val.weight);
      const allDateData = data.data.map((val: any) => val.date);
      setuserWeight(allWeightData);
      setuserDates(allDateData);
    }
  }, [data]);

  const [chartData, setChartData] = useState<any>({
    series: [
      {
        name: "Data 1",
        data: [],
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
        categories: [],
      },
    },
  });

  useEffect(() => {
    if (userWeight.length && userDates.length) {
      setChartData((prev: any) => ({
        ...prev,
        series: [{ name: "Data 1", data: userWeight }],
        options: {
          ...prev.options,
          xaxis: { categories: userDates },
        },
      }));
    }
  }, [userWeight, userDates]);

  return (
    <div className="w-full">
      <div className="line-chart">
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
        )}
      </div>
      <div>
        <p>{i18n.language === "fa" ? "ثبت وزن جدید" : "Record new weight"}</p>
        <div className="mt-3 flex flex-col gap-3 xs:!flex-row">
          <div className="relative">
            <input
              dir="ltr"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              type="number"
              className="w-full rounded-md bg-[#0080003b] p-2 pl-10 outline-none xs:!w-auto"
            />
            <span className="absolute left-0 h-full rounded-l-md bg-[#a4dcb3] px-2 pt-2">
              Kg
            </span>
          </div>
          <Button
            onClick={() => mutation({})}
            variant={"main"}
            disabled={!weight.length}
          >
            {i18n.language === "fa" ? "ثبت" : "Save"}
          </Button>
        </div>
      </div>
      {(isPending || isLoading) && <Loader />}
    </div>
  );
};

export default LineChart;
