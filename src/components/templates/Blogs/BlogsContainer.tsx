import BlogSample from "./BlogSample";

const BlogsContainer = () => {
    return (
        <div id="allblogs" className="grid sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5 md:p-10 p-5 w-full">
            {[1,2,3,4,5,6,1,2,3,4,5,6,].map((_x, index) => <BlogSample key={`blog-sample${index}`} />)}
        </div>
    );
}

export default BlogsContainer;