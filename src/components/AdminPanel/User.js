import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <div className="row p-3">
        <div>
          <h1 className="text-center text-white p-2">Kullanıcı Listesi</h1>
        </div>
        <table>
          <div>
            <div className="row p-3">
              <div className="col">
                <h5 className="text-white">İsim Soyisim</h5>
              </div>
              <div className="col">
                <h5 className="text-white">Kullanıcı Adı</h5>
              </div>
              <div className="col">
                <h5 className="text-white">Mail Adresi</h5>
              </div>
              <div className="col">
                <h5 className="text-white">Sektör</h5>
              </div>
              <div className="col">
                <h5 className="text-white">Engelle</h5>
              </div>
            </div>
          </div>
          <tbody>
            {this.state.users.map((n) => (
              <tr key={n.id}>
                <div className="row p-3">
                  <div className="col">
                    <td className="text-white">{n.name}</td>
                  </div>
                  <div className="col">
                    <td className="text-white">{n.username}</td>
                  </div>
                  <div className="col">
                    <td className="text-white">{n.email}</td>
                  </div>
                  <div className="col">
                    <td className="text-white">{n.website}</td>
                  </div>
                  <div className="col">
                    <button 
                    className="justify-content-center"
                    src="blocked.png"
                    style={{ width: "5rem" }}>
                    </button>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
