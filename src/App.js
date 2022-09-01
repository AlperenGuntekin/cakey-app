import "./App.css";
import Login from "./components/pages/Login";
import Appointment from "./components/pages/Appointment";
import Resume from "./components/pages/Resume";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import Linkedin from "./components/pages/Linkedin";
import User from "./components/AdminPanel/User";

function App() {


  return (
    <div className="App">
      <div className="App">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img style={{ width: "9rem" }} src="cakey-logo.png"></img>
            </a>
            <div className="text-right" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#cakey"
                >
                  Cakey
                </a>
                <a className="nav-link text-white" href="#problem">
                  Randevu Al
                </a>
                <a className="nav-link text-white" href="#problem">
                  Özgeçmiş İncelet
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/linkedin" element={<Linkedin />} />
        <Route path="/admin" element={<User />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
