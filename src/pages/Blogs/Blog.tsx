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
            console.error(error);
            return error;
        }
    }

    return (
        <Container>
            <div dir={language === "fa" ? "rtl" : "ltr"} className="flex flex-col items-center gap-8 px-12 py-48 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28">
                {
                    loading ? <div className="py-48"><ThreeDotsLoader dotSize={50} /></div>
                    : error ? <div className="py-48">مشکلی غیر منتظره رخ داده. لطفا مجددا بعدا تلاش کنید</div>
                    : blog ? <>
                        <div className="max-w-2xl aspect-video" >
                            <img className="w-full h-full object-cover object-center" src="/images/15128913_ODcyMjQ5OTkx.jpg" alt="blog image" />
                        </div>
                        <span className="text-2xl font-bold text-center">{blog.title}</span>
                        <span className="md:w-2/3 text-xl md:text-2xl md:text-justify leading-10 tracking-wider">
                            {blog.content}
                        </span>
                    </> : ""
                }
            </div>
        </Container>
    );
}
