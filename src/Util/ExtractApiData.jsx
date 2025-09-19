// ? Current day
const groupDay = (list) => {
  if (!Array.isArray(list)) return {};
  const day = {};

  list.forEach((dateEl) => {
    const date = dateEl.dt_txt.split(" ")[0];
    if (!day[date]) {
      day[date] = [];
    }
    day[date].push(dateEl);
  });
  return day;
};

export const getCurrentDay = (list) => {
  if (!Array.isArray(list)) return [];
  const currentDay = groupDay(list);
  // console.log(currentDay);
  const daily = Object.keys(currentDay).map((date) => {
    const target = currentDay[date].find(
      (curr) => curr.dt_txt.includes("12:00:00") || currentDay[date][0]
    );
    return {
      date,
      time: target.dt_txt.split(" ")[0],
      second: target?.dt,
      feel: target?.main.feels_like,
      ground: target?.main.grnd_level,
      humidity: target?.main.humidity,
      pressure: target?.main.pressure,
      seaLevel: target?.main.sea_level,
      temp: target?.main.temp,
      precipitation: target?.rain?.["3h"] || "No rain",
      visible: target?.visibility,
      weather: target?.weather[0]?.main,
      wind_deg: target?.wind.deg,
      wind_gust: target?.wind.gust,
      wind_speed: target?.wind.speed,
    };
  });

  return daily;
  // console.log(daily);
};

// ? Current day

// ? Get three hour from current date
export const getThreeHourData = (list) => {
  if (!Array.isArray(list)) return [];

  const today = new Date().toISOString().split("T")[0];

  const threeHour = list
    .filter((item) => item.dt_txt.startsWith(today))
    .map((item) => ({
      time: item.dt_txt.split(" ")[0],
      hour: item.dt_txt.split(" ")[1],
      feel: item?.main.feels_like,
      ground: item?.main.grnd_level,
      humidity: item?.main.humidity,
      pressure: item?.main.pressure,
      seaLevel: item?.main.sea_level,
      temp: item?.main.temp,
      precipitation: item?.rain?.["3h"] || "No rain",
      visible: item?.visibility,
      weather: item?.weather[0]?.main,
      wind_deg: item?.wind.deg,
      wind_gust: item?.wind.gust,
      wind_speed: item?.wind.speed,
    }));

  return threeHour;
};

// ? Get three hour from current date

// ? Get day of list from api
export const getListOfDay = (list) => {
  if (!Array.isArray(list)) return [];

  const days = new Map();
  list.forEach((day) => {
    const date = day.dt_txt.split(" ")[0];
    if (!days.has(date)) {
      days.set(date, {
        date,
        temp: day?.main.temp,
        weather: day?.weather[0]?.main,
      });
    }
  });
  return Array.from(days);
};

// ? Get day of list from api
