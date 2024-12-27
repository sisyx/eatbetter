import { useTranslation } from "react-i18next"
import { Button } from "../../../shadcn/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../shadcn/ui/dialog"
import { TrainingType } from "../../../../types/trainings"

type PropsType = TrainingType;

const CardDetail = (props: PropsType) => {
    const { activity, musclesBenefited, appearanceBenefits, suitableFor, notSuitableFor, howToDo, caloriesBurned } = props
    const { t, i18n } = useTranslation();
    const { language } = i18n
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-full">
                    <Button className="block w-full">{t("trainings.showDetail")}</Button>
                </div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-full sm:!max-w-[425px]">
                <DialogHeader>
                <DialogTitle className="flex items-center justify-center gap-2 py-3">
                    <h5>{activity}</h5>
                    <div className="h-2 w-2 rounded-xl bg-main">
                        <div className="h-2 w-2 animate-ping rounded-xl bg-mainHover"></div>
                    </div>
                </DialogTitle>
                </DialogHeader>
                <div dir={language === "fa" ? "rtl" : "ltr"} className="max-h-[70vh] overflow-y-scroll">
                    <div className="py-2">
                        <span className="font-extrabold">{t("trainings.suitableFor")}:</span>{" "}
                        <span>{suitableFor}</span>
                    </div>
                    <div className="py-2">
                        <span className="font-extrabold">{t("trainings.notSuitableFor")}:</span>{" "}
                        <span>{notSuitableFor}</span>
                    </div>
                    <div className="py-2">
                        <span className="font-extrabold">{t("trainings.muscleBenefits")}:</span>{" "}
                        <span>{musclesBenefited}</span>
                    </div>
                    <div className="py-2">
                        <span className="font-extrabold">{t("trainings.apearanceBenefits")}:</span>{" "}
                        <span>{appearanceBenefits}</span>
                    </div>
                    <div className="py-2">
                        <span className="font-extrabold">{t("trainings.howToDo")}:</span>{" "}
                        <span>{howToDo}</span>
                    </div>
                    <div className="py-2">
                        <span className="font-extrabold">{t("trainings.caloriesBurned")}:</span>{" "}
                        <span>{caloriesBurned}</span>
                    </div>
                </div>
            </DialogContent>
            </Dialog>
    )
}

export default CardDetail;