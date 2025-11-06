import "./Display.css";
import { useWeatherDataStore } from "@/store/useWeatherData";
import { useCountStore } from "@/store/useGetCount";

export default function Display() {
  const { count } = useCountStore();
  const { weatherData } = useWeatherDataStore();

  const hasWeatherData =
    weatherData.temperature !== null ||
    weatherData.description !== null ||
    weatherData.humidity !== null ||
    weatherData.windSpeed !== null;

  return (
    <div className="display">
      <h2>Інформація про погоду</h2>
      {hasWeatherData ? (
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
            <img width={25} height={25} src="/icons/speed.png" alt="speed" />
            Швидкість вітру: {weatherData.windSpeed} м/с
          </p>
        </div>
      ) : (
        <p className="no-data">
          Немає доступних даних про погоду. Будь ласка, введіть країну.
        </p>
      )}
    </div>
  );
}
