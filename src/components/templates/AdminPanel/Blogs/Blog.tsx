import { EditBlog } from "./EditBlog";
import { BlogType } from "./types";
import { BlogContent } from "./BlogContent";
import i18n from "../../../../i18n/i18n";
import { BlogImage } from "./BlogImage";


type Props = {
    blog: BlogType,
    reload: Function,
}

export const Blog = (props: Props) => {
    const { language } = i18n;
    const { blog, reload } = props;

    return (
        <tr>
            <td align={language === "fa" ? "right" : "left"} className="py-2 px-4 bg-gray-200 rounded-s-lg">
                <span>{blog.id}</span>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <BlogImage reload={reload} {...blog} />
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <span className="md:text-xl text-sm font-extrabold w-[20ch]">{blog.title.length > 20 ? `${blog.title.slice(0, 17)}...` : blog.title }</span>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <BlogContent title={blog.title} content={blog.content} />
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <span className="text-sm md:text-base">{blog.publishedDate}</span>
            </td>
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200 rounded-e-lg">
                <EditBlog {...blog} imagePath={blog.imageUrl} reload={reload} />
            </td>
        </tr>
    );
}
