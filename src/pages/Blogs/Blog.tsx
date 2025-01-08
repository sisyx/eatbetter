import { useTranslation } from "react-i18next";
import Container from "../../components/modules/Container/Container";
import { useSearchParams } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import Cookies from "js-cookie";
import { tokenName } from "../../config/constants";
import { toast } from "../../hooks/use-toast";
import { ThreeDotsLoader } from "../../components/modules/loader/ThreeDotLoader";
const apiUrl = import.meta.env.VITE_API_URL;

export const Blog = () => {
    const { i18n } = useTranslation();
    const { language } = i18n;
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || 1;


    const {data: blog, isError: error, isLoading: loading, } = useGetData(["blog", id ], getBlog);

    async function getBlog() {
        const eatBetterToken = Cookies.get(tokenName);
        try {
            const req = await fetch(`${apiUrl}/api/Blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${eatBetterToken}`,
                    "accept": "text/plain"
                }
            });
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            
            if (res.statusCode === 200 && !!res?.blog) {
                return res.blog;
            }
        } catch (error) {
            toast({title: language === "en" ? "Failed Loading Blog" : "مشکلی در دریافت بلاگ به وجود آمد.", variant: "danger"})
             
            return error;
        }
    }

    return (
        <Container>
            <div dir={language === "fa" ? "rtl" : "ltr"} className="flex flex-col items-center gap-8 px-12 py-24 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28">
                {
                    loading ? <div className="py-48"><ThreeDotsLoader dotSize={50} /></div>
                    : error ? <div className="py-48">مشکلی غیر منتظره رخ داده. لطفا مجددا بعدا تلاش کنید</div>
                    : blog ? 
                    <div className="flex flex-col w-full gap-8" dir={language === "fa" ? "rtl" : "ltr"}>
                        <span className={`text-3xl font-extrabold text-main flex justify-start items-center gap-4`}>
                            <div className="h-2 w-2 rounded-xl bg-main">
                                <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
                            </div>
                            <span>
                                {blog.title}
                            </span>
                        </span>
                        <span dir={language === "fa" ? "rtl" : "ltr"} className="text-2xl text-center p-2 border-2 border-main rounded-lg">{blog.content.split(" ").slice(0, 7).reduce((acc: string, word: string) => acc += ` ${word}`,""  )}...</span>
                        <div className="w-full aspect-video" >
                            <img className="w-full aspect-video object-cover object-center" src={` ${blog?.imageUrl ? blog.imageUrl : "/images/15128913_ODcyMjQ5OTkx.jpg"}`} alt="blog image" />
                        </div>
                        <div className="flex-[3] flex flex-col">
                            <span className="md:w-full text-xl md:text-justify leading-10 tracking-wider">
                                {blog.content}
                            </span>
                        </div>
                    </div> : ""
                }
            </div>
        </Container>
    );
}
