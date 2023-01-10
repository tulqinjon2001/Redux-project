import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../ui";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="w-25 container mt-5 p-3 border">
      <h3>Sign In</h3>

      <Input
        label="Enter email addres"
        type="email"
        state={email}
        setState={setEmail}
      />
      <Input
        label="Enter password"
        type="password"
        state={password}
        setState={setPassword}
      />

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </div>

      <p className="forgot-password text-right">
        Already registered <Link to="/register">sign up?</Link>
      </p>
    </form>
  );
}

export default Login;
