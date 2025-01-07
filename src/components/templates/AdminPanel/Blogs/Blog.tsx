import { EditBlog } from "./EditBlog";
import { BlogType } from "./types";
import { BlogContent } from "./BlogContent";
import i18n from "../../../../i18n/i18n";
import { BlogImage } from "./BlogImage";
import { ImBin2 } from "react-icons/im";
import { Button } from "../../../shadcn/ui/button";
import { useState } from "react";
import { toast } from "../../../../hooks/use-toast";
import { ButtonLoader } from "../../../modules/loader/Loader";
const apiUrl = import.meta.env.VITE_API_URL;


type Props = {
    blog: BlogType,
    reload: Function,
}

export const Blog = (props: Props) => {
    const { language } = i18n;
    const { blog, reload } = props;
    const { id } = blog;
    const [deleteState, setDeleteState] = useState({
        deleting: false,
        deleted: false,
        deleteErr: false,
    })

    // async functions
    async function deleteBlog() {
        setDeleteState(cur => ({...cur, deleting: true}))
        fetch(`${apiUrl}/api/Blog/delete/${id}`, {
            method: "DELETE",
            headers: {
                "accept": "*/*"
            }
        })
        .then(req => {
            req.json()
        })
        .then((response: any) => {
            // refresh the users (call reload funciton)
            reload();
            
            // show success message
            const { message } = response
            toast({ title: message })
            setDeleteState(cur => ({...cur, deleting: false, deleted: true}));
            return message
        })
        .catch((_error) => { 
            setDeleteState(cur => ({...cur, deleted: false, deleteErr: true, deleting: false}))
        })
    }
    
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
            <td align={language === "fa" ? "right" : "left"} className="py-2 bg-gray-200 rounded-e-lg">
                <Button onClick={deleteBlog}>
                    {
                        deleteState.deleting 
                        ? <ButtonLoader /> 
                        : <ImBin2 />
                    }
                </Button>
            </td>
        </tr>
    );
}
