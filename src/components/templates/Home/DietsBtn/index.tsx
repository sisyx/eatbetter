import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../../modules/Title/Title";

export default function DietsBtn() {
  const refBtns = useRef<HTMLDivElement>(null);
  const viewBtnAn = useInView(refBtns, { once: true });
  const { i18n } = useTranslation();

  return (
    <div className="ite mt-48 flex flex-col gap-10" ref={refBtns}>
      <Title
        className={`${i18n.language === "fa" ? "ml-auto" : "mr-auto"} `}
        title={i18n.language === "fa" ? " رژیم ها" : "Diets"}
      />

      {viewBtnAn ? (
        <div className="flex items-center justify-center gap-10 max-lg:flex-col">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 1 }}
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
                  {i18n.language === "fa" ? "رژیم ایرانی " : "Irani Diet"}
                </h2>
                <span className="text-[#969696]">2,000,000 T</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                  {i18n.language === "fa" ? "رژیم" : "Menu Diet"}
                </h2>
                <span className="text-[#969696]">2,000,000 T</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                  {i18n.language === "fa" ? "رژیم ورزشی " : "Sports Diet"}
                </h2>
                <span className="text-[#969696]">2,000,000 T</span>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}
