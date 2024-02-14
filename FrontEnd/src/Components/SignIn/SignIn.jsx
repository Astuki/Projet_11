import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/Auth/authThunks";
import { useNavigate } from "react-router-dom";
import { loginFailure } from "../../redux/Auth/authSlice";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector((state) => state.auth.error);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      dispatch(loginFailure("Mot de Passe Ou Username manquant"));
      return;
    }

    await dispatch(
      loginUser(email, password, () => {
        navigate("/user"); // Redirection to the User page
      })
    );
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="button" className="sign-in-button" onClick={handleSignIn}>
          Sign In
        </button>

        {/* Error messages */}
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
}

export default SignIn;
