import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

// signInUser function
export function signInUser(user) {
    try {
        // make POST req to the auth/signin endpoint with user info
        return request.post(`${URL}/auth/signin`, user);
    } catch (e) {
        return { error: e.message }
    }
}

// signUpUser function
export function signUpUser(user) {
    try {
        // make POST req to the auth/signup endpoint with user info
        return request.post(`${URL}/auth/signup`, user);
    } catch (e) {
        return { error: e.message }
    }
}

//capitalized TOKEN = localStorage token
export function fetchAllWeather(id) {
    try {
        const token = localStorage.getItem('TOKEN');

        return request.get(`${URL}/api/weather/${id}`)
            .set('Authorization', token);

    } catch (e) {
        return { error: e.message }
    }
}