import React from "react";
import HourlyForecast from "./City_Weather/HourlyForecast";
import DayForecast from "./City_Weather/DayForecast";
import LiveData from "./City_Weather/LiveData";

const CityWeather = () => {
  return (
    <>
      <section className="weather_city-weather">
        <HourlyForecast />
        <DayForecast />
        {/* <LiveData /> */}
      </section>
    </>
  );
};

export default CityWeather;
