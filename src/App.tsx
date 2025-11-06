import "./App.css";
import { useErrorStore } from "./store/useErrorStore";
import Display from "./components/Display/Display";
import Form from "@/components/Form";
import Error from "@/components/Error/Error";

function App() {
  const { isError } = useErrorStore();
  return (
    <main className="app-wrapper">
      <h1 style={{ fontSize: "3rem" }}>Weather API</h1>
      <div className="App">
        {isError && <Error />}
        <Form />
        <Display />
      </div>
    </main>
  );
}

export default App;
