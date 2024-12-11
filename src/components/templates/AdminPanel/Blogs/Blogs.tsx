import { useTranslation } from "react-i18next";
import { FaBlog } from "react-icons/fa";
import Layout from "../../../../Layouts/AdminLayout";

const Blogs = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="flex flex-col gap-4 w-full h-full">
                <div className="flex items-center justify-center text-3xl font-extrabold flex-col gap-2">
                    <FaBlog />
                    <span>{t("adminBlogs.title")}</span>
                </div>
                <hr />
            </div>
        </Layout>
    );
}

export default Blogs;