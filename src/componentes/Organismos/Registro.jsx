import React from "react";
import "../../assets/Styles/Registro.css"
import Nube from "../../assets/Img/nube.png"
import { useRef } from "react";
import { Link } from "react-router-dom";
import BotonRegister from "../Atomos/BotonRegister";
const Registrarte = () => {

  let datosform = useRef();

  const handlerClick = (e) => {
    e.preventDefault();
    
    const newButton = new FormData(datosform.current);
    let emailForm = newButton.get("correo");

    console.log(emailForm);
    let correo = {
      method: "POST",
      headers: {
        "Contet-Type": "application/json",
      },
      body: {
        email: emailForm
      }
    };
    
    fetch("http://54.234.241.63:3000/topic/email", correo)
      .then(response => response.json())
      .then(data => {
        alert(JSON.stringify(data))
      });
  };
  return (
    <>

      <div className="Fondo">

        <Link to="/">
          <BotonRegister>Regresar</BotonRegister>
        </Link>

        <div className="image-corner1">
          <img src={Nube} alt="Imagen 1" />
        </div>

        <div className="signupFrm">
          <form action="" className="form" ref={datosform}>
            <h1 className="title">Registrarte</h1>

            <div className="inputContainer">
              <input type="text" class="input" placeholder="a" />
              <label for="" className="label">Nombre</label>
            </div>

            <div className="inputContainer">
              <input type="text" className="input" placeholder="a" />
              <label for="" className="label">Apellido</label>
            </div>

            <div className="inputContainer">
              <input type="text" className="input" placeholder="a"  name="correo" />
              <label for="" className="label" >Correo</label>
            </div>

            <div className="inputContainer">
              <input type="text" className="input" placeholder="a" />
              <label for="" className="label">Confirma correo</label>
            </div>

            <button className="submitBtn" onClick={handlerClick}> Registrarse</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registrarte;