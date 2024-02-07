import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/Auth/authThunks";
import { fetchUserProfile } from "../../redux/Profile/profileThunks";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/argentBankLogo.png";
import userImg from "../../assets/user.png";

export default function Nav() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const username = useSelector((state) => state.profile.username);
    const token = useSelector((state) => state.auth.token); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated && token) {
            dispatch(fetchUserProfile(token));
        }
    }, [dispatch, isAuthenticated, token]);

    const handleSignOut = () => {
        dispatch(logoutUser());
        navigate("/login");
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
                    <div className="main-nav-item">
                        <div className="user">
                            <img src={userImg} alt="Img De Base d'un utilisateur" />
                            <p className="username">{username}</p>
                        </div>
                        <button className="button-styling" onClick={handleSignOut}>
                            <i className="fa fa-user-circle"></i>
                            Sign Out
                        </button>
                    </div>
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
