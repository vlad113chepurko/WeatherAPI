import "./Form.css";
import useGetWeather from "@/hooks/useGetWeather";
import { motion } from "framer-motion";
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
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="form"
    >
      <h1>Отримаємо погоду в - {country ? country : "невідомо"}</h1>
      <label htmlFor="country">Введіть вашу країну</label>
      <input
        maxLength={56}
        placeholder="Київ, Дніпро. Харків..."
        ref={inputRef}
        onChange={(e) => setCountry(e.target.value)}
        value={country}
        disabled={isLoading}
        type="text"
        name="country"
        id="country"
      />
      <button type="button" onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Завантаження..." : "Отримати погоду"}
      </button>
    </motion.div>
  );
}
