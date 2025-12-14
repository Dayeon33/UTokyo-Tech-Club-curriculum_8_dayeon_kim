import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit: ", name, email, age);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {count}
        <button onClick={() => setCount((prev) => prev + 1)}>Button</button>

        <form
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
          onSubmit={handleSubmit}
        >
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email: </label>
          <input
            type="email"
            style={{ marginBottom: 20 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <button type="submit" style={{ marginTop: 20 }}>
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
