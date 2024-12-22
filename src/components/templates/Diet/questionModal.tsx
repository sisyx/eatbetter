import { useTranslation } from "react-i18next";
import { Button } from "../../shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../shadcn/ui/dialog";
import { useState } from "react";

const Modal = () => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(2);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-auto mb-14 mt-5 block" variant={"main"}>
          {t("dietsButtonOne")}
        </Button>
      </DialogTrigger>
      <DialogContent className={`w-full max-w-full !pr-0 md:!max-w-[725px]`}>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 py-3">
            {step === 1 ? (
              <h5>{t("modalTitle")}</h5>
            ) : (
              <h5>{t("modalStep2Title")}</h5>
            )}
          </DialogTitle>
        </DialogHeader>
        <main
          className={`${step === 1 ? "h-[500px]" : "h-full"} overflow-y-scroll pr-4`}
        >
          {step === 1 ? (
            <>
              <div
                dir="rtl"
                className="grid grid-cols-[1fr,1fr] gap-3 text-center xs:grid-cols-[1fr,1fr] sm:grid-cols-[1fr,1fr,1fr]"
              >
                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa" ? "نام" : "Name"}
                  </p>
                  <input
                    type="text"
                    placeholder="علی"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa" ? "قد" : "Height"}
                  </p>
                  <input
                    type="number"
                    placeholder="170"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa" ? "وزن" : "Weight"}
                  </p>
                  <input
                    type="number"
                    placeholder="75"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa" ? "دور گردن" : "Neck circumference"}
                  </p>
                  <input
                    type="number"
                    placeholder="50"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa" ? "دور کمر" : "Waist circumference"}
                  </p>
                  <input
                    type="number"
                    placeholder="50"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa" ? "دور باسن" : "Hip circumference"}
                  </p>
                  <input
                    type="number"
                    placeholder="50"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? "هدف از رژیم غذایی"
                      : "The purpose of the diet"}
                  </p>
                  <input
                    type="text"
                    placeholder="لاغری"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? "محدودیت های غذایی"
                      : "Dietary restrictions"}
                  </p>
                  <input
                    type="text"
                    placeholder="سبزی"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa" ? "آلرژی غذایی" : "Food allergies"}
                  </p>
                  <input
                    type="text"
                    placeholder="سبزی"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? "شرایط پزشکی"
                      : "Medical conditions"}
                  </p>
                  <input
                    type="text"
                    placeholder="علی"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? "ترجیحات غذایی"
                      : "Food preferences"}
                  </p>
                  <input
                    type="text"
                    placeholder="گوشت"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? "زمان صرف شده برای آماده سازی غذا"
                      : "Time spent preparing food"}
                  </p>
                  <input
                    type="number"
                    placeholder="12"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 flex w-full items-center justify-center gap-2">
                  <p className="bg-white p-1 text-center text-xs">
                    {i18n.language === "fa" ? "ورزش روزانه" : "Daily exercise"}
                  </p>

                  <input
                    type="checkbox"
                    className="rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? "مدت زمان ورزش روزانه"
                      : "Daily exercise duration"}
                  </p>
                  <input
                    type="number"
                    placeholder="12"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? "محدودیت های ورزشی"
                      : "Sports restrictions"}
                  </p>
                  <input
                    type="text"
                    placeholder="ندارم"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? "انواع مکمل ها"
                      : "Types of supplements"}
                  </p>
                  <input
                    type="text"
                    placeholder="کراتین"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? " مدت زمان خواب"
                      : "Sleep duration"}
                  </p>
                  <input
                    type="number"
                    placeholder="12"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa" ? "شغل" : "Job"}
                  </p>
                  <input
                    type="text"
                    placeholder="معلم"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p className="absolute -top-4 right-0 bg-white p-1 text-xs">
                    {i18n.language === "fa"
                      ? " رژیم های قبلی"
                      : "Previous diets"}
                  </p>
                  <input
                    type="text"
                    placeholder="ندارد"
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>
                <div className="relative mt-3 flex w-full items-center justify-center gap-2">
                  <p className="bg-white p-1 text-center text-xs">
                    {i18n.language === "fa"
                      ? "استفاده از مکمل های غذایی"
                      : "Use of dietary supplements"}
                  </p>

                  <input
                    type="checkbox"
                    className="rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[1fr] gap-3 text-center xs:grid-cols-[1fr,1fr] md:grid-cols-[1fr,1fr,1fr]">
                <div className="relative mt-3 w-full">
                  <p className="bg-white p-1 text-center text-xs">
                    {i18n.language === "fa"
                      ? "استرس یا ناراحتی روانی"
                      : "Stress or mental distress"}
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "دارم" : "I have"}
                      </label>
                      <input
                        type="radio"
                        name="nervous"
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "ندارم" : "I dont have"}
                      </label>
                      <input
                        type="radio"
                        name="nervous"
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mt-3 w-full">
                  <p className="bg-white p-1 text-center text-xs">
                    {i18n.language === "fa" ? "سطح انرژی" : "Energy level"}
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "بالا" : "High"}
                      </label>
                      <input
                        type="radio"
                        name="energi"
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "متوسط" : "Medium"}
                      </label>
                      <input
                        type="radio"
                        name="energi"
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "پایین" : "Low"}
                      </label>
                      <input
                        type="radio"
                        name="energi"
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mt-3 hidden w-full md:block">
                  <p className="bg-white p-1 text-center text-xs">
                    {i18n.language === "fa"
                      ? " سطح آمادگی جسمانی"
                      : "Physical fitness level"}
                  </p>

                  <div className="flex justify-center gap-3">
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "بالا" : "High"}
                      </label>
                      <input
                        type="radio"
                        name="amadegi"
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "متوسط" : "Medium"}
                      </label>
                      <input
                        type="radio"
                        name="amadegi"
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "پایین" : "Low"}
                      </label>
                      <input
                        type="radio"
                        name="amadegi"
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 xs:flex-row md:hidden">
                <div className="relative mt-3 w-full">
                  <p className="bg-white p-1 text-center text-xs">
                    {" "}
                    {i18n.language === "fa"
                      ? " سطح آمادگی جسمانی"
                      : "Physical fitness level"}
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "بالا" : "High"}
                      </label>
                      <input
                        type="radio"
                        name="amadegi"
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "متوسط" : "Medium"}
                      </label>
                      <input
                        type="radio"
                        name="amadegi"
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "پایین" : "Low"}
                      </label>
                      <input
                        type="radio"
                        name="amadegi"
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mt-3 w-full">
                  <p className="bg-white p-1 text-center text-xs">
                    {" "}
                    {i18n.language === "fa" ? "سطح فعالیت" : "Activity level"}
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? " کار سنگین" : "Hard work"}
                      </label>
                      <input
                        type="radio"
                        name="work"
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa"
                          ? "   کار متوسط "
                          : "Average work"}
                      </label>
                      <input
                        type="radio"
                        name="work"
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa"
                          ? "  کار بدون تحرک "
                          : "Work without movement"}
                      </label>
                      <input
                        type="radio"
                        name="work"
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-3 hidden w-full md:block">
                <p className="bg-white p-1 text-center text-xs">
                  {" "}
                  {i18n.language === "fa" ? "سطح فعالیت" : "Activity level"}
                </p>
                <div className="flex justify-center gap-3">
                  <div className="flex gap-1 text-xs">
                    {i18n.language === "fa" ? " کار سنگین" : "Hard work"}

                    <input
                      type="radio"
                      name="work"
                      className="rounded-md border border-main p-2 text-sm outline-none"
                    />
                  </div>
                  <div className="flex gap-1 text-xs">
                    {i18n.language === "fa" ? "   کار متوسط " : "Average work"}

                    <input
                      type="radio"
                      name="work"
                      className="rounded-md border border-main p-2 text-sm outline-none"
                    />
                  </div>
                  <div className="flex gap-1 text-xs">
                    {i18n.language === "fa"
                      ? "  کار بدون تحرک "
                      : "Work without movement"}

                    <input
                      type="radio"
                      name="work"
                      className="rounded-md border border-main p-2 text-sm outline-none"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>
              <select
                className="w-full rounded-md border border-main p-2"
                dir="rtl"
                name=""
                id=""
              >
                <option value="لاغری">لاغری</option>
                <option value="لاغری">لاغری</option>
                <option value="لاغری">لاغری</option>
                <option value="لاغری">لاغری</option>
                <option value="لاغری">لاغری</option>
              </select>
            </div>
          )}

          <Button
            onClick={() => setStep(2)}
            className="mt-4 w-full"
            variant={"main"}
          >
            {step === 2
              ? i18n.language === "fa"
                ? "ثبت"
                : "Submiy"
              : i18n.language === "fa"
                ? "ادامه"
                : "Next"}
          </Button>
          {step === 2 && (
            <Button
              onClick={() => setStep(1)}
              className="mt-4 w-full"
              variant={"outline"}
            >
              {i18n.language === "fa" ? "مرحله قبل" : "Previous step"}
            </Button>
          )}
        </main>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
