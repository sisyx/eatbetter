import { useState } from "react";


export default function ElectionMay() {
    const [height, setHeight] = useState<number>(0);
    return (
        <div className="mb-0 w-[315px] ">
            <p className="mb-2">قد خود را انتخاب کنید (اینچ)</p>
            <input
                type="range"
                min="100"
                max="220"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full"
            />
            <span className="block text-center text-lg mt-2">{height} قد</span>
        </div>
    )
}
