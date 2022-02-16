import "../styles/App.css";
import { useState} from 'react';
import { getWeather, getWeeklyWeather } from '../api';
import SearchBar from "./SearchBar";
import WeeklyView from "./WeeklyView";

function App() {
  const [city, setCity] = useState("");
  const [weeklyView, setWeeklyView] = useState({});

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      getWeather(city);
      getWeeklyWeather(city).then(res => setWeeklyView(res))
    }
  }

  return (
    <div className="App">
      <SearchBar 
        handleChange={handleChange}
        city={city}
        handleKeyDown={handleKeyDown}
      />
      <WeeklyView 
        city={city}
        weeklyView={weeklyView}
      />
    </div>
  );
}

export default App;
