import "./Display.css";
import { useWeatherDataStore } from "@/store/useWeatherData";

export default function Display() {
  const { weatherData } = useWeatherDataStore();

  if (!weatherData) {
    return <div>No weather data available.</div>;
  }

  return (
    <div className="display">
      <h2>Weather Information</h2>
      <p>Temperature: {weatherData.temperature} °C</p>
      <p>Description: {weatherData.description}</p>
      <p>Humidity: {weatherData.humidity} %</p>
      <p>Wind Speed: {weatherData.windSpeed} m/s</p>
    </div>
  );
}
