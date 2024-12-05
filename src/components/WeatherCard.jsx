import { MDBCard, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function WeatherCard() {

  const [temperature, setTemperature] = useState("0");
  const [city, setCity] = useState("Catamarca");
  const apikey = "";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
        console.log(response.data)
        setTemperature(response.data.main.temp)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();

  }, [city])

  return (
    <>
      <input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
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
          <p className="display-2 my-3">{temperature}</p>
          <p className="mb-2">
            Feels Like: <strong>-1.08 °C</strong>
          </p>
          <MDBTypography tag="h5">Snowy</MDBTypography>
        </div>
      </MDBCard>
    </>

  )
}

export default WeatherCard