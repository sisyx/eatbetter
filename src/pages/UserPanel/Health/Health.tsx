import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import Card from "../../../components/templates/Diet/Card";
import { diets } from "../../../utils/data";

const Health = () => {
  return (
    <Layout>
      <Title title="رژیم های شما" />
      <img
        style={{ transform: "rotateY(181deg) " }}
        className="absolute left-16 top-0 hidden h-[600px] w-[50%] object-cover opacity-30 sm:block xl:top-7"
        src="/images/blob.svg"
        alt=""
      />
      <main
        className="mt-8 grid grid-cols-[1fr] items-center gap-4 pb-10 md:!grid-cols-[1fr,1fr,1fr] lg:!grid-cols-[1fr,1fr] xl:!grid-cols-[1fr,1fr,1fr]"
        dir="rtl"
      >
        {diets.map((data, index) => (
          <Card
            panel={true}
            data={data}
            isActive={index + 1 === 2 ? true : false}
          />
        ))}
      </main>
    </Layout>
  );
};

export default Health;
