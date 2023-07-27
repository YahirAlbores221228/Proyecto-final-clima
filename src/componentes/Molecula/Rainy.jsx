import rainy from "../../assets/Img/Rain.svg"
import "../../assets/Styles/Sunny.css"

function Rainy({ temperature }) {
    return (
        <>
            <div className="Container-rainy">
                <div>
                    <img src={rainy} alt="" />
                </div>
                <div>
                    <h2>Rainy</h2>
                </div>
                <div>
                    <h2>{temperature}°</h2>
                </div>
            </div>
        </>

    );
}

export default Rainy;

