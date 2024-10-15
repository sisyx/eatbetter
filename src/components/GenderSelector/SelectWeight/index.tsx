import { useState } from "react";


export default function SelectWeight() {
    const [weight, setWeight] = useState<number>(0);
    return (
        <div className="flex flex-col items-center justify-center gap-5 w-[150px] h-[150px] bg-white shadow-xl rounded-lg max-sm:w-[100%]">
            <p className="bg-white">وزن (kg)</p>
            <div className="flex items-center space-x-4 bg-white">
                <button
                    onClick={() => setWeight(weight > 1 ? weight - 1 : weight)}
                    className="p-2 rounded-full text-lg bg-main hover:bg-mainHover transition-all"
                >
                    -
                </button>
                <span className="font-bold text-xl bg-white">{weight}</span>
                <button
                    onClick={() => setWeight(weight + 1)}
                    className="p-2 rounded-full text-lg bg-main hover:bg-mainHover transition-all"
                >
                    +
                </button>
            </div>
        </div>
    )
}
