import { useTranslation } from "react-i18next";
import { imageBase } from "../../../config/constants";
import { Button } from "../../shadcn/ui/button";
import i18n from "../../../i18n/i18n";

const BlogsHead = () => {

    const { t } = useTranslation();
    const { language } = i18n;

    return (
        <div className="relative w-full p-5 md:p-20 flex justify-center h-screen">
            <div className="max-w-5xl flex items-center justify-center">
                <img src={`${imageBase}/144641330_10142427.jpg`} alt="BLOG HEAD IMAGE" />
            </div>
            <div dir={language === "fa"? "rtl" : "ltr"} className="absolute flex flex-col gap-8 p-5 md:p-20 text-gray-200 pb-32 bottom-0 left-0 right-0 bg-gradient-to-t from-[#000] to-transparent">
                <span className="text-2xl lg:text-5xl font-extrabold transition-all duration-300">{t("blogs.headTitle")}</span>
                <span className="text-3xl lg:text-7xl font-extrabold transition-all duration-300">{t("blogs.headText")}</span>
                <a href="#allblogs">
                    <Button className="w-full bg-main hover:bg-mainHover">{t("blogs.continue")}</Button>
                </a> 
            </div>
        </div>
    );
}

export default BlogsHead
