import "./App.css";
import { useState } from "react";

const API = "https://uttc-react-8cd12-default-rtdb.firebaseio.com/tweets.json";
const TARGET_NAME = "inada";

function App() {
  // Form states (POST)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // Result states (GET)
  const [resultAge, setResultAge] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setStatus("Saving form data...");
      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          age: Number(age),
        }),
      });

      setStatus(`Form data saved (status=${response.status})`);
      setName("");
      setEmail("");
      setAge("");
    } catch (e) {
      console.log(e);
      setStatus("Failed to save form data (check console)");
    }
  };

  const seedData = async () => {
    try {
      setStatus("Saving sample data...");
      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: TARGET_NAME,
          email: "inada@example.com",
          age: 20,
        }),
      });
      setStatus(`Sample data saved (status=${response.status})`);
    } catch (e) {
      console.log(e);
      setStatus("Failed to save sample data (check console)");
    }
  };

  const fetchAgePlus10 = async () => {
    try {
      setResultAge(null);
      setStatus("Fetching data...");
      const response = await fetch(API, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (!data) {
        setStatus(
          'No data found. Please submit data or click "Save Sample Data" first.'
        );
        return;
      }

      const found = Object.values(data).find((v) => v.name === TARGET_NAME);
      if (!found) {
        setStatus(
          `No user named "${TARGET_NAME}" found. (Tip: submit with name="${TARGET_NAME}")`
        );
        return;
      }

      const ageNum = Number(found.age);
      if (Number.isNaN(ageNum)) {
        setStatus(`Age is not a number: ${found.age}`);
        return;
      }

      setResultAge(ageNum + 10);
      setStatus(`Success! Displayed age + 10 for "${TARGET_NAME}".`);
    } catch (e) {
      console.log(e);
      setStatus("Failed to fetch data (check console)");
    }
  };

  return (
    <div className="App" style={{ padding: 24 }}>
      <h2>React Assignment 1-5</h2>

      {/* ✅ Form: POST */}
      <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 8 }}>
          <label>Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Age: </label>
          <input value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>

      <hr style={{ margin: "16px 0" }} />

      {/* ✅ Buttons: seed + GET */}
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={seedData}>Save Sample Data</button>
        <button onClick={fetchAgePlus10}>Fetch Age + 10</button>
      </div>

      <p style={{ marginTop: 16 }}>Status: {status}</p>

      <h3 style={{ marginTop: 12 }}>
        Result (Age + 10): {resultAge === null ? "Not yet fetched" : resultAge}
      </h3>

      <p style={{ marginTop: 8, fontSize: 14, opacity: 0.8 }}>
        Note: The fetch button searches for name="{TARGET_NAME}". To test with
        your own input, submit with name="{TARGET_NAME}" (or change
        TARGET_NAME).
      </p>
    </div>
  );
}

export default App;
