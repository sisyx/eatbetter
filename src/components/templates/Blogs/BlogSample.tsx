import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { imageBase } from "../../../config/constants";

const BlogSample = () => {
    const { i18n } = useTranslation();
    const { language } = i18n;

    return (
        <Link to="/blog" dir={language === "fa" ? "rtl" : "ltr"} className="group relative w-full flex flex-col rounded-2xl overflow-hidden bg-gray-200 p-1 hover:-translate-y-4  transition-all duration-200 cursor-pointer">
            <img src={`${imageBase}/15128913_ODcyMjQ5OTkx.jpg`} className="w-full rounded-lg aspect-video object-cover object-center bg-black" />
            <div className=" absolute bg-gradient-to-t from-transparent  to-black z-20"></div>
            <div className="text-black bottom-0 flex flex-col justify-center gap-8 items-start p-4 group-hover:from-mainHover transition-all duration-100">
                <div className="flex flex-col items-start">
                    <span className="text-2xl font-bold">{language === "fa" ? "عنوان بلاگ"  : "BlogSample Title"}</span>
                    <span className="text-justify font-extrabold leading-5 tracking-wide">
                        {
                            language === "fa" ? "در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی "
                            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, enim!"
                        }
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default BlogSample