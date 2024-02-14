import { loginBegin, loginSuccessfull, loginFailure, logout } from './authSlice';

export const checkLoggedInUser = () => async (dispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
        dispatch(loginSuccessfull({ token }));
    } else {
        dispatch(logout());
    }
};

export const loginUser = (email, password, navigation) => async (dispatch) => {
    try {
        dispatch(loginBegin());

        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Mots de Passe Et / Ou Email Incorrect(s)');
        }

        if (response.status === 200) {
            const data = await response.json();
            console.log(data);

            localStorage.setItem('token', data.body.token);

            dispatch(loginSuccessfull({ token: data.body.token }));
            navigation('/profile');
        }

    } catch (error) {
        dispatch(loginFailure('Username ou mot de passe Incorrect(s)'));
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(logout());
};
