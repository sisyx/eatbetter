import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../shadcn/ui/dialog";

type Props = {
  title: string;
  text: string;
  image: string;
  id: number;
};

const Modal = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer sm:text-base text-sm" dir="rtl">
          {props.text.slice(0, 190) + "..."}
        </p>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            <h5> {props.title}</h5>
            <div className="h-2 w-2 rounded-xl bg-main">
              <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <p dir="rtl" className="text-center">
          {props.text}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
