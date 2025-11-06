import "./Form.css";
import useGetWeather from "@/hooks/useGetWeather";
import { useState } from "react";
import { useLoadingStore } from "@/store/useLoagingStore";
export default function Form() {
  const { getWeather } = useGetWeather();
  const { isLoading } = useLoadingStore();
  const [country, setCountry] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getWeather(country);
  };
  return (
    <div className="form">
      <h1>Get your country</h1>
      <fieldset>
        <legend>Enter your country</legend>
        <input
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          disabled={isLoading}
          type="text"
          name="name"
        />
      </fieldset>
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Weather"}
      </button>
    </div>
  );
}
