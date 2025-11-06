import "./Form.css";
export default function Form() {
  return (
    <div className="form">
      <h1>Get your country</h1>
      <fieldset>
        <legend>Enter your country</legend>
        <input type="text" name="name" />
      </fieldset>
      <button>Get Weather</button>
    </div>
  );
}
