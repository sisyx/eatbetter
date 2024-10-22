import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import Card from "../../../components/templates/UserPanel/Challenges/Card";

const Challenges = () => {
  return (
    <Layout>
      <Title title="چالش ها" />
      <img
        style={{ transform: "rotateY(181deg) " }}
        className="absolute left-16 top-0 hidden h-[600px] w-[50%] object-cover opacity-30 sm:block xl:top-7"
        src="/images/blob.svg"
        alt=""
      />
      <main
        className="grid grid-cols-[1fr] items-center gap-4 pb-16 md:!grid-cols-[1fr,1fr,1fr] lg:!grid-cols-[1fr,1fr] xl:!grid-cols-[1fr,1fr,1fr]"
        dir="rtl"
      >
        <Card isActive={true} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </Layout>
  );
};

export default Challenges;
