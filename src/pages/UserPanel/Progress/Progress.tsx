import Layout from "../../../Layouts/UserLayouts";
import BarChart from "../../../components/templates/UserPanel/progress/BarChart";
import LineChart from "../../../components/templates/UserPanel/progress/LineChart";

const Progress = () => {
  return (
    <Layout>
      <div className="flex flex-row-reverse items-baseline justify-end gap-2 text-2xl font-bold">
        <h5 className="mb-2 max-sm:text-xl">نمودار پیشرفت</h5>
        <div className="h-2 w-2 rounded-xl bg-main">
          <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
        </div>
      </div>
      <section className="flex md:!flex-row flex-col gap-3 mt-5">
        <LineChart />
        <BarChart />
      </section>
    </Layout>
  );
};

export default Progress;
