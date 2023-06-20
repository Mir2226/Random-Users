import { API_USERS } from './constants.js';

class FetchService {
    constructor(domain) {
        this.domain = domain;
    }

    async get(queryData = '') {
        try {
            const response = await fetch(`${this.domain}/${queryData}`)
            const data = response.json()
            return data;
        } catch(error) {
            console.log(error);
        }
    }
}

const randomuserAPI = new FetchService(API_USERS);

export {
    randomuserAPI
}