import { useTranslation } from "react-i18next";

import { TrainingType } from "../../../../types/trainings";
import Title from "../../../modules/Title/Title";
import CardDetail from "./CardDetail";

type Props = TrainingType;

const Card = (props: Props) => {
  const { activity, howToDo } = props
  const { i18n } = useTranslation();
  const { language } = i18n

  return (
    <div data-aos='fade-up' className="rounded-md p-3 shadow-lg relative bg-white z-10" dir="rtl">
      <img
        className="h-[200px] w-full rounded-md object-cover"
        src="https://mojekooh.com/wp-content/uploads/2023/05/sports-1.jpg"
        alt=""
      />
      <div className="my-4" dir={language === "fa" ? "rtl" : "ltr"}>
        <Title title={activity} />
      </div>
      <p className="my-4 text-center" dir={language === "fa" ? "rtl" : "ltr"}>
      {howToDo.slice(0, 100)}...
      </p>
      {/* <Link className="mb-3 items-center w-full flex justify-center text-center text-blue-600" to={"/"}>
      {i18n.language === 'fa' ? "مشاهده" : "show"}
        <FaAngleLeft   />
      </Link> */}
      <CardDetail {...props} />
    </div>
  );
};

export default Card;
