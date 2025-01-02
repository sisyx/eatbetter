import { useTranslation } from "react-i18next";
import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import Card from "../../../components/templates/UserPanel/Training/Card";
import useGetData from "../../../hooks/useGetData";
import Cookies from "js-cookie";
import { tokenName } from "../../../config/constants";
import { toast } from "../../../hooks/use-toast";  
import { TrainingType } from "../../../types/trainings";  
import Loader from "../../../components/modules/loader/Loader";
const apiUrl = import.meta.env.VITE_API_URL;
const Training = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const {
    data: trainings, 
    isLoading: loading,
  } = useGetData(["trainings", language], getCookings);

  async function getCookings() {
    const eatBetterToken = Cookies.get(tokenName);
    try {
      const req = await fetch(
        `${apiUrl}/api/Exercise/GetAllexercises?lang=${language}`,
        {
          headers: {
            Authorization: `Bearer ${eatBetterToken}`,
            accept: "text/plain",
          },
        },
      );
      if (!req.ok) throw new Error(req.statusText);
      const res = await req.json();

      if (res.statusCode === 200 && !!res?.exercises) {
        return res.exercises;
      }
    } catch (error) {
      toast({
        title:
          language === "en"
            ? "Failed To Push Trainings Up :)"
            : "مشکلی در دریافت ورزش ها به وجود آمد.",
        variant: "danger",
      });
      console.error(error);
      return error;
    }
  }

  return (
    <Layout>
      <Title
        title={`${i18n.language === "fa" ? "متخصص خود شوید (پزشکی)" : "Become your own specialist (medical)"}`}
      />

      <main className="mt-6 grid grid-cols-[1fr] items-center gap-4 pb-8 lg:!grid-cols-[1fr,1fr]">
        {trainings &&
          trainings.map((training: TrainingType) => <Card {...training} />)}
      </main>
      {loading && <Loader/>}
    </Layout>
  );
};

export default Training;
