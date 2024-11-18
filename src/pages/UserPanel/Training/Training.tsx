import { useTranslation } from "react-i18next";
import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import Card from "../../../components/templates/UserPanel/Training/Card";

const Training = () => {
  const { i18n } = useTranslation();

  return (
    <Layout>
      <Title title={`${i18n.language === 'fa' ? 'متخصص خود شوید (پزشکی)' : 'Become your own specialist (medical)'}` }/>

      <main className="mt-6 grid grid-cols-[1fr] items-center gap-4 pb-8 lg:!grid-cols-[1fr,1fr]">
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </Layout>
  );
};

export default Training;
