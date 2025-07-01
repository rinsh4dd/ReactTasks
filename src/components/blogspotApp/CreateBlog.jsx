import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./blogspot.css";

function CreateBlog({blogs,setBlogs}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title: title,
      body: body,
    };
    setBlogs([...blogs, newBlog]);
    navigate("/bloglist");
  }
  return (
    <div  className="mainDiv">
      <div className="child-div">
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea name="title" value={body} onChange={(e)=>setBody(e.target.value)} id=""></textarea>
        <input type="Submit"/>
      </form>
    </div>
    </div>
  );
}
export default CreateBlog;
