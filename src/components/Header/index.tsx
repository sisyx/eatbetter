import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function index() {
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

  return (
    <>
      <div className={`flex justify-between items-center py-5 px-24 max-sm:px-10 ${isScrolled ? 'fixed w-screen top-0  bg-white shadow-md z-50   py-3 rounded-ee-xl rounded-es-xl' : ''}`}>
        <div>
          <img src="BLP-b.png" alt="logo" width={"80px"} />
        </div>
        <div className="max-lg:hidden">
          <ul className="flex flex-row-reverse gap-5 ">
            <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>صفحه اصلی</li></Link>
            <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>بلاگ</li></Link>
            <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>رژیم ها</li></Link>
            <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>خواب و روح و روان</li></Link>
            <div className=" group flex relative transition-all  ">
              <Link to={""} className="flex justify-center items-center group ">
                <li className="hover:text-main transition-all p-2 rounded-md">ورزش ها</li>
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
                <li className="hover:text-main transition-all p-2 rounded-md">دستور آشپزی</li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:rotate-0 transition-all	 rotate-180" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </Link>
              <div className="  bg-main w-[650px] rounded-xl absolute top-[100%] hidden text-white  group-hover:flex group-hover:justify-center  ">
                <div className=" border-r p-2 border-[#00000014]">
                  <p className="text-end font-bold">صبحانه</p>
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
                <li className="hover:text-main transition-all p-2 rounded-md">ارتباط با ما</li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:rotate-0 transition-all	 rotate-180" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </Link>
              <div className="bg-main w-32 rounded-xl absolute top-[100%] hidden text-white  group-hover:flex  ">
                <ul className="flex flex-col p-5 gap-2 text-end ">
                  <Link to={""} className=" hover:text-mainHover"> <li>درباره ما</li></Link>
                  <Link to={""} className=" hover:text-mainHover"> <li>تماس با ما</li></Link>
                  <Link to={""} className=" hover:text-mainHover"> <li>همکاری با ما</li></Link>
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
              <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>صفحه اصلی</li></Link>
              <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>بلاگ</li></Link>
              <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>رژیم ها</li></Link>
              <Link to={""} className="hover:text-main transition-all p-2 rounded-md"> <li>خواب و روح و روان</li></Link>
              <Link to={""} className="flex justify-center items-center group "><li className="hover:text-main transition-all p-2 rounded-md">ورزش ها</li></Link>
              <Link to={""} className="flex justify-center items-center group "><li className="hover:text-main transition-all p-2 rounded-md">دستور آشپزی</li></Link>
              <Link to={""} className="flex justify-center items-center group "><li className="hover:text-main transition-all p-2 rounded-md">ارتباط با ما</li></Link>
            </ul>
          </div>
        </div>
        <div className="max-lg:hidden">
          <Link to={""}>
            <button className="bg-main p-2 text-white rounded-xl text-center hover:bg-mainHover transition-all  ">ورود به حساب کاربری</button>
          </Link>
        </div>
      </div >
    </>
  )
}
