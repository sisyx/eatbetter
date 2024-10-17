import { Link } from 'react-router-dom'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

export default function DietsBtn() {
    const refBtns = useRef<HTMLDivElement>(null);
    const viewBtnAn = useInView(refBtns, { once: true });
    return (
        <div className="flex flex-col ite gap-10 mt-48" ref={refBtns}>
            <div className="flex justify-end items-center gap-1 font-bold text-[20px]">
                <h2>رژیم ها</h2>
                <div className="w-2 h-2 bg-main rounded-xl">
                    <div className="animate-ping w-2 h-2 hover:bg-mainHover transition-all rounded-xl"></div>
                </div>
            </div>
            {viewBtnAn ? (
                <div className="flex max-lg:flex-col justify-center items-center gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center items-center py-10 px-10 rounded-3xl shadow-2xl"
                    >
                        <div className="flex items-center gap-10">
                            <Link to={""}>
                                <div className="flex justify-center items-center w-[37px] h-[37px] bg-main hover:bg-mainHover transition-all text-white rounded-full">
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
                            <div className="text-end flex flex-col gap-1">
                                <h2 className="font-bold">رژیم ایرانی </h2>
                                <span className="text-[#969696]">2,000,000 T</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center items-center py-10 px-10  rounded-3xl shadow-2xl"
                    >
                        <div className="flex items-center gap-10">
                            <Link to={""}>
                                <div className="flex justify-center items-center w-[37px] h-[37px] bg-main hover:bg-mainHover transition-all text-white rounded-full">
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
                            <div className="text-end flex flex-col gap-1">
                                <h2 className="font-bold">رژیم منو</h2>
                                <span className="text-[#969696]">2,000,000 T</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col justify-center items-center py-10 px-10  rounded-3xl shadow-2xl"
                    >
                        <div className="flex items-center gap-10">
                            <Link to={""}>
                                <div className="flex justify-center items-center w-[37px] h-[37px] bg-main hover:bg-mainHover transition-all text-white rounded-full">
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
                            <div className="text-end flex flex-col gap-1">
                                <h2 className="font-bold">رژیم ورزشی</h2>
                                <span className="text-[#969696]">2,000,000 T</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : null}
        </div>
    )
}
