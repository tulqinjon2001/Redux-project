import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../ui";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="w-25 container mt-5 p-3 border">
      <h3>Sign Up</h3>

      <Input
        label="First name"
        type="text"
        state={firstName}
        setState={setFirstName}
      />
      <Input
        label="Last name"
        type="text"
        state={lastName}
        setState={setLastName}
      />
      <Input
        label="Username"
        type="text"
        state={username}
        setState={setUsername}
      />
      <Input
        label="Email address"
        type="email"
        state={email}
        setState={setEmail}
      />
      <Input
        label="Password"
        type="text"
        state={password}
        setState={setPassword}
      />

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>

      <p className="forgot-password text-right">
        Already registered <Link to="/login">sign in?</Link>
      </p>
    </form>
  );
}

export default Register;
