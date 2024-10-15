import React, { useEffect, useState } from "react";
import AnimatedBackground2 from "../../components/AnimatedBackground2";
import GenderSelector from "../../components/GenderSelector";
import DietsBtn from "../../components/DietsBtn";

const Home: React.FC = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div className="px-28 pt-14 max-sm:px-5 max-sm:pt-1">
                <AnimatedBackground2 />
                <GenderSelector />
                <DietsBtn />
                <div className="flex max-lg:flex-col justify-center items-center my-48  gap-10">
                    <div className=" flex flex-col gap-10 w-[600px]  max-sm:w-[280px] ">
                        <h2 className="text-[30px] max-sm:text-[15px]   font-bold text-end text-main">
                            {" "}
                            !به دنیای سلامت و زیبایی خوش آمدید
                        </h2>
                        <p className="text-[20px] max-sm:text-[15px]   text-end leading-8">
                            ما اینجا هستیم تا شما را به بهترین نسخه از خودتان تبدیل کنیم، چه
                            تازه‌کار باشید و چه حرفه‌ای. با برنامه‌های تغذیه‌ای و ورزشی
                            شخصی‌سازی شده، ابزارهای هوشمند و بیش از ۴۰ حرکت ورزشی گام‌به‌گام،
                            شما را در مسیر رسیدن به اهداف سلامتی و تناسب اندام همراهی می‌کنیم.
                            برنامه ۲۱ روزه ما به شما کمک می‌کند عادات سالمی بسازید و از غذاهای
                            خوشمزه و سالم با بیش از ۱۵۰ دستور پخت ایرانی و بین‌المللی لذت
                            ببرید. با محاسبه‌گر هوشمند کالری، میزان مصرف و سوزاندن کالری خود
                            را به‌راحتی پیگیری کنید و با پیام‌های مناسب، خواب و روحیه‌تان را
                            بهبود ببخشید. چالش‌های ۲۱ روزه ما به شما انگیزه‌ای برای تغییرات
                            واقعی و ملموس می‌دهند. به ما بپیوندید و از امکانات منحصربه‌فرد ما
                            بهره‌مند شوید. شما شایسته یک زندگی سالم و شاد هستید!
                        </p>
                    </div>
                    <div className="max-sm:w-[250px]">
                        <video
                            src="gif1.mp4"
                            autoPlay
                            muted
                            loop
                            className="w-[600px]  rounded-xl shadow-xl "
                        ></video>
                    </div>
                </div>
                <div className="flex max-lg:flex-col  flex-row-reverse justify-center items-center  my-48 gap-10">
                    <div className="flex flex-col items-end gap-5 w-[50%] max-lg:w-[100%] max-sm:w-[250px]">
                        <h5 className="text-[30px] max-sm:text-[20px]  font-bold text-main">
                            خودتو , با ما بساز
                        </h5>
                        <p className="text-[16px] text-gray-700 leading-7 text-end">
                            در این مسیر از خودسازی و تغییر، همراه شما هستیم تا با همدیگر به
                            اهداف بزرگ دست پیدا کنیم. ما معتقدیم هر فردی می‌تواند با اراده و
                            تلاش، نسخه بهتری از خودش بسازد. از همین امروز شروع کن، تغییرات
                            کوچکی در زندگی خود ایجاد کن و شاهد نتایج بزرگ باش. با ما همراه شو
                            و این سفر را به سوی موفقیت و رشد آغاز کن.
                        </p>
                        <button className="bg-main hover:bg-mainHover text-white py-2 px-4 rounded-lg">
                            شروع کن
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-5 w-[50%] max-lg:w-[100%] max-sm:w-[250px]">
                        <div className="flex flex-col justify-center items-center text-center gap-3 border border-[#00000034] w-[270px] h-[200px] shadow-xl px-2 rounded-xl">
                            <div className="bg-mainHover p-2 rounded-full text-white">
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
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </div>
                            <h5> چالش‌های ۲۱ روزه</h5>
                            <p className="text-[14px]">
                                برنامه‌های ساده و کاربردی برای تغییرات واقعی و ملموس جهت سلامت و
                                زیبایی بیشتر شما
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center gap-3  border border-[#00000034] w-[270px] h-[200px] shadow-xl px-2 rounded-xl">
                            <div className="bg-mainHover p-2 rounded-full text-white">
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
                                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                                    />
                                </svg>
                            </div>
                            <h5>محاسبه‌گر هوشمند کالری</h5>
                            <p className="text-[14px]">
                                ابزاری قدرتمند برای مدیریت تغذیه شما در هر لحظه.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center gap-3  border border-[#00000034] w-[270px] h-[200px] shadow-xl px-2 rounded-xl">
                            <div className="bg-mainHover p-2 rounded-full text-white">
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
                                        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                                    />
                                </svg>
                            </div>
                            <h5>محتوای آموزشی و جذاب</h5>
                            <p className="text-[14px]">
                                ویدیوهای آموزشی در بخش تلویزیون برای اطلاعات روز و نکات سلامت.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center gap-3  border border-[#00000034] w-[270px] h-[200px] shadow-xl px-2 rounded-xl">
                            <div className="bg-mainHover p-2 rounded-full text-white">
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
                                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                                    />
                                </svg>
                            </div>
                            <h5>خواب آرام و روحیه شاد</h5>
                            <p className="text-[14px]">
                                با پیام‌های مناسب در زمان مناسب به تنظیم خواب شما و روحیه شما
                                کمک میکنیم
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  justify-center items-center gap-20 mb-72 ">
                    <div className="flex justify-end items-center gap-5 font-bold text-[20px]">
                        <div className="w-2 h-2 bg-main rounded-xl">
                            <div className="animate-ping w-2 h-2 bg-mainHover rounded-xl"></div>
                        </div>
                        <h2 className="max-sm:text-[15px] max-sm:w-[180px] ">فرآیندی که ما دنبال می کنیم</h2>
                        <div className="w-2 h-2 bg-main rounded-xl">
                            <div className="animate-ping w-2 h-2 bg-mainHover rounded-xl"></div>
                        </div>
                    </div>
                    <div className="flex max-lg:flex-wrap justify-center items-center gap-5">
                        <div className="bg-green-500 p-6 rounded-xl text-center shadow-lg max-sm:w-[300px]">
                            <div className="text-white text-2xl font-bold mb-4">
                                رژیم شخصی‌سازی شده
                            </div>
                            <p className="text-white">
                                یک برنامه غذایی ۲۱ روزه که به دقت بر اساس نیازها و اهداف شما
                                طراحی شده است. این برنامه شامل نکات کاربردی برای تغییر سبک زندگی
                                و راهنمایی‌هایی برای نحوه پیاده‌سازی و ادامه آن می‌باشد.
                            </p>
                        </div>
                        <div className="bg-purple-500 p-6 rounded-xl text-center shadow-lg 2-[900px]">
                            <div className="text-white text-2xl font-bold mb-4">
                                برنامه ورزشی شخصی سازی شده
                            </div>
                            <p className="text-white">
                                حرکات ورزشی اختصاصی روزانه به همراه رژیم غذایی ۲۱ روزه اتان با
                                راهنمایی‌های دقیق برای دستیابی به بهترین نتایج.
                            </p>
                        </div>
                        <div className="bg-blue-500 p-6 rounded-xl text-center shadow-lg">
                            <div className="text-white text-2xl font-bold mb-4">
                                توضیح نحوه انجام‌حرکات ورزشی
                            </div>
                            <p className="text-white">
                                آموزش گام‌به‌گام بیش از ۴۰ حرکت ورزشی متداول، شامل توضیحات دقیق
                                درباره میزان کالری سوزی هر حرکت و تأثیر آن بر زیبایی کدام
                                قسمت‌های بدن است. همچنین، نکات تنفسی مربوط به هر ورزش ارائه شده
                                تا بتوانید تمرینات خود را با حداکثر بهره‌وری و ایمنی انجام دهید.
                            </p>
                        </div>
                        <div className="bg-red-500 p-6 rounded-xl text-center shadow-lg">
                            <div className="text-white text-2xl font-bold mb-4">
                                دستورهای آشپزی متنوع
                            </div>
                            <p className="text-white">
                                نحوه پخت بیش از ۱۵۰ غذای ایرانی و بین‌المللی به همراه اطلاعات
                                کامل در مورد کالری، مواد مغذی و برای جه رژیم غذایی ان غذا مناسب
                                است
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={scrollToTop} className={`bg-mainHover p-4 max-sm:p-3 rounded-full ${isScrolled ? "bottom-5 fixed  right-5 z-50" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                    </svg>
                </button>
                <button className={`bg-mainHover p-4 max-sm:p-3 rounded-full ${isScrolled ? "bottom-4 fixed  left-5 z-50" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                </button>
            </div>
        </>
    );
};
export default Home;
