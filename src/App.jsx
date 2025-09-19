import { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./App.css";
import "./Layouts/layouts.css";
import { bgMedia } from "./Util/AdditionalData";
import SearchCity from "./Layouts/SearchCity";
import CityWeather from "./Layouts/CityWeather";
import ApiContext from "./Context/ApiContext";

const App = () => {
  const [weatherMedia, setWeatherMedia] = useState("Clear");
  const { currentForecast } = useContext(ApiContext);
  useEffect(() => {
    if (currentForecast && currentForecast[0]?.weather) {
      setWeatherMedia(currentForecast[0]?.weather);
    }
  }, [currentForecast]);
  const bg = bgMedia[weatherMedia];
  return (
    <>
      <main className="weather">
        {/* <LazyLoadImage className="weather_bg-img" src={bgImg.img} /> */}
        <video
          className="weather_bg-media"
          src={bg.vid}
          autoPlay
          loop
          muted
          playsInline
        />
        <article className="weather_search-details">
          <SearchCity />
          <CityWeather />
        </article>
      </main>
    </>
  );
};

export default App;
