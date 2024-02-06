import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/authThunks";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        await dispatch(loginUser(email, password, () => {
            navigate('/user'); // redirection vers la page user
        }));
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>

            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>

                <button type="button" className="sign-in-button" onClick={handleSignIn}>
                    Sign In
                </button>
            </form>
        </section>
    );
}

export default SignIn;
