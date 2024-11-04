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
import { useTranslation } from "react-i18next";
type Props = {};

const Modal = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { i18n, t } = useTranslation();

  const handleSaveDate = () => {
    console.log("تاریخ ذخیره‌شده:", selectedDate);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer px-3 py-1 text-sm text-white">
          {t("health.note")}
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
        <div dir="rtl" className={`${i18n.language === 'fa' ? '' : 'flex-row-reverse'} flex items-center justify-center gap-3 `}>
          <p> {t("health.start")}</p>
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
          {t("health.noteTwo")}
        </p>
        <Button variant={"main"} onClick={handleSaveDate}>
          {t("health.submit")}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
