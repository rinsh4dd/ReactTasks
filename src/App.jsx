import ChangeTheme from "./components/ChangeTheme";
import Apifetch from "./components/Fetch";
import Task from "./components/MachineTask";
import RegistrationPage from "./components/Router/RegistrationPage";
import LoginPage from "./components/Router/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Router/HomePage";
function App() {
  return (
    <>


      {/* task one */}
      {/* <ChangeTheme></ChangeTheme> */}
      {/* <Apifetch></Apifetch> */}
      {/* <Task></Task> */}



      {/* Router Task */}
      {/* <Router>
        <Routes>
          <Route path="/homepage" element={<HomePage/>}></Route>
          <Route path="/" element={<RegistrationPage/>}/>
          <Route path="/loginpage" element={<LoginPage/>}/>
        </Routes>
      </Router> */}


    {/* blogspotApp */}
    

    </>
  );
}
export default App;
