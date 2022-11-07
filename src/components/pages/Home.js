import { Data } from "../Data";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Home.css";
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  render() {
    return (
      <div className="">
      <CardGroup>
        <Card 
        className="Card m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img className="card-image" variant="top" src="resume.svg" />
          <Card.Body>
            <Card.Title className="text-white">Özgeçmiş İnceleme</Card.Title>
            <a className="nav-link text-white" href="#ozgecmis">Göz At</a>
          </Card.Body>
        </Card>
        <Card 
        className="Card m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img className="card-image" variant="top" src="interview.svg" />
          <Card.Body>
            <Card.Title className="text-white">Mülakat Simülasyonu</Card.Title>
            <a className="nav-link text-white" href="#mulakat">Göz At</a>
          </Card.Body>
        </Card>
        <Card 
        className="Card m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img className="card-image" variant="top" src="linkedin.svg" />
          <Card.Body>
            <Card.Title className="text-white">Linkedin İnceleme</Card.Title>
            <a className="nav-link text-white" href="#linkedin">Göz At</a>
          </Card.Body>
        </Card>
        </CardGroup>
        
        <h1 
        id="ozgecmis"
        className="home-title text-center mt-2 text-white">Özgeçmiş İnceleme</h1>
        <CardGroup>
        <Card
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img className="card-image" variant="top" src={Data.Data1.profile} />
          <Card.Body>
            <Card.Title>{Data.Data1.username}</Card.Title>
            <Card.Text>
            {Data.Data1.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data2.profile} />
          <Card.Body>
            <Card.Title>{Data.Data2.username}</Card.Title>
            <Card.Text>
            {Data.Data2.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data3.profile} />
          <Card.Body>
            <Card.Title>{Data.Data3.username}</Card.Title>
            <Card.Text>
            {Data.Data3.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data4.profile} />
          <Card.Body>
            <Card.Title>{Data.Data4.username}</Card.Title>
            <Card.Text>
            {Data.Data4.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        </CardGroup>
        
        <h1
        id="mulakat" 
        className="home-title text-center mt-2 text-white">Mülakat Simülasyonu</h1>
        <CardGroup>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data1.profile} />
          <Card.Body>
            <Card.Title>{Data.Data1.username}</Card.Title>
            <Card.Text>
            {Data.Data1.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data2.profile} />
          <Card.Body>
            <Card.Title>{Data.Data2.username}</Card.Title>
            <Card.Text>
            {Data.Data2.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data3.profile} />
          <Card.Body>
            <Card.Title>{Data.Data3.username}</Card.Title>
            <Card.Text>
            {Data.Data3.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data4.profile} />
          <Card.Body>
            <Card.Title>{Data.Data4.username}</Card.Title>
            <Card.Text>
            {Data.Data4.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        </CardGroup>
        
        <h1 
        id="linkedin" 
        className="home-title text-center mt-2 text-white">Linkedin İnceleme</h1>
        <CardGroup>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data1.profile} />
          <Card.Body>
            <Card.Title>{Data.Data1.username}</Card.Title>
            <Card.Text>
            {Data.Data1.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data2.profile} />
          <Card.Body>
            <Card.Title>{Data.Data2.username}</Card.Title>
            <Card.Text>
            {Data.Data2.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data3.profile} />
          <Card.Body>
            <Card.Title>{Data.Data3.username}</Card.Title>
            <Card.Text>
            {Data.Data3.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
        <Card 
        className="m-5 text-center"
        style={{ width: "16rem" }}>
          <Card.Img variant="top" src={Data.Data4.profile} />
          <Card.Body>
            <Card.Title>{Data.Data4.username}</Card.Title>
            <Card.Text>
            {Data.Data4.job}
            </Card.Text>
            <Link to="/profile">Göz At</Link>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    );
  }
}

export default App;
