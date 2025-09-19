import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiContext from "./ApiContext";
import {
  getCurrentDay,
  getListOfDay,
  getThreeHourData,
} from "../Util/ExtractApiData";
import Cloud from "../assets/cloud.png";
import Clear from "../assets/clear.png";
import Rain from "../assets/rain.png";

const FetchingApi = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState("Dindigul");
  const [currentForecast, setCurrentForecast] = useState([]);
  const [hourForecast, setHourForecast] = useState([]);
  const [dayForecast, setDayForecast] = useState([]);
  const arrOfWeatherImg = [
    {
      name: "Clear",
      img: Clear,
    },
    {
      name: "Rain",
      img: Rain,
    },
    {
      name: "Clouds",
      img: Cloud,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              q: cities,
              units: "metric",
              appid: import.meta.env.VITE_WEATHER_API,
            },
          }
        );
        setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [cities]);

  useEffect(() => {
    if (data?.list?.length > 0) {
      const currentDay = getCurrentDay(data.list);
      const threeHour = getThreeHourData(data.list);
      const dayList = getListOfDay(data.list);
      setCurrentForecast(currentDay);
      setHourForecast(threeHour);
      setDayForecast(dayList);
    }
  }, [data]);

  return (
    <ApiContext.Provider
      value={{
        loading,
        cities,
        setCities,
        currentForecast,
        hourForecast,
        dayForecast,
        arrOfWeatherImg,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default FetchingApi;
