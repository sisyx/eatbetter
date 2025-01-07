import { useTranslation } from "react-i18next";
import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import useGetData from "../../../hooks/useGetData";
import { authStore } from "../../../stores/auth";
import Modal from "./Modal";
import { getUserDiets } from "../../../utils/fetchs";
import Loader from "../../../components/modules/loader/Loader";
import Card from "../../../components/templates/Diet/Card";
// import Card from "../../../components/templates/Diet/Card";
// import { diets } from "../../../utils/data";

const Health = () => {
  const { i18n } = useTranslation();
  const { userData } = authStore((state) => state);

  const { data, isLoading } = useGetData<any>(
    userData ? ["dietsQues", userData.id] : [],
    () => getUserDiets(userData?.id as any),
    {
      enabled: Boolean(userData?.id) && userData?.selectedDiets.length !== 0,
    },
  );

     

  return (
    <Layout>
      {userData && userData.userCustomDiet ? (
        <>
          <Title
            title={`${i18n.language === "fa" ? "رژیم اختصاصی شما" : "Your personalized diet"} `}
          />
          <Modal />
        </>
      ) : null}

      {userData?.selectedDiets.length !== 0 ? (
        <>
          <Title
            title={`${i18n.language === "fa" ? "رژیم های شما" : "Your Diets"} `}
          />

          <img
            style={{ transform: "rotateY(181deg) " }}
            className={`${i18n.language === "fa" ? "left-16" : "right-16"} absolute top-0 hidden h-[600px] w-[50%] object-cover opacity-30 sm:block xl:top-7`}
            src="/images/blob.svg"
            alt=""
          />
          <main
            className="mt-8 grid grid-cols-[1fr] items-center gap-4 pb-10 md:!grid-cols-[1fr,1fr,1fr] lg:!grid-cols-[1fr,1fr] xl:!grid-cols-[1fr,1fr,1fr]"
            dir="rtl"
          >
            {data && data.selectedDiets.map(
              (data: {
                allowedFoods: string;
                allowedFoodsFa: string;
                description: string;
                descriptionFa: string;
                howToImplement: string;
                howToImplementFa: string;
                id: number;
                name: string;
                nameFa: string;
              }) => (
                <Card panel={true} data={data} />
              ),
            )}
          </main>
        </>
      ) : userData?.userCustomDiet ? null : (
        <p className="mt-20 text-center text-2xl">
          {" "}
          {i18n.language !== "fa"
            ? "You didn't choose a diet from site."
            : "رژیمی از سایت انتخاب نکردید"}
        </p>
      )}
      {isLoading && <Loader />}
    </Layout>
  );
};

export default Health;
