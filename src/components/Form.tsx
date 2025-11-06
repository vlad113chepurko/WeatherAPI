import "./Form.css";
import useGetWeather from "@/hooks/useGetWeather";

import { useLoadingStore } from "@/store/useLoadingStore";
import { useCountryStore } from "@/store/useCountryStore";
import { useRef, useEffect } from "react";
export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { country, setCountry } = useCountryStore();
  const { getWeather } = useGetWeather();
  const { isLoading } = useLoadingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getWeather();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="form">
      <h1>Отримаємо погоду в - {country ? country : "невідомо"}</h1>
      <fieldset>
        <legend>Введіть вашу країну</legend>
        <input
          ref={inputRef}
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          disabled={isLoading}
          type="text"
          name="name"
        />
      </fieldset>
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Завантаження..." : "Отримати погоду"}
      </button>
    </div>
  );
}
