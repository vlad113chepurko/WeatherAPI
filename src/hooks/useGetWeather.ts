import axios from "axios";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useErrorStore } from "@/store/useErrorStore";
import { useWeatherDataStore } from "@/store/useWeatherData";
import { useCountryStore } from "@/store/useCountryStore";
import { useEffect } from "react";

export default function useGetWeather() {
  const { country } = useCountryStore();
  const { setError, isSuccess, setSuccess } = useErrorStore();
  const { setIsLoading } = useLoadingStore();
  const { setWeatherData } = useWeatherDataStore();

  useEffect(() => {
    if (isSuccess) {
      const intervalId = setInterval(() => {
        getWeather();
      }, 60000);

      return () => clearInterval(intervalId);
    }
  }, [isSuccess]);

  const getWeather = async () => {
    setError(null, false);
    const key = import.meta.env.VITE_API_KEY;

    if (!key) {
      setError("API key is missing", true);
      return;
    }

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

      setSuccess(true);
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
