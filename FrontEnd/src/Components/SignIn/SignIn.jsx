import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/Auth/authThunks";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [missingInputError, setMissingInputError] = useState(false);
    const [incorrectCredentialsError, setIncorrectCredentialsError] = useState(false);

    const [, forceUpdate] = useState();

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMissingInputError(true);
            setIncorrectCredentialsError(false);
            return;
        }

        setMissingInputError(false);
        setIncorrectCredentialsError(false);

        
        await dispatch(loginUser(email, password, () => {
            navigate('/user'); // Redirection vers page User
        }, () => {
            setTimeout(() => {
                setIncorrectCredentialsError(true);
                forceUpdate(); 
            }, 0);
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

                {/* Error messages */}
                {missingInputError && <p className="error-message">Ecrivez un Username et un mot de passe.</p>}
                {incorrectCredentialsError && <p className="error-message">Username ou mot de passe Incorrect.</p>}
            </form>
        </section>
    );
}

export default SignIn;
