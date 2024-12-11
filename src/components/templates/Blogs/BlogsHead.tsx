import { imageBase } from "../../../config/constants";
import { Button } from "../../shadcn/ui/button";

const BlogsHead = () => {
    return (
        <div className="relative w-full p-5 md:p-20 flex justify-center h-screen">
            <div className="max-w-5xl flex items-center justify-center">
                <img src={`${imageBase}/144641330_10142427.jpg`} alt="BLOG HEAD IMAGE" />
            </div>
            <div className="absolute flex flex-col gap-8 p-5 md:p-20 text-gray-200 pb-32 bottom-0 left-0 right-0 bg-gradient-to-t from-[#000] to-transparent">
                <span className="text-2xl lg:text-5xl font-extrabold transition-all duration-300">help Youself Improve</span>
                <span className="text-3xl lg:text-7xl font-extrabold transition-all duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, rem?</span>
                <a href="#allblogs">
                    <Button className="w-full bg-main hover:bg-mainHover">Continue</Button>
                </a> 
            </div>
        </div>
    );
}

export default BlogsHead
