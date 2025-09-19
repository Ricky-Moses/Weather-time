import { useContext } from "react";
import { CiTimer } from "react-icons/ci";
import ApiContext from "../../Context/ApiContext";
import Slick from "../../Component/Slick";

const HourlyForecast = () => {
  const { hourForecast } = useContext(ApiContext);
  return (
    <>
      <div className="hourly-forecast">
        <div className="forecast-head">
          <CiTimer />
          <p>HOURLY FORECAST</p>
        </div>
        <Slick data={hourForecast} />
      </div>
    </>
  );
};

export default HourlyForecast;
