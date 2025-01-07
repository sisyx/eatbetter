import { useTranslation } from "react-i18next";
import Layout from "../../../Layouts/UserLayouts";
import Title from "../../../components/modules/Title/Title";
import Card from "../../../components/templates/UserPanel/Challenges/Card";
import useGetData from "../../../hooks/useGetData";
import Cookies from "js-cookie";
import { tokenName } from "../../../config/constants";
const apiUrl = import.meta.env.VITE_API_URL;
import { TypeOfChallengeType, typesOfChallenges } from "./types";
import Loader from "../../../components/modules/loader/Loader";

const Challenges = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: challenges, isLoading: loading } = useGetData(
    ["user_challenges"],
    getChallenges,
  );
 

  async function getChallenges() {
    const eatBetterToken = Cookies.get(tokenName);
    const req = await fetch(`${apiUrl}/api/Chalange/GetAllChallenges`, {
      headers: {
        Authorization: `Bearer ${eatBetterToken}`,
        accept: "text/plain",
      },
    });
    if (!req.ok) throw new Error(req.statusText);
    const res = await req.json();

    if (res.statusCode === 200 && !!res?.challenges) {
      return res.challenges;
    }
  }

  return (
    <Layout>
      <Title title={`${i18n.language === "fa" ? "چالش ها " : "Challenges"} `} />
      <img
        style={{ transform: "rotateY(181deg) " }}
        className="absolute left-16 top-0 hidden h-[600px] w-[50%] object-cover opacity-30 sm:block xl:top-7"
        src="/images/blob.svg"
        alt=""
      />
      {challenges &&
        typesOfChallenges.map((type: TypeOfChallengeType) =>
          challenges[type.value] ? (
            <>
              <div className="w-full">
                <div className="w-full text-center text-xl">
                  {language == "en" ? type.titleEn : type.title}
                </div>
                <div
                  className="grid grid-cols-[1fr] items-center gap-4 pb-16 md:!grid-cols-[1fr,1fr,1fr] lg:!grid-cols-[1fr,1fr] xl:!grid-cols-[1fr,1fr,1fr]"
                  dir="rtl"
                >
                  {challenges[type.value].map((challenge: any) => (
                    <Card
                      day={challenge?.day}
                      challengeType={type.value}
                      exercise={challenge?.exercise}
                      id={challenge?.id}
                    />
                  ))}
                </div>
              </div>
              <div className="h-8 border-t-2 border-t-gray-500"></div>
            </>
          ) : (
            ""
          ),
        )}

      {loading && <Loader />}
    </Layout>
  );
};

export default Challenges;
