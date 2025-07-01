import { useState } from "react";

function Task() {
  const [text, setText] = useState("");
  const [screen, setScreen] = useState("");
  const handleChanges = (e) => {
    setText(e.target.value);
  };
  const Perform = () => {
 
    if ((text.toLowerCase()==="rinshad")) {
      setScreen(`My Name is ${text.toUpperCase()}`);
      setText("")
    }else if(text.trim()==""){
      alert("enter a value")
    }else {
      setScreen("Name is wrong");
      setText("")
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "150px",
        }}
      >
        <input
          style={{
            borderRadius: "30px",
            height: "30px",
            width: "300px",
            border: "3px solid black",
            padding: "10px",
            fontSize: "15px",
          }}
          type="text"
          placeholder="Enter Your name"
          value={text}
          onChange={handleChanges}
        />
        <button 
          style={{
            margin: "30px",
            height: "40px",
            width: "100px",
            border: "3px solid Black",
            borderRadius: "20px",
            fontWeight: "800px",
          }}
          onClick={Perform}
        >
          CLICK
        </button>

        <div
          style={{
            width: "350px",
            height: "50px",
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "35px",
            color: "black",

            fontSize: "18px",
            border: "5px solid black",
          }}
        >
          {screen}
        </div>
        <p>//enter rinshad to get out</p>
      </div>
    </>
  );
}
export default Task;
