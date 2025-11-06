import "./App.css";
import { useErrorStore } from "./store/useErrorStore";
import Display from "./components/Display/Display";
import Form from "@/components/Form";
import Error from "@/components/Error/Error";

function App() {
  const { isError } = useErrorStore();
  return (
    <div className="App">
      {isError && <Error />}
      <Form />
      <Display />
    </div>
  );
}

export default App;
