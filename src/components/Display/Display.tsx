import "./Display.css";
import { useWeatherDataStore } from "@/store/useWeatherData";

export default function Display() {
  const { weatherData } = useWeatherDataStore();

  return (
    <div className="display">
      {weatherData !== null ? (
        <div>
          <h2>Weather Information</h2>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Description: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity} %</p>
          <p>Wind Speed: {weatherData.windSpeed} m/s</p>
        </div>
      ) : (
        <p>No weather data available. Please submit a city.</p>
      )}
    </div>
  );
}
