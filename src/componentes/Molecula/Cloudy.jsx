import cloudy from "../../assets/Img/Cloud.svg"
import "../../assets/Styles/Sunny.css"
function Cloudy({temperature}) {
    return (
        <>
            <div className="Container-cloudy">
                <div>
                    <img src={cloudy} alt="" />
                </div>
                <div>
                    <h2>Cloudy</h2>
                </div>
                <div>
                    <h2>{temperature}°</h2>
                </div>
            </div>
        </>
    );
}

export default Cloudy;