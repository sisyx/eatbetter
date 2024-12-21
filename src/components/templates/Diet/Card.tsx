import { Link } from "react-router-dom";
import { Button } from "../../shadcn/ui/button";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

type Props = {
  data: {
    allowedFoods: string;
    description: string;
    howToImplement: string;
    id: number;
    name: string;
  };
  panel?: boolean;
  isActive?: boolean;
};

const Card = ({ data, panel }: Props) => {
  const { i18n } = useTranslation();

  const images = [
    "/images/11663519_20944480.svg",
    "/images/15128913_ODcyMjQ5OTkx.jpg",
    "/images/7434479_3665593.svg",
    "/images/12145582_Wavy_Edu-02_Single-11.svg",
    "/images/8381144_3901686.svg",
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];
 
  
  return (
    <div
      data-aos="fade-up"
      className={`${panel ? "pb-6" : "pb-7"} relative mt-9 rounded-sm bg-white px-3 pt-8 text-center transition-transform sm:!shadow-md hover:sm:!-translate-y-2`}
    >
      <img
        className="absolute -top-10 left-1/2 block h-16 w-[84px] -translate-x-1/2 transform"
        src={randomImage}
        alt="cover"
      />
      <p className="mb-7 mt-2 text-sm sm:text-base">{data.name}</p>
      {panel ? (
        <>
          <p className="cursor-pointer text-sm" dir="rtl">
            {data.description.slice(0, 190) + "..."}
          </p>
          <Link className="mt-4 block" to={`/userPanel/health/${data.id}`}>
            <Button variant={"main"}>
              {i18n.language === "fa" ? "جزئیات بیشتر" : "more details"}{" "}
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Modal {...data} />
          <Button className="mt-5 w-full" variant={"main"}>
            دریافت رژیم
          </Button>
        </>
      )}
    </div>
  );
};

export default Card;
