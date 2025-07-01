import React from "react";
import { Link } from "react-router-dom";
function BlogsList({ blogs }) {
  return (
    <>
    <div className="list-head">
      <h1>BLOG LISTS</h1>
       </div>
      <div className="bloglist">
      {blogs.map((e) => (
        <div className="blog-keys" key={e.id}>
          <h2>{e.title}</h2>
           <p>{e.body}</p>
          <Link className="readMore" to={`/blogdetails/${e.id}`}>Read More</Link>
         
        </div>
      ))}
    </div>
   </>
  );
}   
export default BlogsList;
