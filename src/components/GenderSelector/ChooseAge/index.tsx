import  { useState } from 'react'

export default function ChooseAge() {
    const [age, setAge] = useState<number>(0);
    return (
        <div className="flex flex-col items-center justify-center gap-3 w-[150px] h-[150px] max-sm:w-[100%] bg-white shadow-xl rounded-lg">
            <p className="bg-white">سن</p>
            <div className="flex items-center space-x-4 bg-white">
                <button
                    onClick={() => setAge(age > 1 ? age - 1 : age)}
                    className="p-2 rounded-full text-lg bg-main hover:bg-mainHover  transition-all"
                >
                    -
                </button>
                <span className="font-bold text-xl bg-white  ">{age}</span>
                <button
                    onClick={() => setAge(age + 1)}
                    className="p-2 rounded-full text-lg bg-main hover:bg-mainHover transition-all"
                >
                    +
                </button>
            </div>
        </div>
    )
}
