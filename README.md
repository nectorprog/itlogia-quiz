**SPA на VanillaJS**

Проект "АйтилогияQuiz" – это онлайн-платформа для проверки и улучшения знаний в области JavaScript. Участники могут пройти различные тесты, чтобы оценить свои навыки и получить обратную связь по своим результатам. 

--

<img width="1470" alt="image" src="https://github.com/nectorprog/itlogia-quiz/assets/109895680/5f8d88e0-921c-4de5-a149-8b24f8df64a9">
*Скриншот главной страницы*

Основные функции и возможности платформы:

1. **Регистрация и Авторизация**:
   - Пользователи могут регистрироваться, указывая свои имя, фамилию, электронную почту и пароль.
   - После регистрации, пользователи могут входить в свой аккаунт с использованием электронной почты и пароля.
   - Имеется система восстановления пароля для случаев, если пользователь его забыл.
   
2. **Выбор Тестов**:
   - После входа в систему, пользователи имеют доступ к разнообразным тестам по JavaScript.
   - Тесты разделены по уровням сложности и тематикам, так что каждый может найти что-то подходящее для себя.
   - После прохождения теста пользователи получают обратную связь: количество правильных ответов, процент успеха и рекомендации по дальнейшему изучению материала.

Этот проект создан для тех, кто хочет улучшить свои знания в области JavaScript, проверить свой текущий уровень и получить рекомендации для дальнейшего обучения.

---

### Структура проекта:
*Проект состоит из двух частей: frontend и backend. Ниже представлена структура каждой из частей.*

#### Backend:
- **config**
  - `config.js`
- **controllers**
  - `auth.controller.js`
  - `test.controller.js`
- **data**
  - `test-results.js`
  - `tests.json`
  - `users.json`
- **models**
  - `test-result.model.js`
  - `test.model.js`
  - `user.model.js`
- **routes**
  - `auth.routes.js`
  - `test.routes.js`
- **utils**
  - `middleware.utils.js`
  - `token.utils.js`
  - `validation.utils.js`
- `app.js`
- `package-lock.json`
- `package.json`

#### Frontend:
- **config**
  - `config.js`
- **scripts**
  - `common.js`
- **src**
  - **components**
  - **services**
  - **utils**
  - `app.js`
  - `router.js`
- **static**
  - **fonts**
  - **images**
- **styles**
  - `answers.css`
  - `choice.css`
  - `common.css`
  - `form.css`
  - `index.css`
  - `result.css`
  - `test.css`
- **templates**
  - `answers.html`
  - `choice.html`
  - `index.html`
  - `login.html`
  - `result.html`
  - `signup.html`
  - `test.html`
- `package-lock.json`
- `package.json`
- `webpack.config.js`

---

### Используемые технологии:

#### Backend:
- Node.js
- Express.js

#### Frontend:
- VanillaJS
- Webpack

---

### Инструкция по запуску:

#### Backend:
1. Установите все необходимые зависимости: `npm install`
2. Запустите сервер с помощью команды: `npm run start`

#### Frontend:
1. Установите все необходимые зависимости: `npm install`
2. Для сборки проекта используйте: `npm run build`
3. Чтобы увидеть изменения в реальном времени, используйте: `npm run dev`

---

### Используемые библиотеки:

#### Backend:
- @hapi/joi: ^17.1.1
- bcrypt: ^5.0.1
- cors: ^2.8.5
- express: ^4.18.1
- joi: ^17.8.3
- jsonwebtoken: ^8.5.1
- taffy: ^2.6.2
- taffydb: ^2.7.3

#### Frontend:
- @babel/core: ^7.20.12
- @babel/preset-env: ^7.20.2
- babel-loader: ^9.1.2
- copy-webpack-plugin: ^11.0.0
- html-webpack-plugin: ^5.5.0
- http-server: ^14.1.1
- webpack: ^5.75.0
- webpack-cli: ^5.0.1
- webpack-dev-server: ^4.11.1

---

### Примечание:
Сборка проекта осуществляется с помощью Webpack.

---

*Проект разработан с использованием SPA на VanillaJS. Благодарим за использование!*
