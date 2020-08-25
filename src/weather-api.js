import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

// signInUser function
export function signInUser(user) {
    try {
        // make POST req to the auth/signin endpoint with user info
        return request.post(`${URL}/auth/signin`, user);
    } catch(e) {
        return { error: e.message }
    }
}