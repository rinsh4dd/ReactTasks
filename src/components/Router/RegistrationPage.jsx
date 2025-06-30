import React from "react";
function RegistrationPage() {
  return (
    <div className="container-fluid">
        <label htmlFor="">Email or phone</label>
        <input type="text" placeholder="Email or Phone" />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" />
    </div>
  );
}

export default RegistrationPage;
