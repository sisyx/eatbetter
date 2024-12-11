import Container from "../../components/modules/Container/Container";
import BlogsContainer from "../../components/templates/Blogs/BlogsContainer";
import BlogsHead from "../../components/templates/Blogs/BlogsHead";

const Blogs = () => {
    return(
        <Container>
            <BlogsHead />
            <BlogsContainer />
        </Container>
    )
}

export default Blogs