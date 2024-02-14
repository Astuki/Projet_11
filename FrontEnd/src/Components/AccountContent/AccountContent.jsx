import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUsername,
  fetchUserProfile,
} from "../../redux/Profile/profileThunks";

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
  const [validationError, setValidationError] = useState(null);

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
    if (!formData.username.trim()) {
      setValidationError("Votre Username ne peut pas être vide");
      return;
    }

    const usernameRegex = /^[a-zA-Z]{3,}$/;
    if (!usernameRegex.test(formData.username)) {
      setValidationError("Votre Username doit contenir plus de 3 lettres, aucun chiffres ou caractères spéciaux");
      return;
    }

    dispatch(updateUsername(formData.username, token));
    setIsEditing(false);
    setValidationError(null); // Clear erreur validation avec Regex
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValidationError(null);
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
            {validationError && (
                <p className="error-message">{validationError}</p>
              )}
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
    </>
  );
}
