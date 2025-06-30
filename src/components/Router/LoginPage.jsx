import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/homepage");
  };
  return (
    <div >
      <form action=" " 
      className="container bg-dark align-items-center flex-column justify-content-center d-flex min-vh-100 text-white rounded-4"
      onSubmit={handleClick}
      >
        <label htmlFor="">Email or Phone</label>
        <input type="text" placeholder="Enter Email or Phone" required />
        <br />
        <label htmlFor="" required>Password</label>
        <input type="password" placeholder="Enter Password"/>
        <input type="submit" className="m-4 rounded-3 border-3" />
      </form>
    </div>
  );
}

export default LoginPage;
