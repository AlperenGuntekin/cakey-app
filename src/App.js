import "./App.css";
import Login from "./components/pages/Login";
import { Link } from "react-router-dom";
import Appointment from "./components/pages/Appointment";
import Resume from "./components/pages/Resume";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import Linkedin from "./components/pages/Linkedin";
import User from "./components/AdminPanel/User";
import Settings from "./components/pages/Settings";

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
                <Link 
                className="nav-link text-white"
                to="/home">Cakey</Link>
                <Link 
                className="nav-link text-white"
                to="/appointment">Randevu Al</Link>
                <Link 
                className="nav-link text-white"
                to="/resume">Özgeçmiş İncelet</Link>
                <Link 
                className="nav-link text-white"
                to="/settings">Ayarlar</Link>
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
        <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
