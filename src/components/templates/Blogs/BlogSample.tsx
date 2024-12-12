import { Link } from "react-router-dom";
import { Button } from "../../shadcn/ui/button";
import { useTranslation } from "react-i18next";

const BlogSample = (props: any) => {
    const { i18n } = useTranslation();
    const { language } = i18n;

    return (
        <div dir={language === "fa" ? "rtl" : "ltr"} className="w-full flex flex-col md:flex-row">
            <img src="/images/15128913_ODcyMjQ5OTkx.jpg" className="max-h-96" />
            <div className="flex flex-col justify-center gap-8 items-start">
                <div className="flex flex-col items-start">
                    <span className="text-2xl font-bold">{language === "fa" ? "عنوان بلاگ"  : "BlogSample Title"}</span>
                    <span className="text-justify leading-7 tracking-wide">
                        {
                            language === "fa" ? "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی "
                            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius commodi nisi dolorem ratione, adipisci perferendis dolor voluptate alias? Sunt eaque voluptate nesciunt, quae id earum animi consectetur eos fugit aut quidem rerum, nulla sit ullam doloremque modi. Nisi vitae reiciendis eaque numquam tenetur aspernatur maxime sunt praesentium. Et amet quaerat neque tempore a vero magni ipsa quam qui. Reiciendis placeat minima natus quasi nisi sit illum maiores animi est, aliquid laboriosam itaque quidem ab inventore eaque excepturi dolor ratione expedita eligendi? Impedit eveniet dignissimos ex? Temporibus, consectetur sed a illo et inventore rem, ipsam totam quia, nostrum architecto. Architecto?"
                        }
                    </span>
                </div>
                <Link to="/blog">
                <Button className="bg-main">
                    {
                        language === "fa" ? "ادامه خواندن" : "Continue Reading"
                    }
                </Button>
                </Link>
            </div>
        </div>
    );
}

export default BlogSample