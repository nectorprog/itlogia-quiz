import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";
import {Test} from "./test.js";
import {Auth} from "../services/auth.js";

export class Result {
    constructor() {

        this.init();
    }

    async init() {
        const testId = localStorage.getItem('id');
        const userInfo = Auth.getUserInfo();
        if (!userInfo) {
            location.href = '#/'
        }

        try {
            const result = await CustomHttp.request(config.host + '/tests/' + testId + '/result?userId=' + userInfo.userId);

            if (result) {
                if (result.error) {
                    throw new Error(result.error);
                }
                document.getElementById('result-score').innerText = result.score + '/' + result.total;
                // location.href = '#/result';
                return;
            }
        } catch (error) {
            console.log(error);
        }
        location.href = '#/';
    }
}