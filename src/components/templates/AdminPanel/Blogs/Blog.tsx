import { useState } from "react";
import { EditBlog } from "./EditBlog";
import { BlogType } from "./types";
import { toast } from "../../../../hooks/use-toast";
import { BlogContent } from "./BlogContent";
import i18n from "../../../../i18n/i18n";
const apiUrl = import.meta.env.VITE_API_URL;


type Props = {
    blog: BlogType,
    reload: Function,
}

export const Blog = (props: Props) => {
    const { language } = i18n;
    const { blog, reload } = props;
    const [_deleteState, setDeleteState] = useState({
        deleting: false,
        deleted: false,
        deleteErr: false,
    })

    async function handleDelete() {
        setDeleteState(cur => ({...cur, deleting: true}))
        fetch(`${apiUrl}/api/blog/delete/${blog.id}`, {
            method: "DELETE",
            headers: {
                "accept": "*/*"
            }
        })
        .then(req => {
            req.json()
        })
        .then((response: any) => {
            // refresh the blogs (call reload funciton)
            reload();
            
            // show success message
            const { message } = response
            toast({ title: message, variant: "success" })
            setDeleteState(cur => ({...cur, deleting: false, deleted: true}));
            return message
        })
        .catch(error => {
            console.error(error);
            setDeleteState(cur => ({...cur, deleted: false, deleteErr: true, deleting: false}))
        })

        reload();
    }

    return (
        <tr>
            <td align={language === "fa" ? "right" : "left"} className="py-2 px-4 bg-gray-200 rounded-s-lg">
                <span>{blog.id}</span>
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
            {/* <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200">
                <Button onClick={handleDelete} className="bg-main">
                    حذف
                    {
                        deleteState.deleting ? <ButtonLoader /> : ""
                    }
                </Button>
            </td> */}
        </tr>
    );
}
