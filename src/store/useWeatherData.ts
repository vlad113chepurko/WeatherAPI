import { create } from "zustand";

interface WeatherData {
  temperature: number | null;
  description: string | null;
  humidity: number | null;
  windSpeed: number | null;
}

export const useWeatherDataStore = create<{
  weatherData: WeatherData;
  setWeatherData: (data: WeatherData) => void;
}>((set) => ({
  weatherData: {
    temperature: null,
    description: null,
    humidity: null,
    windSpeed: null,
  },
  setWeatherData: (data: WeatherData) => set({ weatherData: data }),
}));
