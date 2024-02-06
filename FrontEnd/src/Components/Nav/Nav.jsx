import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/authThunks";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";

export default function Nav() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // import hook nagivate

    const handleSignOut = () => {
        dispatch(logoutUser());
        navigate("/login"); // redirection après le logout
    };

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {isAuthenticated ? (
                    <button className="main-nav-item button-styling" onClick={handleSignOut}>
                        <i className="fa fa-user-circle"></i>
                        Sign Out
                    </button>
                ) : (
                    <a className="main-nav-item" href="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                )}
            </div>
        </nav>
    );
}
