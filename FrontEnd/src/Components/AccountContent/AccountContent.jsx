import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUsername,
  fetchUserProfile,
} from "../../redux/Profile/profileThunks";
import {
  updateUsernameStart,
  updateUsernameSuccess,
  updateUsernameFailure,
  setProfile,
} from "../../redux/Profile/profileSlice";

export default function AccountContent() {
  const dispatch = useDispatch();
  const { username, firstName, lastName, isLoading, error } = useSelector(
    (state) => state.profile
  );
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch, token]);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({
      username: "",
      firstName: "",
      lastName: "",
    });
  };

  const handleSaveClick = () => {
    dispatch(updateUsername(formData.username, token));
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="header">
        {isEditing ? (
          <>
            <h1 className="title-editing">Edit User Info</h1>
            <form className="edit-form">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                disabled={isLoading}
              />

              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled
                placeholder={firstName}
              />

              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled
                placeholder={lastName}
              />
            </form>
            <div className="button-container">
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
              <button
                className="save-button"
                onClick={handleSaveClick}
                disabled={isLoading}
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {firstName} {lastName}!
            </h1>
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>

        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>

        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>

        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
}
