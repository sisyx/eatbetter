import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle, 
} from "../../../shadcn/ui/dialog";
import { Dispatch, SetStateAction } from "react";

interface BmiData {
  statusCode: number;
  messages: {
    english: string;
    persian: string;
  };
  bmi: number;
  healthStatus: {
    english: string;
    persian: string;
  };
}
type Props = {
  data: BmiData | {};
  showBmiModal: boolean;
  setShowBmiModal: Dispatch<SetStateAction<boolean>>;
};

const BmiModal = (props: Props) => {
  const { i18n } = useTranslation();

  const isBmiData = (data: any): data is BmiData => {
    return "messages" in data && "healthStatus" in data;
  };
  return (
    isBmiData(props.data) && (
      <Dialog onOpenChange={props.setShowBmiModal} open={props.showBmiModal}>
        <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
          <DialogHeader>
            <DialogTitle
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
              className="flex items-center justify-center gap-2 py-3 text-xl"
            >
              {i18n.language === "fa"
                ? props.data?.messages.persian
                : props.data?.messages.english}
            </DialogTitle>
          </DialogHeader>
       <div>
       <p className="text-center mt-2 ">{props.data.bmi}</p>
        <p 
              dir={i18n.language === "fa" ? "rtl" : "ltr"}
              className="text-center">{i18n.language === "fa" ? props.data.healthStatus.persian : props.data.healthStatus.english}</p>
       
       </div>
        </DialogContent>
      </Dialog>
    )
  );
};

export default BmiModal;
