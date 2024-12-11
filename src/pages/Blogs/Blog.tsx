import { useTranslation } from "react-i18next";
import Container from "../../components/modules/Container/Container";

export const Blog = () => {
    const { i18n } = useTranslation();
    const { language } = i18n;

    return (
        <Container>
            <div dir={language === "fa" ? "rtl" : "ltr"} className="flex flex-col items-center gap-8 px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28">
                <div className="max-w-2xl aspect-video" >
                    <img className="w-full h-full object-cover object-center" src="/images/15128913_ODcyMjQ5OTkx.jpg" alt="blog image" />
                </div>
                <span className="text-2xl font-bold text-center">Blog Title</span>
                <span className="md:w-2/3 md:text-xl md:text-justify leading-10 tracking-wider">
                {
                    language === "fa" ? "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit rem, culpa quaerat voluptatum vel? Consectetur reprehenderit veritatis esse atque eligendi architecto, placeat beatae, rerum aspernatur suscipit adipisci dolore itaque, quo minima deserunt assumenda iusto distinctio fugit qui nam perferendis ipsum magni. Dicta officiis, laudantium odio temporibus, molestias eius animi debitis itaque sed optio id quas porro velit iste at doloribus eaque veniam obcaecati asperiores unde totam saepe sunt quidem nihil? Sint suscipit eius, quidem fuga ad ex adipisci tempora cupiditate mollitia dolorem voluptas accusamus cum voluptatibus dicta ea est corrupti enim repudiandae. Voluptatem saepe accusantium asperiores architecto id accusamus nobis rerum eaque deleniti? Ipsa ea totam dolor id explicabo ut nihil ratione quasi incidunt, provident dolores vel sapiente cum recusandae placeat repellendus corrupti repudiandae consequuntur modi sequi. Possimus blanditiis eligendi eveniet, adipisci amet reiciendis nesciunt recusandae dolorum deleniti, corrupti tempore fugit maxime, sequi rem explicabo velit nulla. Qui amet harum iste! Vitae laboriosam quam eveniet cum quasi non quaerat asperiores harum animi maiores accusantium adipisci aspernatur reprehenderit, possimus fugit incidunt iure expedita tempore at illum veritatis, voluptatem magnam officiis? Minus asperiores odit fugit rem amet corporis! Culpa, aut pariatur iusto omnis dolorem vero quisquam tenetur reiciendis, nam debitis sunt."
                }
                </span>
            </div>
        </Container>
    );
}
