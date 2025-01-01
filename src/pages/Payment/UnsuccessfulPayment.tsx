import { Link } from "react-router-dom";
import { Button } from "../../components/shadcn/ui/button";
import { imageBase } from "../../config/constants";
import { useTranslation } from "react-i18next";

const UnsuccessFullPayment = () => {
    const { t } = useTranslation();
    return (
        <div className="w-full h-screen">
            <div className="flex flex-col-reverse md:flex-row p-5 gap-4 items-center justify-center rounded-xl">
                <div className="flex-1 flex flex-col items-center gap-4 md:gap-8 md:ps-10 text-center">
                    <img className="w-16 md:w-32" src={`${imageBase}/failure-payment-tick.png`} alt="" />
                    <span className="text-2xl md:text-5xl font-extrabold">{t("payment.failureTitle")}</span>
                    <span className="text-xl md:text-2xl text-mainHover font-bold">{t("payment.failureDesc")}</span>
                    <Link to="/"><Button>{t("payment.goHome")}</Button></Link>
                </div>
                <div className="flex-1">
                    <video className="w-full" src={`${imageBase}/6o05ma251R8l6n914a.mp4`} muted autoPlay loop />
                </div>
            </div>
        </div>
    );
}

export default UnsuccessFullPayment