import { useParams } from "react-router-dom";



function BlogDetails({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="details-main">
        
    <div className="details">
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
    </div>
  );
}
export default BlogDetails