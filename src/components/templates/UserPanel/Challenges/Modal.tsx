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
  exercise: string;
  exercise2: string;
  exercise3: string;
  exercise4: string;
  exercise5: string;
  id: number;
  method: string;
  durationOrReps: string;
  benefits: string;
};
const Modal = (props: Props) => {
  const { i18n } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 w-full" variant={"main"}>
          {i18n.language == "fa" ? "جزئیات بیشتر" : "More Details"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
            className="flex items-center justify-center gap-2 py-3"
          >
            <Title
              title={
                i18n.language === "fa"
                  ? `چالش ${props.day}`
                  : `Challenge ${props.day}`
              }
            />
          </DialogTitle>
        </DialogHeader>
        <div dir={i18n.language === "fa" ? "rtl" : "ltr"}>
          <p className="text-center">{props.exercise}</p>
          <p className="mt-2 text-center">
            {props.exercise2 ? props.exercise2 : null}
          </p>
          <p className="mt-2 text-center">
            {props.exercise3 ? props.exercise3 : null}
          </p>
          <p className="mt-2 text-center">
            {props.exercise4 ? props.exercise4 : null}
          </p>
          <p className="mt-2 text-center">
            {props.exercise5 ? props.exercise5 : null}
          </p>
          <p className="my-2 text-center text-sm">
            {props.durationOrReps ? props.durationOrReps : null}
          </p>
          <p>{props.method ? props.method : null}</p>
          <div className="mt-6 text-center">
            {props.benefits ? (
              <p>
                {i18n.language === "fa" ? (
                  <>هدف: {props.benefits}</>
                ) : (
                  <>
                    benefits:
                    {props.benefits}
                  </>
                )}
              </p>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
