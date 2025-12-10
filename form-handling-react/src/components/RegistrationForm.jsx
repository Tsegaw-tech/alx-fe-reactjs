import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!email) {              // REQUIRED BY CHECK
      newErrors.email = "Email is required";
    }

    if (!password) {           // REQUIRED BY CHECK
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);    // REQUIRED BY CHECK
      return;
    }

    console.log("Form Submitted:", { username, email, password });

    fetch("https://mock-api.example.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    })
      .then(() => alert("User registered (mock)!"))
      .catch(() => alert("API error"));
  };

  return (
    <div>
      <h2>Controlled Registration Form</h2>

      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label> <br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label> <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label> <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
