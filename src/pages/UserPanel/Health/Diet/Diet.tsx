import { useTranslation } from "react-i18next";
import Title from "../../../../components/modules/Title/Title";
// import Modal from "../../../../components/templates/UserPanel/Health/Diets/Modal";
import Layout from "../../../../Layouts/UserLayouts";
import { getOneDiet } from "../../../../utils/fetchs";
import useGetData from "../../../../hooks/useGetData";
import { useParams } from "react-router-dom";
import Loader from "../../../../components/modules/loader/Loader";

const Diet = () => {
  const {i18n } = useTranslation();
  const { id } = useParams();

  const { data, isLoading } = useGetData(["oneDiet", i18n.language], () =>
    getOneDiet(i18n.language, String(id)),
  ); 

  return (
    <Layout>
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
     
     {data ?(
      <Title title={`${data.diet.name}`} />
     ): null}   

        {/* <div className="relative" dir="rtl">
          <div className="relative z-50 flex gap-3 rounded-full bg-main p-2 px-4 text-white">
            <div className="border-l border-white pl-3 text-center text-xs sm:text-sm">
              <p>{t('health.duration')}</p>
              <p>23 روز</p>
            </div>
            <div className="border-l border-white pl-3 text-center text-xs sm:text-sm">
              <p> {t('health.start')}</p>
              <p>ثبت نشده</p>
            </div>
            <div className="text-center text-xs sm:text-sm">
              <p>{t('health.end')}</p>
              <p>ثبت نشده</p>
            </div>
          </div>
          <div className="absolute z-40 -bottom-12 right-12 sm:right-16 rounded-md bg-black before:absolute before:-top-6 before:right-16 before:block before:h-6 before:w-3 before:rounded-b-[30px] before:bg-black before:content-[''] after:absolute after:-top-6 after:left-16 after:block after:h-6 after:w-3 after:rounded-b-[30px] after:bg-black after:content-['']">
            <Modal />
          </div>
        </div> */}
      </div>
      {data ? (
        <main data-aos="fade-up">
          <video
            src="/images/5NJy1lvx8cz37xS05B.mp4"
            loop
            autoPlay
            className="mx-auto w-[400px]"
          ></video>
          <p className="leading-8">
          {data.diet.description}
          {data.diet.howToImplement}
          </p>

      <Title className="my-8" title={`${i18n.language === 'fa' ? "غذاهای مجاز" : "allowed Foods"}`} />

          <p className="leading-8">
          {data.diet.allowedFoods}
          </p> 
        </main>
      ) : null}

      {isLoading && <Loader />}
    </Layout>
  );
};

export default Diet;
