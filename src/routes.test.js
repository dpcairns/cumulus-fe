// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

require('dotenv').config();
const { execSync } = require('child_process');
const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');
describe('routes', () => {
    let token;
    const newWeather = {
        location: '',
        state_code: '',
        country_code: '',
        lat: '',
        lon: ''
    };
    beforeAll(async done => {
        execSync('npm run setup-db');
        client.connect();
        const signInData = await fakeRequest(app)
            .post('/auth/signup')
            .send({
                email: 'jon@user.com',
                password: '1234'
            });
        token = signInData.body.token;
        return done();
    });
    afterAll(done => {
        return client.end(done);
    });
    test('returns a new weather when creating new request', async (done) => {
        const data = await fakeRequest(app)
            .post('/api/weather')
            .send(newWeather)
            .set('Authorization', token)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(data.body).toEqual(newWeather);
        done();
    });
    test('returns all detail of favorite weather for the user when hitting GET /api/weather/:id', async (done) => {
        const expected = [
            {
                location: '',
                country_code: '',
                state_code: '',
                uv: '',
                weather_description: '',
                timezone: '',
                temp: '',
                sunrise: '',
                sunset: '',
                lat: '',
                lon: '',
            },
        ];
        const data = await fakeRequest(app)
            .get('/api/guitars')
            .set('Authorization', token)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(data.body).toEqual(expected);
        done();
    });
    test('returns a single weather for the user when hitting GET (`https://api.weatherbit.io/v2.0/current?key=${process.env.WEATHERBIT_API_KEY}&city=${city}&state=${state}&country=${country}', async (done) => {
        const expected = {
            location: 'Portland',
            country_code: 'US',
            state_code: 'Oregon',
            uv: 2,
            weather_description: 'cloudy',
            timezone: 'America/Los_Angeles',
            temp: '24.19',
            sunrise: '10:44',
            sunset: '23:47',
            lat: '45.5234515',
            lon: '-122.6762071 ',
        };
        const data = await fakeRequest(app)
            .get('/api/weather/4')
            .set('Authorization', token)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(data.body).toEqual(expected);
        done();
    });
});

