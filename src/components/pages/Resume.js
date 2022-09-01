import axios from "axios";
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import { Data } from "../Data";
import "./Resume.css";

class App extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h5 className="text-white">Özgeçmişinizi lütfen PDF formatında yükleyiniz.</h5>
          <br />
          <h5 className="text-white">Özgeçmişinizi seçtikten sonra "Yükle" butonuna basınız.</h5>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="row justify-content-center mt-4 text-center">
        <h1 className="text-white">Özgeçmiş Gönder</h1>
        <h3 className="text-white">{Data.Data1.username}</h3>
        <div className="col-3 align-self-center">
        <Form.Select aria-label="Default select example">
          <option value="1">Adalet ve Güvenlik</option>
          <option value="2">Ağaç İşleri, Kağıt ve Kağıt Ürünleri</option>
          <option value="3">Bilişim Teknolojileri</option>
          <option value="4">Cam, Çimento ve Toprak</option>
          <option value="5">Çevre</option>
          <option value="6">Eğitim</option>
          <option value="7">Elektrik ve Elektronik</option>
          <option value="8">Enerji</option>
          <option value="9">Finans</option>
          <option value="10">Gıda</option>
          <option value="11">İnşaat</option>
          <option value="12">İş ve Yönetim</option>
          <option value="13">Kimya, Petrol, Lastik ve Plastik</option>
          <option value="14">Kültür, Sanat ve Tasarım</option>
          <option value="15">Maden</option>
          <option value="16">Makine</option>
          <option value="17">Medya, İletişim ve Yayıncılık</option>
          <option value="18">Metal</option>
          <option value="19">Otomotiv</option>
          <option value="20">Sağlık ve Sosyal Hizmetler</option>
          <option value="21">Spor ve Rekreasyon</option>
          <option value="22">Tarım, Avcılık ve Balıkçılık</option>
          <option value="23">Tekstil, Hazır Giyim, Deri</option>
          <option value="24">Ticaret (Satış ve Pazarlama)</option>
          <option value="25">Toplumsal ve Kişisel Hizmetler</option>
          <option value="26">Turizm, Konaklama, Yiyecek-İçecek Hizmetleri</option>
          <option value="27">Ulaştırma, Lojistik ve Haberleşme</option>
        </Form.Select>
        </div>

        <h1
        className="mt-4 text-white"
        >Özgeçmiş İnceleme</h1>
        <div
        className="mt-4"
        >
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Yükle</button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default App;
