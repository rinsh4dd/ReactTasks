import React, { useState } from "react";

function OddOrEven() {
  const [value, setValue] = useState("");
  const [screen, setScreen] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
    setScreen("")
    console.log(value);
  }

  function handleClick() {
    if (value.trim() == "") {
      setScreen("Enter a value");
      return;
    }
    const num = Number(value);

    if (num !== Number(num)) {
      setScreen("Enter a valid number");
      setValue("");
      return;
    }
    {
      if (num % 2 == 0) {
        setScreen("Number is Even");
        setValue("");
      } else {
        setScreen("Number is Odd");
        setValue("");
      }
    }
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          marginBottom: "20px",
          background: "aqua",
          padding: "50px",
          border: "3px solid white",
          borderRadius: "12px",
        }}
      >
        <form action="">
          <input
            type="text"
            placeholder="Enter a Number"
            onChange={handleChange}
            value={value}
            style={{
              padding: "10px",
              border: "3px solid black",
              borderRadius: "8px",
            }}
          />
          <input
            onClick={handleClick}
            style={{ padding: "10px", marginLeft: "20px",border:"3px solid black"}}
            type="button"
            value="Submit"
            required
          />
        </form>

        <div
          style={{
            width: "150px",
            height: "45px",
            background: "white",
            marginTop: "10px",
            borderRadius: "12px",
            border: "3px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          {screen}
        </div>
      </div>
    </div>
  );
}

export default OddOrEven;
