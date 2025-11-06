import axios from "axios";
import { useLoadingStore } from "@/store/useLoagingStore";
import { useErrorStore } from "@/store/useErrorStore";
import { useWeatherDataStore } from "@/store/useWeatherData";

export default function useGetWeather() {
  const { setError } = useErrorStore();
  const { setIsLoading } = useLoadingStore();
  const { setWeatherData } = useWeatherDataStore();

  const getWeather = async (country: string) => {
    setError(null, false);
    const key = import.meta.env.VITE_API_KEY;

    if (!key) throw new Error("VITE_API_KEY is not defined in .env");

    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: { q: country, appid: key, units: "metric" },
        }
      );
      console.log(data);
      setWeatherData({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      });

      setInterval(() => {
        getWeather(country);
      }, 60000);

      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Error fetching weather data", true);
    } finally {
      setIsLoading(false);
    }
  };

  return { getWeather };
}
