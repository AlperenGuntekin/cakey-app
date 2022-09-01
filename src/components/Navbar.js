import "../App.css";

function Navbar() {

  return (
    
    <div className="App">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a 
        className="navbar-brand" 
        href="#">
        <img 
        style={{ width: "9rem" }}
        src="cakey-logo.png">
        </img>
        </a>
        <div className="text-right" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-white" aria-current="page" href="#cakey">Cakey</a>
            <a className="nav-link text-white" href="#problem">Randevu Al</a>
            <a className="nav-link text-white" href="#problem">Özgeçmiş İncelet</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
