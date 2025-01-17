import { useTranslation } from "react-i18next";
import Title from "../../components/modules/Title/Title";
import Card from "../../components/templates/UserPanel/Challenges/Card";
import useGetData from "../../hooks/useGetData";
import Cookies from "js-cookie";
import { tokenName } from "../../config/constants";
const apiUrl = import.meta.env.VITE_API_URL;
import Loader from "../../components/modules/loader/Loader";
import {
  TypeOfChallengeType,
  typesOfChallenges,
} from "../UserPanel/Challenges/types";
import Container from "../../components/modules/Container/Container";

const Challenges = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const { data: challenges, isLoading: loading } = useGetData(
    ["user_challenges"],
    getChallenges,
  );
  console.log(challenges);

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
    <Container>
      <div
        className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28"
        dir={`${i18n.language === "fa" ? "rtl" : "ltr"}`}
      >
        <Title
          title={`${i18n.language === "fa" ? "چالش ها " : "Challenges"} `}
        />
        <img
          style={{ transform: "rotateY(181deg) " }}
          className={`${i18n.language === "fa" ? "left-16" : "right-16"} absolute top-0 hidden h-[600px] w-[50%] object-cover opacity-30 sm:block xl:top-28`}
          src="/images/blob.svg"
          alt=""
        />
        {challenges &&
          typesOfChallenges.map((type: TypeOfChallengeType) =>
            challenges[type.value] ? (
              <>
                <div className="w-full">
                  <div className="mb-2 w-full text-center text-xl">
                    {language == "en" ? type.titleEn : type.title}
                  </div>
                  <div className="grid grid-cols-[1fr] items-center gap-4 pb-16 md:!grid-cols-[1fr,1fr,1fr] lg:!grid-cols-[1fr,1fr] xl:!grid-cols-[1fr,1fr,1fr]">
                    {challenges[type.value].map((challenge: any) => (
                      <Card
                        day={challenge?.day}
                        challengeType={type.value}
                        exercise={challenge?.exercise}
                        exercise2={challenge?.exercise2}
                        exercise3={challenge?.exercise3}
                        exercise4={challenge?.exercise4}
                        exercise5={challenge?.exercise5}
                        id={challenge?.id}
                        method={challenge?.method}
                        durationOrReps={challenge?.durationOrReps}
                        benefits={challenge?.benefits}
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
      </div>

      {loading && <Loader />}
    </Container>
  );
};

export default Challenges;
