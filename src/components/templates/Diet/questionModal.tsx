import { useTranslation } from "react-i18next";
import { Button } from "../../shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../shadcn/ui/dialog";
import { useEffect, useState } from "react";
import usePostData from "../../../hooks/usePostData";
import { authStore } from "../../../stores/auth";
import { ButtonLoader } from "../../modules/loader/Loader";
import Step2 from "./Step2";

const Modal = () => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
    neckCircumference: "",
    waistCircumference: "",
    hipCircumference: "",
    fitnessLevel: "",
    dietGoal: "",
    dietaryRestrictions: "",
    allergies: "",
    medicalConditions: "",
    foodPreferences: "",
    mealPrepTime: "",
    exerciseProgram: false,
    exerciseDuration: "",
    exerciseLimitations: "",
    supplements: false,
    supplementTypes: "",
    sleepDuration: "",
    stress: "",
    energyLevel: "",
    occupation: "",
    previousDiets: "",
  });
  const { userData } = authStore((state) => state);
   
  const { mutate: mutation, isPending } = usePostData<any>(
    `/api/UserQuestion/create-or-update/userId=${userData?.id}`,
    i18n.language === "fa"
      ? "اطلاعات شما با موفقیت ثبت شد"
      : "Your Info register successfully",
    false,
    (data) => {
      if (data.statusCode === 201) {
        setStep(2);
      } 
    },
    false,
    "auth",
  );

  useEffect(() => {
    if (userData?.id) {
      setStep(userData.questionBox ? 2 : 1);
    }
  }, [userData]);

  const step1ClickHandler = () => {
    const data = {
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      height: Number(formData.height),
      weight: Number(formData.weight),
      activityLevel: formData.activityLevel,
      neckCircumference: Number(formData.neckCircumference),
      waistCircumference: Number(formData.waistCircumference),
      hipCircumference: Number(formData.hipCircumference),
      fitnessLevel: formData.fitnessLevel,
      dietGoal: formData.dietGoal,
      dietaryRestrictions: formData.dietaryRestrictions,
      allergies: formData.allergies,
      medicalConditions: formData.medicalConditions,
      foodPreferences: formData.foodPreferences,
      mealPrepTime: formData.mealPrepTime,
      exerciseProgram: formData.exerciseProgram,
      exerciseDuration: formData.exerciseDuration,
      exerciseLimitations: formData.exerciseLimitations,
      supplements: formData.supplements,
      supplementTypes: formData.supplementTypes,
      sleepDuration: formData.sleepDuration,
      stress: formData.stress,
      energyLevel: formData.energyLevel,
      occupation: formData.occupation,
      previousDiets: formData.previousDiets,
    };
    mutation(data);
  };

  const handleInputChange = (field: string, value: any) => {
    console.log(value);
    console.log(field);

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-auto mb-14 mt-5 block" variant={"main"}>
          {t("dietsButtonOne")}
        </Button>
      </DialogTrigger>
      <DialogContent className={`w-full max-w-full !pr-0 md:!max-w-[725px]`}>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-2 py-3">
            {step === 1 ? (
              <>
                <h5>{t("modalTitle")}</h5>
                <p className="text-xs text-red-500">
                  {i18n.language === "fa"
                    ? "در صورتی که از قبل رژیم مخصوص خودتان را تهیه کردید و الان فعال هست، امکان تهیه دوباره رژیم نیست. برای دسترسی به رژیم خودان به پنل کاربری مراجعه کنید"
                    : "If you have already created your own diet and it is now active, it is not possible to create it again. To access your diet, please visit your user panel"}
                </p>
              </>
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
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa" ? "نام" : "Name"}
                  </p>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa" ? "سن" : "Age"}
                  </p>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa" ? "قد" : "Height"}
                  </p>
                  <input
                    type="number"
                    value={formData.height}
                    onChange={(e) =>
                      handleInputChange("height", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa" ? "وزن" : "Weight"}
                  </p>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) =>
                      handleInputChange("weight", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa" ? "دور گردن" : "Neck circumference"}
                  </p>
                  <input
                    type="number"
                    value={formData.neckCircumference}
                    onChange={(e) =>
                      handleInputChange("neckCircumference", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa" ? "دور کمر" : "Waist circumference"}
                  </p>
                  <input
                    type="number"
                    value={formData.waistCircumference}
                    onChange={(e) =>
                      handleInputChange("waistCircumference", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa" ? "دور باسن" : "Hip circumference"}
                  </p>
                  <input
                    type="number"
                    value={formData.hipCircumference}
                    onChange={(e) =>
                      handleInputChange("hipCircumference", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? "هدف از رژیم غذایی"
                      : "The purpose of the diet"}
                  </p>
                  <input
                    type="text"
                    value={formData.dietGoal}
                    onChange={(e) =>
                      handleInputChange("dietGoal", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? "محدودیت های غذایی"
                      : "Dietary restrictions"}
                  </p>
                  <input
                    type="text"
                    value={formData.dietaryRestrictions}
                    onChange={(e) =>
                      handleInputChange("dietaryRestrictions", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa" ? "آلرژی غذایی" : "Food allergies"}
                  </p>
                  <input
                    type="text"
                    value={formData.allergies}
                    onChange={(e) =>
                      handleInputChange("allergies", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? "شرایط پزشکی"
                      : "Medical conditions"}
                  </p>
                  <input
                    type="text"
                    value={formData.medicalConditions}
                    onChange={(e) =>
                      handleInputChange("medicalConditions", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? "ترجیحات غذایی"
                      : "Food preferences"}
                  </p>
                  <input
                    type="text"
                    value={formData.foodPreferences}
                    onChange={(e) =>
                      handleInputChange("foodPreferences", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? "زمان صرف شده برای آماده سازی غذا"
                      : "Time spent preparing food"}
                  </p>
                  <input
                    type="number"
                    value={formData.mealPrepTime}
                    onChange={(e) =>
                      handleInputChange("mealPrepTime", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 pl-12 text-sm outline-none"
                  />
                  <p
                    className={`${i18n.language === "fa" ? "left-2" : "right-2"} absolute top-3 text-xs text-main`}
                  >
                    {i18n.language === "fa" ? "ساعت" : "hour"}
                  </p>
                </div>

                <div className="relative mt-3 flex w-full items-center justify-center gap-2">
                  <p className="bg-white p-1 text-center text-xs">
                    {i18n.language === "fa" ? "ورزش روزانه" : "Daily exercise"}
                  </p>

                  <input
                    type="checkbox"
                    value={formData.exerciseProgram as any}
                    onChange={(e) =>
                      handleInputChange("exerciseProgram", e.target.checked)
                    }
                    className="rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div
                  className={`${formData.exerciseProgram ? "" : "pointer-events-none opacity-50"} relative mt-3 w-full`}
                >
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? "مدت زمان ورزش روزانه"
                      : "Daily exercise duration"}
                  </p>
                  <input
                    type="number"
                    value={formData.exerciseDuration}
                    onChange={(e) =>
                      handleInputChange("exerciseDuration", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 pl-12 text-sm outline-none"
                  />
                  <p
                    className={`${i18n.language === "fa" ? "left-2" : "right-2"} absolute top-3 text-xs text-main`}
                  >
                    {i18n.language === "fa" ? "ساعت" : "hour"}
                  </p>
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? "محدودیت های ورزشی"
                      : "Sports restrictions"}
                  </p>
                  <input
                    type="text"
                    value={formData.exerciseLimitations}
                    onChange={(e) =>
                      handleInputChange("exerciseLimitations", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? "انواع مکمل ها"
                      : "Types of supplements"}
                  </p>
                  <input
                    type="text"
                    value={formData.supplementTypes}
                    onChange={(e) =>
                      handleInputChange("supplementTypes", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? " مدت زمان خواب"
                      : "Sleep duration"}
                  </p>
                  <input
                    type="number"
                    value={formData.sleepDuration}
                    onChange={(e) =>
                      handleInputChange("sleepDuration", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 pl-12 text-sm outline-none"
                  />
                  <p
                    className={`${i18n.language === "fa" ? "left-2" : "right-2"} absolute top-3 text-xs text-main`}
                  >
                    {i18n.language === "fa" ? "ساعت" : "hour"}
                  </p>
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa" ? "شغل" : "Job"}
                  </p>
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) =>
                      handleInputChange("occupation", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    className="w-full rounded-md border border-main p-2 text-sm outline-none"
                  />
                </div>

                <div className="relative mt-3 w-full">
                  <p
                    className={`${i18n.language === "fa" ? "right-0" : "left-0"} absolute -top-4 bg-white p-1 text-xs`}
                  >
                    {i18n.language === "fa"
                      ? " رژیم های قبلی"
                      : "Previous diets"}
                  </p>
                  <input
                    type="text"
                    value={formData.previousDiets}
                    onChange={(e) =>
                      handleInputChange("previousDiets", e.target.value)
                    }
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
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
                    value={formData.supplements as any}
                    onChange={(e) =>
                      handleInputChange("supplements", e.target.checked)
                    }
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
                        onClick={() => handleInputChange("stress", true)}
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
                        onClick={() => handleInputChange("stress", false)}
                        name="nervous"
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mt-3 w-full">
                  <p className="bg-white p-1 text-center text-xs">
                    {i18n.language === "fa" ? "جنسیت" : "Gender"}
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "مرد" : "Male"}
                      </label>
                      <input
                        type="radio"
                        name="gender"
                        onClick={() => handleInputChange("gender", "male")}
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "زن" : "Female"}
                      </label>
                      <input
                        type="radio"
                        onClick={() => handleInputChange("gender", "female")}
                        name="gender"
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
                        onClick={() => handleInputChange("energyLevel", 10)}
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
                        onClick={() => handleInputChange("energyLevel", 5)}
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
                        onClick={() => handleInputChange("energyLevel", 1)}
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
                        onClick={() =>
                          handleInputChange(
                            "fitnessLevel",
                            i18n.language === "fa" ? "بالا" : "High",
                          )
                        }
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "متوسط" : "Medium"}
                      </label>
                      <input
                        type="radio"
                        onClick={() =>
                          handleInputChange(
                            "fitnessLevel",
                            i18n.language === "fa" ? "متوسط" : "Medium",
                          )
                        }
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
                        onClick={() =>
                          handleInputChange(
                            "fitnessLevel",
                            i18n.language === "fa" ? "پایین" : "Low",
                          )
                        }
                        className="w-full rounded-md border border-main p-2 text-sm outline-none"
                      />
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
                        onClick={() =>
                          handleInputChange(
                            "activityLevel",
                            i18n.language === "fa" ? " کار سنگین" : "Hard work",
                          )
                        }
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1 text-xs">
                      {i18n.language === "fa" ? "کار متوسط" : "Average work"}

                      <input
                        type="radio"
                        onClick={() =>
                          handleInputChange(
                            "activityLevel",
                            i18n.language === "fa"
                              ? "کار متوسط"
                              : "Average work",
                          )
                        }
                        name="work"
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1 text-xs">
                      {i18n.language === "fa"
                        ? "کار بدون تحرک"
                        : "Work without movement"}

                      <input
                        type="radio"
                        name="work"
                        onClick={() =>
                          handleInputChange(
                            "activityLevel",
                            i18n.language === "fa"
                              ? "کار بدون تحرک"
                              : "Work without movement",
                          )
                        }
                        className="rounded-md border border-main p-2 text-sm outline-none"
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
                      ? "سطح آمادگی جسمانی"
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
                        onClick={() =>
                          handleInputChange(
                            "fitnessLevel",
                            i18n.language === "fa" ? "بالا" : "High",
                          )
                        }
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
                        onClick={() =>
                          handleInputChange(
                            "fitnessLevel",
                            i18n.language === "fa" ? "متوسط" : "Medium",
                          )
                        }
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
                        onClick={() =>
                          handleInputChange(
                            "fitnessLevel",
                            i18n.language === "fa" ? "پایین" : "Low",
                          )
                        }
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
                        onClick={() =>
                          handleInputChange(
                            "activityLevel",
                            i18n.language === "fa" ? " کار سنگین" : "Hard work",
                          )
                        }
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa" ? "کار متوسط " : "Average work"}
                      </label>
                      <input
                        type="radio"
                        name="work"
                        onClick={() =>
                          handleInputChange(
                            "activityLevel",
                            i18n.language === "fa"
                              ? "کار متوسط "
                              : "Average work",
                          )
                        }
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                    <div className="flex gap-1">
                      <label className="text-xs">
                        {i18n.language === "fa"
                          ? "کار بدون تحرک"
                          : "Work without movement"}
                      </label>
                      <input
                        type="radio"
                        name="work"
                        onClick={() =>
                          handleInputChange(
                            "activityLevel",
                            i18n.language === "fa"
                              ? "کار بدون تحرک"
                              : "Work without movement",
                          )
                        }
                        className="rounded-md border border-main p-2 text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Step2 setStep={setStep} />
          )}

          {step === 1 && (
            <Button
              onClick={step1ClickHandler}
              className="mt-4 w-full"
              variant={"main"}
              disabled={
                formData.name.length == 0 ||
                formData.age.length == 0 ||
                formData.gender.length == 0 ||
                formData.height.length == 0 ||
                formData.weight.length == 0 ||
                formData.activityLevel.length == 0 ||
                formData.neckCircumference.length == 0 ||
                formData.waistCircumference.length == 0 ||
                formData.hipCircumference.length == 0 ||
                formData.fitnessLevel.length == 0 ||
                formData.dietGoal.length == 0 ||
                formData.dietaryRestrictions.length == 0 ||
                formData.allergies.length == 0 ||
                formData.medicalConditions.length == 0 ||
                formData.foodPreferences.length == 0 ||
                formData.mealPrepTime.length == 0 ||
                formData.exerciseLimitations.length == 0 ||
                formData.supplementTypes.length == 0 ||
                formData.sleepDuration.length == 0 ||
                formData.stress.length == 0 ||
                formData.energyLevel.length == 0 ||
                formData.occupation.length == 0 ||
                formData.previousDiets.length == 0
              }
            >
              {i18n.language === "fa" ? (
                isPending ? (
                  <ButtonLoader />
                ) : (
                  "ادامه"
                )
              ) : isPending ? (
                <ButtonLoader />
              ) : (
                "Next"
              )}
            </Button>
          )}
          {userData && userData.questionBox && step === 1 ? (
            <Button
              onClick={() => setStep(2)}
              className="mt-4 w-full"
              variant={"outline"}
            >
              {i18n.language === "fa"
                ? "صرف نظر از ویرایش"
                : "Regardless of editing"}
            </Button>
          ) : null}
        </main>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
