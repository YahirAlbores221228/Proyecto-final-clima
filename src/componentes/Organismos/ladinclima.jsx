import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import io from "socket.io-client";
import moment from 'moment';
import Title from '../Atomos/Titlefecha';
import Grados from '../Atomos/Titlegrados';
import Sunny from "../Molecula/Sunny";
import Cloudy from '../Molecula/Cloudy';
import Rainy from '../Molecula/Rainy';
import History from '../Molecula/History';
import BotonRegister from '../Atomos/BotonRegister';
import Temp from '../Molecula/Tem';
import "../../assets/Styles/Ladingclima.css";

const socket = io("http://34.230.94.49:4000/");
function Ladingclima() {
  const currentDate = moment().format('DD MMMM YYYY');
  const [data, setData] = useState([]);
  const CambioimagenClima = cambioimagenclima(data.temperature);
  const CambiodatosClima = cambiodatosClima(data.temperature);
  useEffect(() => {
    socket.on("message", data => {
      const newTemperature = data.temperature;

      let newData = {
        temperature: newTemperature.toFixed(1),
        humidity: data.humidity,
        pressure: data.pressure,
      }
      setData(newData);
      console.log(data);
    });
  }, []);
  function cambioimagenclima(temperature) {
    if (data.temperature >= 30) {
      return 'Container-fondo-lading';
    } else if (data.temperature >= 20) {
      return 'background-sunny';
    }
  }
  function cambiodatosClima(temperature) {
    if (data.temperature >= 30) {
      return 'containe';
    } else if (data.temperature >= 20) {
      return 'containe2'
    }
  }
  const getWeatherImage = () => {
    if (data.temperature >= 30) {
      return <Sunny temperature={data.temperature} />;
    } else if (data.temperature>= 20) {
      return <Cloudy temperature={data.temperature} />;
    } else if (data.temperature >= 10) {
      return <Rainy temperature={data.temperature} />;
    }
  };
  return (
    <> <div className={`Container-fondo-lading ${CambioimagenClima}`}>
      <div className={`containe ${CambiodatosClima}`}>

        <div className="datos-clima">
          <Link to="/registro">
            <BotonRegister >Registrarse</BotonRegister>
          </Link>
          <div className="container-fecha">
            <div>
              <Title>{currentDate}</Title>
            </div>
          </div>
          <div>
            <Sunny />
          </div>
          <div>
            <Cloudy />
          </div>
          <div>
            <Rainy />
          </div>
          <div className="container-grados-tipos-clima">
            <div>
              <h3>En estos momentos</h3>
            </div>
            <div>{getWeatherImage()}</div>
          </div>
        </div>
        <div className="grados-clima">
          <div>
            <Grados>{data.temperature}º</Grados>
          </div>
          <div>
            <Temp humidity={data.humidity} pressure={data.pressure} />
          </div>

          <div>
            <p>Suchiapa, Chiapas</p>
          </div>
          <div className='conatiner-historial'>
            <div>
              <History />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Ladingclima;
