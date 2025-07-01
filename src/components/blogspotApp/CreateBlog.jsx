import { useNavigate } from "react-router-dom";
import "./blogspot.css";

function CreateBlog() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/bloglist")
  }
  return (
    <div className="mainDiv">
      <form action="">
        <input type="text" placeholder="Enter Title" />
        <input type="text" placeholder="Blog" />
        <input type="Submit" onClick={handleClick} />
      </form>
    </div>
  );
}
export default CreateBlog;
