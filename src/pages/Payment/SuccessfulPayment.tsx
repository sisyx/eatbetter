import { Button } from "../../components/shadcn/ui/button";
import { imageBase } from "../../config/constants";

export const SuccessFullPayment = () => {
    return (
        <div className="w-full h-screen">
            <div className="flex flex-col-reverse md:flex-row p-5 gap-4 items-center justify-center rounded-xl shadow-xl">
                <div className="flex-1 flex flex-col items-center gap-4 md:gap-8 md:ps-10 text-center">
                    <img className="w-16 md:w-32" src={`${imageBase}/success-payment-tick.png`} alt="" />
                    <span className="text-2xl md:text-5xl text-main font-extrabold">Your Payment Was Succeffult</span>
                    <span className="text-xl md:text-2xl text-mainHover font-bold">Thank You for your trust and that you choose us for your diet provider. hope you bests</span>
                    <Button className="bg-main hover:bg-mainHover">Go To Home</Button>
                </div>
                <div className="flex-1">
                    <video className="w-full" src={`${imageBase}/6o05ma251R8l6n914a.mp4`} muted autoPlay loop />
                </div>
            </div>
        </div>
    );
}
