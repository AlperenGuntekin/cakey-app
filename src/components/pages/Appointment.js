import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimeSlot from "./TimeSlot";

export default function Form() {
  const [roomName, setRoomName] = useState("");
  const [userName, setuserName] = useState("");
  const [description, setDescription] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [success, setSuccess] = useState(false);
  const successMessage = () => {
    return (
      <>
        {success && (
          <div class="alert alert-success m-2" role="alert">
            Randevunuz başarıyla alındı.
            <span class="text-danger">{userName}</span>
          </div>
        )}
      </>
    );
  };
  const bookAppointment = () => {
    setSuccess(true);
    setuserName("");
    setDescription("");
    setSelectedDate("");
  };

  const onChange = (value) => {
    setSelectDate(value);
    var date = new Date(value),
      dayOfDate = ("0" + date.getDate()).slice(-2),
      month = ("0" + (date.getMonth() + 1)).slice(-2);
    setSelectedDate([dayOfDate, month, date.getFullYear()].join("-"));
    setSuccess(false);
  };
  return (
    <>
      <div className="row p-5">
        <div className="col-6">
          <h5 className="text-white">Randevu Al</h5>
          <form>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                aria-label="Metting Room"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              >
              <option>Sektör Seçiniz</option>
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
              </select>
              <label>Sektör Seçiniz</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
                value={userName}
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              ></input>
              <label>İsim</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your description"
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
              <label>Açıklama</label>
              <p className="text-white text-center">Lütfen görüşme için beklentilerinizi ve isteklerinizi İşe Alım Uzman'ına açıklayınız.</p>
            </div>
            <div className="mb-3">
              <div className="react-calendar">
                <Calendar onClickDay={onChange} value={selectDate} required />
              </div>
            </div>
          </form>
        </div>

        <div className="col-6 text-white text-center">     
        <h5 className="card-title mb-2">Date {selectedDate}</h5>
        <TimeSlot></TimeSlot>
        {successMessage()}
        <button
          type="button"
          className="text-center btn btn-lg btn-primary m-2"
          onClick={bookAppointment}
        >
          Randevu Al
        </button>
        </div>
      </div>
    </>
  );
}
