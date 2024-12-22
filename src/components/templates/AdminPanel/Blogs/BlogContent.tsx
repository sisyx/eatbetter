import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../shadcn/ui/dialog";
import { Button } from "../../../shadcn/ui/button";
import { useTranslation } from "react-i18next";

type PropsType = {
    title: string,
    content: string,
}

export const BlogContent = (props: PropsType) => {
    const { title, content } = props;
    const { t } = useTranslation();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <Button className="hidden md:block">{t("adminBlogs.table.row.content")}</Button>
                    <span className="text-sm underline md:hidden cursor-pointer">{t("adminBlogs.table.row.content")}</span>
                </div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
                <DialogHeader>
                <DialogTitle className="flex items-center justify-center gap-2 py-3">
                    <h5>{title}</h5>
                    <div className="h-2 w-2 rounded-xl bg-main">
                        <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
                    </div>
                </DialogTitle>
                </DialogHeader>
                <div dir="rtl">
                    {content}
                </div>
            </DialogContent>
            </Dialog>
    );
}
