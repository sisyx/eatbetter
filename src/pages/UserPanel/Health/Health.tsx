import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import Card from "../../../components/templates/Diet/Card";
import { diets } from "../../../utils/data";

const Health = () => {
  return (
    <Layout>
      <Title title="رژیم های شما" />

      <main
        className="mt-8 grid-cols-[1fr] items-center gap-4 grid md:!grid-cols-[1fr,1fr,1fr] lg:!grid-cols-[1fr,1fr] xl:!grid-cols-[1fr,1fr,1fr]"
        dir="rtl"
      >
        {diets.map((data,index) => (
          <Card panel={true} data={data} isActive={index + 1 === 2 ? true : false} />
        ))}
      </main>
    </Layout>
  );
};

export default Health;
