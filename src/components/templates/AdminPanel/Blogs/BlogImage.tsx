import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../shadcn/ui/dialog";
import { Button } from "../../../shadcn/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import Cookies from "js-cookie";
import { tokenName } from "../../../../config/constants";
import { toast } from "../../../../hooks/use-toast";
import { ThreeDotsLoader } from "../../../modules/loader/ThreeDotLoader";

type PropsType = {
  title: string;
  content: string;
  id: number;
  reload: Function;
  imageUrl: string;
};

export const BlogImage = (props: PropsType) => {
  const { title, reload, imageUrl, id } = props;
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState({
    uploading: false,
    error: false,
  });

  async function uploadImage() {
    setUploadStatus((prev) => ({ ...prev, uploading: true, error: false }));
    const token = Cookies.get(tokenName);
    const formData = new FormData();
    if (file !== null) formData.append("file", file);
    try {
      const req = await fetch(`${apiUrl}/api/Blog/${id}/upload-file?id=${id}`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!req.ok) throw new Error(req.statusText);

      const res = await req.json();
      if (res.statusCode === 200 && res.fileUrl && res.messages) {
        toast({
          title: res.messages[language === "en" ? "english" : "persian"],
          variant: "success",
          className: i18n.language === "fa" ? "justify-start" : "justify-end",
        });
        setUploadStatus((prev) => ({ ...prev, error: false }));
        reload();
      }
    } catch (error: any) {
      setUploadStatus((prev) => ({ ...prev, error: true }));
    }
    setUploadStatus((prev) => ({ ...prev, uploading: false }));
  }

  useEffect(() => {
    uploadImage();
  }, [file]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          {imageUrl && imageUrl !== "https://alimoayed.com" ? (
            <img src={imageUrl} className="w-12 aspect-square object-cover object-center rounded-full" />
          ) : (
            <>
              <Button className="hidden md:block">
                {t("adminBlogs.fileUpload.title")}
              </Button>
              <span className="cursor-pointer text-sm underline md:hidden">
                {t("adminBlogs.fileUpload.title")}
              </span>
            </>
          )}
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
        {uploadStatus.uploading ? (
          <ThreeDotsLoader dotSize={30} />
        ) : (
          <input
            type="file"
            accept="image/"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
