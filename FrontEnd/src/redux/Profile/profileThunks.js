import { setProfile, updateUsernameStart, updateUsernameSuccess, updateUsernameFailure } from './profileSlice';

export const fetchUserProfile = (token) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();

        dispatch(setProfile({
            username: data.body.userName,
            firstName: data.body.firstName,
            lastName: data.body.lastName,
        }));
    } catch (error) {
        console.error('Error fetching user profile:', error.message);
    }
};

export const updateUsername = (newUsername, token) => async (dispatch) => {
    try {
        dispatch(updateUsernameStart());

        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName: newUsername }),
        });

        if (!response.ok) {
            throw new Error('Failed to update username');
        }

        const data = await response.json();

        dispatch(updateUsernameSuccess({ username: data.body.userName }));
    } catch (error) {
        dispatch(updateUsernameFailure(error.message));
    }
};
