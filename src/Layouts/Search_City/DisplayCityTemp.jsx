import React, { useContext, useEffect, useState } from "react";
import { weatherObj } from "../../Util/AdditionalData";
import ApiContext from "../../Context/ApiContext";
import GridWeather from "./GridWeather";

const DisplayCityTemp = () => {
  const [weatherQuote, setWeatherQuote] = useState("Clear");
  const { currentForecast } = useContext(ApiContext);

  useEffect(() => {
    if (currentForecast && currentForecast[0]?.weather) {
      setWeatherQuote(currentForecast[0]?.weather);
    }
  }, [currentForecast]);
  const quoteText = weatherObj[weatherQuote];
  return (
    <>
      <aside className="">
        <div className="city-temp">
          <h1 className="">{Math.round(currentForecast[0]?.temp)}°</h1>
          <h3 className="">{currentForecast[0]?.weather} Day</h3>
          <p className="">{quoteText}</p>
        </div>
        <div className="grid-weather">
          <GridWeather />
        </div>
      </aside>
    </>
  );
};

export default DisplayCityTemp;
