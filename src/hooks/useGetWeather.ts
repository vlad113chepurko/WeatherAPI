import axios from "axios";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useErrorStore } from "@/store/useErrorStore";
import { useWeatherDataStore } from "@/store/useWeatherData";
import { useCountryStore } from "@/store/useCountryStore";
import { useCountStore } from "@/store/useGetCount";
import { useEffect } from "react";

export default function useGetWeather() {
  const { country } = useCountryStore();
  const { setError, isSuccess, setSuccess } = useErrorStore();
  const { setIsLoading } = useLoadingStore();
  const { increment } = useCountStore();
  const { setWeatherData } = useWeatherDataStore();

  useEffect(() => {
    if (isSuccess && country !== "") {
      console.log(country);

      const intervalId = setInterval(() => {
        getWeather();
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [isSuccess, country]);

  const getWeather = async () => {
    setError(null, false);
    const key = (import.meta as any).env?.VITE_API_KEY;

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
      increment();
      setSuccess(true);
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Помилка при отриманні погодних даних", true);
    } finally {
      setIsLoading(false);
    }
  };

  return { getWeather };
}
