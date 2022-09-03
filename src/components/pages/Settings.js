import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Data } from "../Data";
import Avatar from "../helpers/Avatar";
import "./Settings.css";
import Form from 'react-bootstrap/Form';

export default function ProfilePage() {
  return (
    <section>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <Avatar />
                <p className="text-muted mb-2 mt-2">{Data.Data1.job}</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <img className="edit" src="edit.png"></img>
                    <MDBCardText>https://alperenguntekin.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex p-3">
                    <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: "#333333" }}
                    />
                    <img className="edit" src="edit.png"></img>
                    <MDBCardText>Linkedin: Alperen Güntekin</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex p-3">
                    <MDBIcon
                      fab
                      icon="twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <img className="edit" src="edit.png"></img>
                    <MDBCardText>İnstagram: Alperen Güntekin</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex p-3">
                    <MDBIcon
                      fab
                      icon="instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    />
                    <img className="edit ml-2" src="edit.png"></img>
                    <MDBCardText>Twitter: Alperen Güntekin</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mt-4">
            <MDBListGroupItem className="text-center m-3">
                  <button className="p-2">Değişiklikleri Kaydet</button>
                  </MDBListGroupItem>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="1">
                    <img className="editt" src="edit.png"></img>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>İsim Soyisim</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="8">
                    <MDBCardText className="text-muted">
                      {Data.Data1.username}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="1">
                    <img className="editt" src="edit.png"></img>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>Sektör</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="8">
                    <MDBCardText className="text-muted">
                      {Data.Data1.job}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="1">
                    <img className="editt" src="edit.png"></img>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>Puan</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="8">
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="1">
                    <img className="editt" src="edit.png"></img>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>Telefon</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="8">
                    <MDBCardText className="text-muted">
                      (098) 765-4321
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="1">
                    <img className="editt" src="edit.png"></img>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>Adres</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="8">
                    <MDBCardText className="text-muted">
                      Kütahya, Meydan Mah. Türkiye
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="12">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        Uzmanlık
                      </span>{" "}
                      Alanları
                    </MDBCardText>
                    <MDBRow>
                    <Form.Label>Web Design</Form.Label>
                    <Form.Range
                    className="p-4"
                    />
                    </MDBRow>
                    <MDBRow>
                    <Form.Label>Website Markup</Form.Label>
                    <Form.Range
                    className="p-4"
                    />
                    </MDBRow>
                    <MDBRow>
                    <Form.Label>One Page</Form.Label>
                    <Form.Range
                    className="p-4"
                    />
                    </MDBRow>
                    <MDBRow>
                    <Form.Label>Mobile Template</Form.Label>
                    <Form.Range
                    className="p-4"
                    />
                    </MDBRow>
                    <MDBRow>
                    <Form.Label>Backend API</Form.Label>
                    <Form.Range
                    className="p-4"
                    />
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
