import { useEffect, useState } from "react";
import "../styleComponents/navigationWeather.scss";
import axios from "axios";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

function WeatherCalendar() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b82deac8152118cb574f6c75e5968bb0`;

  /* Calendar */
  const [calendar, setCalendar] = useState(new Date());

  const searchByLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(data));
  }, [data]);

  useState(() => {
    const weatherApp = JSON.parse(localStorage.getItem("weather"));
    if (weatherApp) {
      setData(weatherApp);
    }
  });

  return (
    <div className="testWeather">
      <div className="weatherSection">
        <div className="searchByCity">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location..."
            onKeyDown={searchByLocation}
          />
        </div>
        <div className="topSection">
          <div>
            <h2>{data.name}</h2>
          </div>
          <div>{data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}</div>
        </div>
        <div className="bottomSection">
          <div>
            <h5>Humidity :</h5>
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          </div>

          <div>
            <h5>Pressure :</h5>
            {data.main ? <p>{data.main.pressure} hPa</p> : null}
          </div>
        </div>
      </div>
      <div className="calendarSection">
        <h1>Test calendar</h1>
        <div className="calendar-container">
          <Calendar value={calendar} setCalendar={true} />
        </div>
      </div>
    </div>
  );
}

export default WeatherCalendar;
