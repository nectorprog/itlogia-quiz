import {Auth} from "../services/auth.js";
import {CustomHttp} from "../services/custom-http.js";
import config from "../../config/config.js";

export class Answers {
    constructor() {
        this.quiz = null;
        this.resAnsws = [];

        this.init();
    }

    async init() {
        const testId = localStorage.getItem('id');
        const userInfo = Auth.getUserInfo();
        if (!userInfo) {
            location.href = '#/'
        }

        try {
            const result = await CustomHttp.request(config.host + '/tests/' + testId + '/result/details?userId=' + userInfo.userId);

            if (result) {
                if (result.error) {
                    throw new Error(result.error);
                }

                this.quiz = result;

                this.resAnsws = JSON.parse(localStorage.getItem('results'));

                document.getElementById('next-link').innerText = this.quiz.test.name;

                const userInfoElement = document.getElementById('user-info');
                const userInfo = Auth.getUserInfo();
                if (!userInfo) {
                    location.href = '#/'
                }

                userInfoElement.innerHTML = '<span>Тест выполнил </span>'
                    + userInfo.fullName + ', '
                    + userInfo.email

                const testQuestionsElement = document.getElementById("test-questions");
                testQuestionsElement.className = "test-questions";
                testQuestionsElement.innerHTML = '';

                for (let i = 0; i < this.quiz.test.questions.length; i++) {

                    let currentQuestionObject = this.quiz.test.questions[i];

                    const testQuestionElement = document.createElement('div');
                    testQuestionElement.className = "test-question";

                    const testQuestionTitleElement = document.createElement('div');
                    testQuestionTitleElement.className = "test-question-title";
                    testQuestionTitleElement.innerHTML = '<span>Вопрос ' + (i + 1) + ':</span> ' + currentQuestionObject.question;

                    const optionsElement = document.createElement('div');
                    optionsElement.className = "test-question-options";

                    currentQuestionObject.answers.forEach(answer => {
                        const optionElement = document.createElement('div');
                        optionElement.className = "test-question-option";

                        const inputId = (i + 1) + '-answer-' + answer.id;
                        const inputElement = document.createElement('input');
                        inputElement.className = 'option-answer';
                        inputElement.setAttribute('id', inputId);
                        inputElement.setAttribute('type', 'radio');
                        inputElement.setAttribute('name', 'answer' + i);
                        inputElement.setAttribute('value', answer.id);
                        inputElement.setAttribute('disabled', "disabled");

                        if (answer.id === this.resAnsws[i]) {
                            inputElement.checked = true;

                            if (answer.correct) {
                                inputElement.classList.add('true');
                            } else {
                                inputElement.classList.add('false');
                            }
                        }

                        const labelElement = document.createElement('label');
                        labelElement.setAttribute('for', inputId);
                        labelElement.innerText = answer.answer;

                        optionElement.appendChild(inputElement);
                        optionElement.appendChild(labelElement);
                        optionsElement.appendChild(optionElement);

                        testQuestionElement.appendChild(testQuestionTitleElement);
                        testQuestionElement.appendChild(optionsElement);
                    });

                    testQuestionsElement.appendChild(testQuestionElement);
                }
                return;
            }
        } catch (error) {
            console.log(error);
        }
        location.href = '#/';
    }
}