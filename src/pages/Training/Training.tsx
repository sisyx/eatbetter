import { useTranslation } from "react-i18next";
import Container from "../../components/modules/Container/Container";
import Title from "../../components/modules/Title/Title";
import Card from "../../components/templates/UserPanel/Training/Card";
import useGetData from "../../hooks/useGetData";
import Cookies from "js-cookie";
import { tokenName } from "../../config/constants";
import { toast } from "../../hooks/use-toast"; 
import { TrainingType } from "../../types/trainings";
import Loader from "../../components/modules/loader/Loader";
const apiUrl = import.meta.env.VITE_API_URL;

const Training = () => {
  const { i18n, t } = useTranslation(); 
  const { language } = i18n; 

  const {data: trainings, isError: error, isLoading: loading, } = useGetData(["trainings", language], getCookings);

  async function getCookings() {
      const eatBetterToken = Cookies.get(tokenName);
      try {
          const req = await fetch(`${apiUrl}/api/Exercise/GetAllexercises?lang=${language}`, {
              headers: {
                  Authorization: `Bearer ${eatBetterToken}`,
                  "accept": "text/plain"
              }
          });
          if (!req.ok) throw new Error(req.statusText);
          const res = await req.json();
          
          if (res.statusCode === 200 && !!res?.exercises) {
              return res.exercises;
          }
      } catch (error) {
          toast({title: language === "en" ? "Failed To Push Trainings Up :)" : "مشکلی در دریافت ورزش ها به وجود آمد.", variant: "danger"})
          console.error(error);
          return error;
      }
  }

  return (
    <Container>
      <div dir={i18n.language === 'fa' ? 'ltr' : 'rtl'} className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28">
        <Title className="!flex-row" title={i18n.language === 'fa' ? "متخصص خود شوید (ورزش)" : "Become your own expert (sports)"} />
          {
            loading ? <Loader/> : ""
          }
          {
            error ? <div>
              <span>{t("cookings.errorHappend")}</span>
            </div> : ""
          }
        <main className="mt-6 grid grid-cols-[1fr] items-center gap-4 pb-8 lg:!grid-cols-[1fr,1fr]">
          {
            trainings && trainings.map((training: TrainingType) => <Card {...training} />)
          }
        </main>
      </div>
      <img
        style={{ transform: "rotateY(181deg)" }}
        className="absolute left-16 top-12 hidden h-[600px] w-[50%] object-cover opacity-30 sm:block xl:top-28"
        src="/images/blob.svg"
        alt=""
      />
    </Container>
  );
};

export default Training;
