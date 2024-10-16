import { useEffect, useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function index() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const { t, i18n } = useTranslation();


  const toggleLanguage = () => {
    const newLang = isEnglish ? 'fa' : 'en';
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };


  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`flex justify-between items-center py-5 px-24 max-sm:px-10 ${isScrolled ? 'fixed w-screen top-0  bg-white shadow-md z-50   py-3 rounded-ee-xl rounded-es-xl' : ''}`}>
        <div>
          <img src="BLP-b.png" alt="logo" width={"80px"} />
        </div>
        <div className="max-lg:hidden">
          <ul className="flex flex-row-reverse gap-5 ">
            <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>{t("hederMainpage")}</li></Link>
            <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>{t("blog")}</li></Link>
            <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>{t("diets")}</li></Link>
            <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>{t("sleep_soul_mental")}</li></Link>
            <div className=" group flex relative transition-all  ">
              <Link to={""} className="flex justify-center items-center group ">
                <li className="hover:text-main transition-all p-2 rounded-md">{t("exercises")}</li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:rotate-0 transition-all	 rotate-180" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </Link>
              <div className="bg-main w-32 rounded-xl absolute top-[100%] hidden text-white  group-hover:flex  ">
                <ul className="flex flex-col p-6 gap-2 text-end ">
                  <Link to={""} className=" hover:text-mainHover"> <li>شنا</li></Link>
                  <Link to={""} className=" hover:text-mainHover"> <li>اسکات</li></Link>
                  <Link to={""} className=" hover:text-mainHover"> <li>ورزش شکم</li></Link>
                  <Link to={""} className=" hover:text-mainHover"> <li>پیاده روی </li></Link>
                  <Link to={""} className=" hover:text-mainHover"> <li>پلانگ</li></Link>
                </ul>
              </div>
            </div>
            <div className=" group flex relative transition-all">
              <Link to={""} className="flex justify-center items-center group ">
                <li className="hover:text-main transition-all p-2 rounded-md">{t("cookingInstruction")}</li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:rotate-0 transition-all	 rotate-180" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </Link>
              <div className="  bg-main w-[650px] rounded-xl absolute top-[100%] hidden text-white  group-hover:flex group-hover:justify-center  ">
                <div className=" border-r p-2 border-[#00000014]">
                  <p className="text-end font-bold">{t("breakfast")}</p>
                  <ul className="flex flex-col p-5 gap-2 text-end ">
                    <Link to={""} className=" hover:text-mainHover"> <li>نان و پنیر و گوجه و خیار</li></Link>
                  </ul>
                </div>
                <div className=" border-r p-2 border-[#00000014]">
                  <p className="text-end font-bold">ناهار</p>
                  <ul className="flex flex-col p-5 gap-2 text-end ">
                    <Link to={""} className=" hover:text-mainHover"> <li>برنج سفید آبکش</li></Link>
                    <Link to={""} className=" hover:text-mainHover"> <li>برنج قهوه ای کته</li></Link>
                    <Link to={""} className=" hover:text-mainHover"> <li>خورشت قورمه سبزی</li></Link>
                    <Link to={""} className=" hover:text-mainHover"> <li>خورشت قیمه</li></Link>
                    <Link to={""} className=" hover:text-mainHover"> <li>کباب دیگی</li></Link>
                  </ul>
                </div>
                <div className=" border-r p-2 border-[#00000014]">
                  <p className="text-end font-bold">سوپ ها</p>
                  <ul className="flex flex-col p-5 gap-2 text-end ">
                    <Link to={""} className=" hover:text-mainHover"> <li>آش رشته</li></Link>
                  </ul>
                </div>
                <div className=" p-2 ">
                  <p className="text-end font-bold">سالاد ها</p>

                  <ul className="flex flex-col p-5 gap-2 text-end ">
                    <Link to={""} className=" hover:text-mainHover text-"> <li>سالاد</li></Link>
                    <Link to={""} className=" hover:text-mainHover"> <li>سالادشیرازی</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" group flex relative transition-all  ">
              <Link to={""} className="flex justify-center items-center group ">
                <li className="hover:text-main transition-all p-2 rounded-md">{t("constactus")}</li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:rotate-0 transition-all	 rotate-180" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </Link>
              <div className="bg-main w-32 rounded-xl absolute top-[100%] hidden text-white  group-hover:flex  ">
                <ul className="flex flex-col p-5 gap-2 text-end ">
                  <Link to={""} className=" hover:text-mainHover"> <li>{t('aboutus')}</li></Link>
                  <Link to={""} className=" hover:text-mainHover"> <li>{t("constactus")}</li></Link>
                  <Link to={""} className=" hover:text-mainHover"> <li>{t("workwithus")}</li></Link>
                </ul>
              </div>
            </div>
          </ul>
        </div >
        <div className="lg:hidden relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 group">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className="bg-main w-screen rounded-xl absolute top-[100%] -right-10 hidden  text-white  group-hover:flex  ">
            <ul className="flex flex-col p-6 gap-2 text-center w-screen">
              <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>{t("hederMainpage")}</li></Link>
              <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>بلاگ</li></Link>
              <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>رژیم ها</li></Link>
              <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>خواب و روح و روان</li></Link>
              <Link to={""} className="flex justify-center items-center group "><li className="hover:text-main transition-all p-2 rounded-md">{t("exercises")}</li></Link>
              <Link to={""} className="flex justify-center items-center group "><li className="hover:text-main transition-all p-2 rounded-md">دستور آشپزی</li></Link>
              <Link to={""} className="flex justify-center items-center group "><li className="hover:text-main transition-all p-2 rounded-md">ارتباط با ما</li></Link>
            </ul>
          </div>
        </div>
        <div className="max-lg:hidden flex items-center justify-center gap-4">
          <button
              onClick={() => toggleLanguage()}
              className="flex items-center justify-center gap-1 bg-white p-2 text-mainHover rounded-xl text-center hover:text-mainHover hover:border-mainHover border border-transparent transition-all">
            <span>{t('headerlang')}</span>
            <IoLanguage />
          </button>
          <Link to={""}>
            <button className="bg-main p-2 text-white rounded-xl text-center hover:bg-mainHover transition-all  ">
              {t('headerlogin')}
            </button>
          </Link>
        </div>
      </div >
    </>
  )
}
