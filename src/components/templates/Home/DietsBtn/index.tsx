import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../../modules/Title/Title";
import useGetData from "../../../../hooks/useGetData";
import { authStore } from "../../../../stores/auth";
import { getPackages } from "../../../../utils/fetchs";

export default function DietsBtn() {
  const refBtns = useRef<HTMLDivElement>(null);
  const viewBtnAn = useInView(refBtns, { once: true });
  const { i18n } = useTranslation();
  const { userData } = authStore((state) => state);
  const { data } = useGetData(
    ["allPackages", String(userData?.id)],
    () => getPackages(userData?.id as number),
    {
      enabled: Boolean(userData?.id),
    },
  );

  console.log(data);
  return (
    <>
      {userData && userData.id ? (
        <div
          className="ite mt-48 flex flex-col gap-10 px-4 sm:px-28"
          ref={refBtns}
        >
          <Title
            className={`${i18n.language === "fa" ? "ml-auto" : "mr-auto"} `}
            title={i18n.language === "fa" ? " رژیم ها" : "Diets"}
          />

          {viewBtnAn ? (
            <div className="flex items-center justify-center gap-10 max-lg:flex-col">
              {data &&
                data?.packages.map((pack: any, index: number) => (
                  <motion.div
                    initial={{ opacity: 0, x: index === 0 ? -500 : 0 }}
                    animate={{ opacity: 1, x: index === 0 ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center rounded-3xl px-10 py-10 shadow-2xl"
                  >
                    <div className="flex items-center gap-10">
                      <Link to={""}>
                        <div className="flex h-[37px] w-[37px] items-center justify-center rounded-full bg-main text-white transition-all hover:bg-mainHover">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </div>
                      </Link>
                      <div className="flex flex-col gap-1 text-end">
                        <h2 className="font-bold">
                          {i18n.language === "fa" ? pack.nameFa : pack.name}
                        </h2>
                        <span className="text-[#969696]">
                          {pack.currency === "IRR" ? (
                            i18n.language === "fa" ? (
                              <p dir="rtl">
                                {" "}
                                {pack.price.toLocaleString()} هزار ریال
                              </p>
                            ) : (
                              <p dir="ltr">
                                {pack.price.toLocaleString()} thousand rials
                              </p>
                            )
                          ) : i18n.language === "fa" ? (
                            `${pack.price.toLocaleString()} دلار  `
                          ) : (
                            <p dir="ltr">${pack.price.toLocaleString()}</p>
                          )}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
