import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

function App() {
  const handleSubmit = (name, email, age) => {
    console.log("onSubmit:", name, email, age);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form onSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
