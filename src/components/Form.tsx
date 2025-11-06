import "./Form.css";
import useGetWeather from "@/hooks/useGetWeather";

import { useLoadingStore } from "@/store/useLoadingStore";
import { useCountryStore } from "@/store/useCountryStore";
export default function Form() {
  const { country, setCountry } = useCountryStore();
  const { getWeather } = useGetWeather();
  const { isLoading } = useLoadingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getWeather();
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
