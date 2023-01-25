export class Answers {
    constructor() {
        this.quiz = null;
        this.answs = [];
        this.resAnsws = [];

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://testologia.site/get-quiz?id=' + localStorage.getItem('id'), false);
        xhr.send();

        if (xhr.status === 200 && xhr.responseText) {
            try {
                this.quiz = JSON.parse(xhr.responseText);
            } catch (e) {
                location.href = 'index.html';
            }

            document.getElementById('next-link').innerText = this.quiz.name;

            const userInfoElement = document.getElementById('user-info');
            userInfoElement.innerHTML = '<span>Тест выполнил </span>'
                + localStorage.getItem('name') + ' '
                + localStorage.getItem('lastName') + ', '
                + localStorage.getItem('email');
        } else {
            location.href = 'index.html';
        }


        xhr.open('get', 'https://testologia.site/get-quiz-right?id=' + localStorage.getItem('id'), false);
        xhr.send();

        if (xhr.status === 200 && xhr.responseText) {
            try {
                this.answs = JSON.parse(xhr.responseText);
                this.resAnsws = JSON.parse(localStorage.getItem('results'));
            } catch (e) {
                location.href = 'index.html';
            }
        } else {
            location.href = 'index.html';
        }

        const testQuestionsElement = document.getElementById("test-questions");
        testQuestionsElement.className = "test-questions";
        testQuestionsElement.innerHTML = '';

        for (let i = 0; i < this.quiz.questions.length; i++) {

            let currentQuestionObject = this.quiz.questions[i];

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

                    if (answer.id === this.answs[i]) {
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
    }
}