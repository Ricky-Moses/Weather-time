import { useContext } from "react";
import "./slick.css";
import ApiContext from "../Context/ApiContext";

const Slick = ({ data }) => {
  const { arrOfWeatherImg } = useContext(ApiContext);

  const getWeatherImg = (weather) => {
    const findImg = arrOfWeatherImg.find((img) => img.name === weather);
    return findImg ? findImg.img : null;
  };
  return (
    <>
      <div class="slick-slider">
        <div className="slick-card">
          {data.map((list, idx) => (
            <figure className="">
              <h2>{idx === 0 ? "Now" : list.hour ? list.hour : list[0]}</h2>
              <h1>{Math.round(list.temp || list[1].temp)}°</h1>
              {getWeatherImg(list.weather || list[1].weather) && (
                <div className="">
                  <img
                    className=""
                    src={getWeatherImg(list.weather || list[1].weather)}
                    alt={list.weather}
                  />
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slick;
