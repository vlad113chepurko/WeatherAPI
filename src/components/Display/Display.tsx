import "./Display.css";
import "@/Skeleton.css";
import { motion } from "framer-motion";
import { useWeatherDataStore } from "@/store/useWeatherData";
import { useCountStore } from "@/store/useGetCount";
import { useLoadingStore } from "@/store/useLoadingStore";

export default function Display() {
  const { count } = useCountStore();
  const { isLoading } = useLoadingStore();
  const { weatherData } = useWeatherDataStore();

  const hasWeatherData =
    weatherData.temperature !== null ||
    weatherData.description !== null ||
    weatherData.humidity !== null ||
    weatherData.windSpeed !== null;

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="display"
    >
      <h2>Інформація про погоду</h2>

      {isLoading ? (
        <>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </>
      ) : hasWeatherData ? (
        <div>
          <p className="data-p">
            <img
              width={25}
              height={25}
              src="/icons/counter.png"
              alt="counter"
            />
            Число запитів до API: {count}
          </p>
          <p className="data-p">
            <img
              width={25}
              height={25}
              src="/icons/temperature.png"
              alt="temperature"
            />
            Температура: {weatherData.temperature} °C
          </p>
          <p className="data-p">
            <img
              width={25}
              height={25}
              src="/icons/description.png"
              alt="description"
            />
            Опис: {weatherData.description}
          </p>
          <p className="data-p">
            <img
              width={25}
              height={25}
              src="/icons/humidity.png"
              alt="humidity"
            />
            Вологість: {weatherData.humidity} %
          </p>
          <p className="data-p">
            <img width={25} height={25} src="/icons/speed.png" alt="wind" />
            Швидкість вітру: {weatherData.windSpeed} м/с
          </p>
        </div>
      ) : (
        <p>Немає доступних даних про погоду. Будь ласка, введіть країну.</p>
      )}
    </motion.div>
  );
}
