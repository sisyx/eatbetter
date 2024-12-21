import { useTranslation } from "react-i18next";
import { Button } from "../../shadcn/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../shadcn/ui/dialog";
  
 
  const Modal = () => {
    const { t ,i18n } = useTranslation();
 
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-5 mb-14 mx-auto block" variant={"main"}>{t('dietsButtonOne')}</Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-2 py-3">
              <h5>{t("modalTitle")}</h5>
            </DialogTitle>
          </DialogHeader>
          <p dir="rtl" className="text-center">
           
          </p>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default Modal;
  