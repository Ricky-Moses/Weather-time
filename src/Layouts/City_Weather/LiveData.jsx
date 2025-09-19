import React, { useContext } from "react";
import ApiContext from "../../Context/ApiContext";

const LiveData = () => {
  const { currentForecast } = useContext(ApiContext);

  console.log(currentForecast);
  return (
    <>
      <div className="live-forecast">
        <div className=""></div>
        <div className=""></div>
      </div>
    </>
  );
};

export default LiveData;
