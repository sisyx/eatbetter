import Container from "../../components/modules/Container/Container";
import BlogSample from "../../components/templates/Blogs/BlogSample";

const Blogs = () => {
    return(
        <Container>
            <div aos-data="fade-up" className="px-12 pt-14 max-sm:px-5 max-sm:pt-1 sm:!mb-44 lg:!px-28">
                <div className="flex flex-col gap-16">
                    {[1,2,3,4,5,6].map(_x => <BlogSample />)}
                </div>
            </div>
        </Container>
    )
}

export default Blogs