import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../shadcn/ui/button";

type Props = {
  isActive?: boolean;
};

const Card = ({ isActive }: Props) => {
  return (
    <div
      data-aos="fade-up"
      className={`relative rounded-sm bg-white px-3 pb-6 pt-4 text-center transition-transform sm:mt-5 sm:pt-6 sm:!shadow-md hover:sm:!-translate-y-2`}
    >
      <div className="flex gap-3">
        <div className="text-right">
          <p className="mb-2">
            چالش شماره 1
            {isActive && (
              <span className="mr-2 rounded-sm bg-main px-2 py-[2px] text-[11px] text-white">
                فعال
              </span>
            )}
          </p>
          <p className="text-sm">
            توضیحات چالش شماره یک رو در صفحه مربوطه و اره این حرفا و دیگه
            نمیدونم ....
          </p>
        </div>
        <img
          className="block h-16 w-[84px]"
          src={"/images/12145582_Wavy_Edu-02_Single-11.svg"}
          alt="cover"
        />
      </div>
      <Link className="mt-4 block w-full" to={`/userPanel/challenges/2323`}>
        <Button className="w-full" variant={"main"}>
          جزئیات بیشتر
        </Button>
      </Link>
    </div>
  );
};

export default Card;
