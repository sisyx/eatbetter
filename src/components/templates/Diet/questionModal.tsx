import { Button } from "../../shadcn/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../shadcn/ui/dialog";
  
 
  const Modal = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-5 mb-14 mx-auto block" variant={"main"}>رژیم اختصاصی من</Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-2 py-3">
              <h5>لطفا فیلد های زیر را تکمیل کنید</h5>
            </DialogTitle>
          </DialogHeader>
          <p dir="rtl" className="text-center">
           
          </p>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default Modal;
  