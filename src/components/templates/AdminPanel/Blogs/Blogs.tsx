import { useTranslation } from "react-i18next";
import { FaBlog } from "react-icons/fa";
import Layout from "../../../../Layouts/AdminLayout";
import useGetData from "../../../../hooks/useGetData";
import { useState } from "react";
import Cookies from "js-cookie";
import { tokenName } from "../../../../config/constants";
import { toast } from "../../../../hooks/use-toast";
import i18n from "../../../../i18n/i18n";
import { ThreeDotsLoader } from "../../../modules/loader/ThreeDotLoader";
import { Blog } from "./Blog";
import { CreateBlog } from "./CreateBlog";
const apiUrl = import.meta.env.VITE_API_URL;

const Blogs = () => {
    const { t } = useTranslation();
    const { language } = i18n;
    const [reload, setReload] = useState<number>(0);

    const {data: blogs, isError: error, isLoading: loading, } = useGetData(["admin_blogs", reload], getBlogs);

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
            return error;
        }
    }

    function reloadBlogs() {
        setReload(cur => cur+1);
    }

    // https://alimoayed.com/api/Blog/all
    return (
        <Layout>
            <div className="flex flex-col gap-4 w-full h-full">
                <div className="flex items-center justify-center text-3xl font-extrabold flex-col gap-2">
                    <FaBlog />
                    <span>{t("adminBlogs.title")}</span>
                </div>
                <hr />
                {error ? (
                <h1>{t("adminBlogs.loadBlogsError")}</h1>
                ) : loading ? (
                <ThreeDotsLoader dotSize={20} />
                ) : (
                    <div className="w-full overflow-x-scroll">
                        <table className="w-full" style={{minWidth: "400px"}} dir={language === "fa" ? "rtl" : "ltr"}>
                            <tr>
                                <th align={language === "fa" ? "right" : "left"}></th>
                                <th align={language === "fa" ? "right" : "left"}>نمایه ی بلاگ</th>
                                <th align={language === "fa" ? "right" : "left"}>{t("adminBlogs.table.title")}</th>
                                <th align={language === "fa" ? "right" : "left"}>{t("adminBlogs.table.content")}</th>
                                <th align={language === "fa" ? "right" : "left"}>{t("adminBlogs.table.publishDate")}</th>
                                <th align={language === "fa" ? "right" : "left"}>{t("adminBlogs.table.edit")}</th>
                                <th align={language === "fa" ? "right" : "left"}>{t("adminBlogs.table.delete")}</th>
                            </tr>
                            {blogs?.map((blog: any) => (
                                <>
                                <div className="h-4"></div>
                                <Blog blog={blog} reload={reloadBlogs} />
                                </>
                            ))}
                        </table>
                        <CreateBlog reload={reloadBlogs} />
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Blogs;