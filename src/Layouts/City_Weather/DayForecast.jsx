import React, { useContext } from "react";
import ApiContext from "../../Context/ApiContext";
import Slick from "../../Component/Slick";

const DayForecast = () => {
  const { dayForecast } = useContext(ApiContext);
  return (
    <>
      <div className="day-forecast">
        <Slick data={dayForecast} />
      </div>
    </>
  );
};

export default DayForecast;
