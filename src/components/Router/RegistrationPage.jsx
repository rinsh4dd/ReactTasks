import { useNavigate } from "react-router-dom";
function RegistrationPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="container  bg-dark d-flex flex-column align-items-center justify-content-center text-white min-vh-100 rounded-5"
      >
        <h1 className="mb-5">Registration Page</h1>

        <label htmlFor="">Email or phone</label>
        <input
          className="w-75"
          type="text"
          placeholder="Email or Phone"
          required
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          className="w-75 h-75"
          type="password"
          placeholder="Enter Password"
          required
        />
        <label htmlFor="">Confirm Password</label>
        <input
          className="w-75 h-75 mt-4"
          type="password"
          placeholder="Re-Enter Password"
          required
        />
        <input type="submit" className="mt-3 rounded-2 " />
      </form>
    </div>
  );
}

export default RegistrationPage;
