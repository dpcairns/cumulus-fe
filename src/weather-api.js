import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function signInUser(user) {
    try {
        return request.post(`${URL}/auth/signin`, user);
    } catch (e) {
        return { error: e.message }
    }
}

export function signUpUser(user) {
    try {
        return request.post(`${URL}/auth/signup`, user);
    } catch (e) {
        return { error: e.message }
    }
}

export function fetchSearchedWeather({ city, state, country }) {
    const token = localStorage.getItem('TOKEN');

    return request
        .get(`${URL}/api/search/?key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&city=${city}&state=${state}&country=${country}`)
        .set('Authorization', token);
}

export function fetchFavoriteWeather(id) {
    try {
        const token = localStorage.getItem('TOKEN');

        return request.get(`${URL}/api/weather/${id}`)
            .set('Authorization', token);

    } catch (e) {
        return { error: e.message }
    }
}

export function fetchAllWeather() {
    try {
        const token = localStorage.getItem('TOKEN');

        return request.get(`${URL}/api/weather`)
            .set('Authorization', token);

    } catch (e) {
        return { error: e.message }
    }
}

export function addFavorite(weatherItem) {
    const token = localStorage.getItem('TOKEN');

    return request
        .post(`${URL}/api/weather`, weatherItem)
        .set('Authorization', token);
}

export function deleteFavorite(id) {
    const token = localStorage.getItem('TOKEN');

    return request
        .delete(`${URL}/api/weather/${id}`)
        .set('Authorization', token);
}