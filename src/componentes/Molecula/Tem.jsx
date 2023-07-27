import "../../assets/Styles/Ladingclima.css"
import Gradostemp from "../Atomos/Gradostemp";
import Temp from "../Atomos/H1temp";

function Tem({ humidity, pressure }) {
    return (
        <>
            <div className="Container-temp">
                <div>
                    <Temp>Humedad</Temp>
                    <Gradostemp>{humidity}%</Gradostemp>
                </div>
                <div>
                    <Temp>Presion</Temp>
                    <Gradostemp>{pressure}hPa</Gradostemp>
                </div>
            </div>


        </>

    );
}

export default Tem;
