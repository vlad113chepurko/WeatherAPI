import axios from "axios";
import { useLoadingStore } from "@/store/useLoagingStore";

export default function useGetWeather() {
  const { setIsLoading } = useLoadingStore();

  const getWeather = async (country: string) => {
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
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { getWeather };
}
