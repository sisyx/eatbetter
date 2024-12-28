import { tokenName } from "../../../config/constants";
import { toast } from "../../../hooks/use-toast";
import useGetData from "../../../hooks/useGetData";
import i18n from "../../../i18n/i18n";
import BlogSample from "./BlogSample";
import Cookies from "js-cookie";
const apiUrl = import.meta.env.VITE_API_URL;
import { ThreeDotsLoader } from "../../modules/loader/ThreeDotLoader";
import { BlogType } from "../AdminPanel/Blogs/types";
import { useTranslation } from "react-i18next";

const BlogsContainer = () => {
  const { language } = i18n;

  const {i18n:lang} = useTranslation()
  const {
    data: blogs,
    isError: error,
    isLoading: loading,
  } = useGetData(["blogs"], getBlogs);

  async function getBlogs() {
    const eatBetterToken = Cookies.get(tokenName);
    try {
      const req = await fetch(`${apiUrl}/api/Blog/all`, {
        headers: {
          Authorization: `Bearer ${eatBetterToken}`,
          accept: "text/plain",
        },
      });
      if (!req.ok) throw new Error(req.statusText);
      const res = await req.json();

      if (res.statusCode === 200 && !!res?.blogs) {
        return res.blogs;
      }
    } catch (error) {
      toast({
        title:
          language === "en"
            ? "Failed Loading Blogs"
            : "مشکلی در دریافت بلاگها به وجود آمد.",
        variant: "danger",
      });
      console.error(error);
      return error;
    }
  }

  return (
    <>
      {loading ? (
        <div className="py-96">
          <ThreeDotsLoader dotSize={50} />
        </div>
      ) : error ? (
        <div className="py-48">مشکلی در دریافت بلاگ ها پیش آمده</div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center pt-16">
          {lang.language === "fa" ? (
            <span className="fony-extrabold text-4xl">لیست وبلاگ ها</span>
          ) : (
            <span className="fony-extrabold text-4xl">Blogs List </span>
          )}
          <div
            id="allblogs"
            className="grid w-full gap-5 p-5 sm:grid-cols-2 md:gap-10 md:p-10 lg:grid-cols-3"
          >
            {blogs.length
              ? blogs.map((blog: BlogType, index: number) => (
                  <BlogSample {...blog} key={`blog-sample${index}`} />
                ))
              : ""}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsContainer;
