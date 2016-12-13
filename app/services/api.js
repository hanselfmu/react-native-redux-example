/**
 * Created by chan on 12/13/16.
 */
const urlPrefix = '/api/';

const mockServerResponse = (ms = 2000) => new Promise(r => setTimeout(r, ms));

const request = async (url, method, body) => {
    let params = {
        credentials: 'same-origin',
        headers: {

            "Content-Type": 'application/json;charset=utf-8'
        },
        method
    }

    if (body) params.body = JSON.stringify(body);

    // A real API request wrapper might look like this:
    //
    //return fetch(`${urlPrefix}${url}`, params)
    //    .then(response => response.json())
    //    .catch(err => { console.log('error making request') })
    //
    // from my react-redux-starter-kit

    // But we are simply mocking a request so...
    await mockServerResponse();
    return {
        result: {
            code: 0
        }
    };
}

export default {
    saveQuestion: (question) => request('questions', 'POST', question)
}