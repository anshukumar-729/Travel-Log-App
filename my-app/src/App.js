import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1310/api/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <h1>registration</h1>

      <form onSubmit={registerUser}>
        <input
          value={name}
          onchange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          onchange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onchange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <input type="submit" value="register" />
         
       
      </form>
    </div>
  );
}

export default App;
