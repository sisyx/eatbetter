import { useTranslation } from "react-i18next";
import Title from "../../../modules/Title/Title";
import { Button } from "../../../shadcn/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../../shadcn/ui/dialog";
   
    type Props = {
        day: string;
        exercise: string
        id: number;
      }; 
  const Modal = (props: Props) => { 
  const { i18n } = useTranslation();
    
    return (
      <Dialog>
        <DialogTrigger asChild>
        <Button className="w-full mt-4" variant={"main"}>
          جزئیات بیشتر
        </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
          <DialogHeader>
            <DialogTitle dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className="flex items-center justify-center gap-2 py-3">
             <Title title={i18n.language === 'fa' ? `چالش ${props.day}` : `Challenge ${props.day}`} />
            </DialogTitle>
          </DialogHeader>
          <p dir="rtl" className="text-center">
            {props.exercise}
          </p>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default Modal;
  