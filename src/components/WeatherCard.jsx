import { MDBCard, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'

function WeatherCard() {
  return (
    <MDBCard
      className="bg-dark text-white"
      style={{ borderRadius: "40px" }}
    >
      <div className="bg-image" style={{ borderRadius: "35px" }}>
        <MDBCardImage
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
          className="card-img"
          alt="weather"
        />
        <div
          className="mask"
          style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
        ></div>
      </div>
      <div className="card-img-overlay text-dark p-5">
        <MDBTypography tag="h4" className="mb-0">
          Juneau, Alaska, US
        </MDBTypography>
        <p className="display-2 my-3">1.28°C</p>
        <p className="mb-2">
          Feels Like: <strong>-1.08 °C</strong>
        </p>
        <MDBTypography tag="h5">Snowy</MDBTypography>
      </div>
    </MDBCard>
  )
}

export default WeatherCard