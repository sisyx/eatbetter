import { Link } from "react-router-dom";
import { Button } from "../../shadcn/ui/button";
import Modal from "./Modal";

type Props = {
  data: {
    title: string;
    text: string;
    image: string;
    id: number;
  };
  panel?: boolean;
  isActive?: boolean;
};

const Card = ({ data, panel, isActive }: Props) => {
  return (
    <div
      data-aos="fade-up"
      className={`${panel ? "pb-6" : "pb-12"} relative mt-9 rounded-sm bg-white px-3 pt-8 text-center transition-transform sm:!shadow-md hover:sm:!-translate-y-2`}
    >
      {isActive && (
        <span
          style={{ transform: "rotateZ(39deg)" }}
          className="absolute right-0 top-0 rounded-sm bg-main px-3 py-1 text-xs text-white"
        >
          فعال
        </span>
      )}
      <img
        className="absolute -top-10 left-1/2 block h-16 w-[84px] -translate-x-1/2 transform"
        src={data.image}
        alt="cover"
      />
      <p className="mb-7 mt-2 text-sm sm:text-base">{data.title}</p>
      {panel ? (
        <>
          <p className="cursor-pointer text-sm sm:text-base" dir="rtl">
            {data.text.slice(0, 190) + "..."}
          </p>
          <Link className="mt-4 block" to={`/userPanel/health/${data.id}`}>
            <Button variant={"main"}>جزئیات بیشتر</Button>
          </Link>
        </>
      ) : (
        <Modal {...data} />
      )}
    </div>
  );
};

export default Card;
