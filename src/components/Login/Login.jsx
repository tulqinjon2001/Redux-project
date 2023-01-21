import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Input } from "../ui";
import {loginUserStart} from '../slice/authorization';
import styles from './Login.module.scss';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth);

  const loginHandler = (e) => {
    e.preventDefault();
    
    dispatch(loginUserStart());
  }

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
        <button className="btn btn-primary" disabled={isLoading} onClick={loginHandler} type="submit">
          {isLoading ? 'sign in....' : 'Sign In'}
        </button>
      </div>

      <p className="forgot-password text-right">
        Already registered <Link to="/register">sign up?</Link>
      </p>
    </form>
  );
}

export default Login;
