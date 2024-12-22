import { tokenName } from "../../../config/constants";
import { toast } from "../../../hooks/use-toast";
import useGetData from "../../../hooks/useGetData";
import i18n from "../../../i18n/i18n";
import BlogSample from "./BlogSample";
import Cookies from "js-cookie";
const apiUrl = import.meta.env.VITE_API_URL;
import { ThreeDotsLoader } from "../../modules/loader/ThreeDotLoader";
import { BlogType } from "../AdminPanel/Blogs/types";

const BlogsContainer = () => {
    const { language } = i18n;

    const {data: blogs, isError: error, isLoading: loading, } = useGetData(["blogs"], getBlogs);

    async function getBlogs() {
        const eatBetterToken = Cookies.get(tokenName);
        try {
            const req = await fetch(`${apiUrl}/api/Blog/all`, {
                headers: {
                    Authorization: `Bearer ${eatBetterToken}`,
                    "accept": "text/plain"
                }
            });
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json();
            
            if (res.statusCode === 200 && !!res?.blogs) {
                return res.blogs;
            }
        } catch (error) {
            toast({title: language === "en" ? "Failed Loading Blogs" : "مشکلی در دریافت بلاگها به وجود آمد.", variant: "danger"})
            console.error(error);
            return error;
        }
    }

    return (
        <>
            {
                loading ? 
                <div className="py-96">
                    <ThreeDotsLoader dotSize={50} />
                </div>
                : 
                error ? <div className="py-48">مشکلی در دریافت بلاگ ها پیش آمده</div>
                : 
                <div className="w-full flex items-center flex-col pt-16 justify-center">
                    <span className="text-4xl fony-extrabold">لیست وبلاگ ها</span>
                    <div id="allblogs" className="grid sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5 md:p-10 p-5 w-full">
                    { blogs.length && blogs.map((blog: BlogType, index: number) => <BlogSample {...blog} key={`blog-sample${index}`} />)}
                    </div>
                </div>
            }
        </>
    );
}

export default BlogsContainer;