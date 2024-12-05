import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  return (
    <>
      <h1>Weather App</h1>
      <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10" lg="8" xl="6">
              <WeatherCard />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
