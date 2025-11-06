import "./Error.css";
import { useErrorStore } from "@/store/useErrorStore";

export default function Error() {
  const { errorMessage } = useErrorStore();
  const { setError } = useErrorStore();
  return (
    <div className="error">
      <p>{errorMessage}</p>
      <button className="error__button" onClick={() => setError(null, false)}>
        X
      </button>
    </div>
  );
}
