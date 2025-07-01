import ChangeTheme from "./components/ChangeTheme";
import Apifetch from "./components/Fetch";
import Task from "./components/MachineTask";
import RegistrationPage from "./components/Router/RegistrationPage";
import LoginPage from "./components/Router/LoginPage";
import HomePage from "./components/Router/HomePage";
import OddOrEven from "./components/OddOrEven/task2";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/blogspotApp/NotFound";
import BlogsList from "./components/blogspotApp/BlogsList";
import CreateBlog from "./components/blogspotApp/CreateBlog";
import BlogDetails from "./components/blogspotApp/BlogDetails";
function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    {
      /* task one */
    },
    {
      /* <ChangeTheme></ChangeTheme> */
    },
    {
      /* <Apifetch></Apifetch> */
    },
    {
      /* <Task></Task> */
    },
    {
      /* Router Task */
    },
    {
      /* <Router>
        <Routes>
          <Route path="/homepage" element={<HomePage/>}></Route>
          <Route path="/" element={<RegistrationPage/>}/>
          <Route path="/loginpage" element={<LoginPage/>}/>
        </Routes>
      </Router> */
    },
    (
      // odd or even task

      // <OddOrEven/>

      // {/* blogspotApp */}
      <Router>
        <Routes>
          <Route>
            <Route
              path="/"
              element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />}
            />
            <Route path="/bloglist" element={<BlogsList blogs={blogs} />} />
            <Route path="/blogdetails/:id" element={<BlogDetails blogs={blogs} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    )
  );
}
export default App;
