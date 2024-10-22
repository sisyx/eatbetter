import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../shadcn/ui/dialog";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Button } from "../../../../shadcn/ui/button";
type Props = {};

const Modal = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSaveDate = () => {
    console.log("تاریخ ذخیره‌شده:", selectedDate);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer px-3 py-1 text-sm text-white">
          همین الان دوره رو شروع کنید
        </p>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            <h5> رژیم شماره سوم</h5>
            <div className="h-2 w-2 rounded-xl bg-main">
              <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div dir="rtl" className="flex items-center justify-center gap-3">
          <p>تاریخ شروع:</p>
          <DatePicker
            value={selectedDate}
            onChange={setSelectedDate as any}
            calendar={persian}
            locale={persian_fa}
            hideOnScroll
            editable={false}
            className="p-3"
            calendarPosition="bottom-left"
          />
        </div>
        <p dir="rtl" className="text-center text-xs">
          تاریخ پایان 23 روز بعد از تاریخ ثبت شروع دوره می باشد.
        </p>
        <Button variant={"main"} onClick={handleSaveDate}>
          ذخیره تاریخ
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
