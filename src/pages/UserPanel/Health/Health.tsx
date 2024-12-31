import { useTranslation } from "react-i18next";
import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import useGetData from "../../../hooks/useGetData";
import { authStore } from "../../../stores/auth";
import Modal from "./Modal";
// import Card from "../../../components/templates/Diet/Card";
// import { diets } from "../../../utils/data";

const Health = () => {
  const { i18n } = useTranslation();

  // const { data, isLoading } = useGetData<any>(
  //   i18n.language ? ["dietsQues", i18n.language] : [],
  //   () => getDietsQues(i18n.language as string),
  // );
  const { userData } = authStore((state) => state);

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
        {/* <Card
            panel={true}
            data={data}
            isActive={index + 1 === 2 ? true : false}
          />  */}
      </main>
    </Layout>
  );
};

export default Health;
