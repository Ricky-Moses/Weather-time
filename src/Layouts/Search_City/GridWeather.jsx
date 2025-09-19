import { useContext } from "react";
import { PiThermometerHotDuotone } from "react-icons/pi";
import { BsDroplet } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import ApiContext from "../../Context/ApiContext";
import { formatDistanceToNow } from "date-fns";

const GridWeather = () => {
  const { currentForecast } = useContext(ApiContext);
//   console.log(currentForecast);

  // ? Extract the forecast timestamp ('dt' in seconds)

  const forecastDate = currentForecast[0]?.second
    ? new Date(currentForecast[0]?.second * 1000)
    : null;

  const relativeTime = forecastDate
    ? formatDistanceToNow(forecastDate, { addSuffix: true })
    : "Unknown";
  //   console.log(relativeTime);

  const gridArray = [
    {
      icon: <PiThermometerHotDuotone />,
      label: "feels like",
      deg: Math.round(currentForecast[0]?.temp),
      unit: "°",
      desc: "Humidity is making it feel warm",
    },
    {
      icon: <BsDroplet />,
      label: "precipitation",
      deg: Math.round(currentForecast[0]?.precipitation) || 0,
      unit: `"`,
      desc: relativeTime,
    },
    {
      icon: <MdRemoveRedEye />,
      label: "feels like",
      deg: Math.round(currentForecast[0]?.visible),
      unit: `Mi`,
    },
    {
      icon: <WiHumidity />,
      label: "feels like",
      deg: Math.round(currentForecast[0]?.humidity),
      unit: `%`,
      desc:
        Math.round(currentForecast[0]?.humidity) < 25
          ? "The dew point is 25% right now"
          : "",
    },
  ];
  return (
    <>
      {gridArray?.map((list, idx) => (
        <div key={idx} className="weather-card">
          <div className="">
            <span className="">{list.icon}</span>
            <label htmlFor="">{list.label.toUpperCase()}</label>
          </div>
          <h1>{list.deg} {list.unit}</h1>
          {list.desc ? (<p>{list.desc}</p>) : (<></>)}
        </div>
      ))}
    </>
  );
};

export default GridWeather;
