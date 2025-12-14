import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const submit = (event) => {
    event.preventDefault();
    props.onSubmit(name, email, age);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={submit}
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
  );
};

export default Form;
