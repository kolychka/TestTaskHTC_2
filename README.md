# Комментарий к тестовому заданию

### Сделано: 
- Реализовано переключение между табами; 
- Реализован кастомный скроллбар; 
- Реализована возможность изменения имени пользователя (значение сохраняется в localStorage): 
    * При клике на имени пользователя вместо текущего значения появляется поле ввода; 
    * При этом в поле ввода сразу подставляется текущее значение; 
    * После снятия фокуса с поля ввода значение сохраняется на странице; 
    * Имя пользователя сохраняется при перезагрузке страницы. 
- Выполненное задание соответствует макету (в т.ч. чекбокс);
- Предоставленный макет свёрстан кроссбраузерно; 
- Выполнены требования по браузерам: Internet Explorer 11 (не проверено), edge и Chrome, Opera, Yandex Browser, Firefox последних версий. 

### Не сделано: 
- Не реализована адаптивная вёрстка и нормальная работа на мобильных устройствах; 
- Не проверено в IE11. 

### **GitHub ветки:** 
- **_work_** ― реализация тестового задания в функциональном стиле без использования библиотек, фреймворков сборщиков и пре-/постпроцессоров; 
- **_version-on-classes_** ― реализация тестового задания на классах; 
- **_react_** ― реализация тестового задания с использованием React.js (+библиотеки react-scrollbars-custom); 
- в ветку **master** заливается последняя рабочая версия (на данный момент из ветки react). 

### **По запуску проекта:** 
- Проект написан на реакте, поддерживает стандартные команды для запуска: **`npm install`, `npm start`.** 
- Авторизация: 
    * Требования к логину: 3 <= login.length <= 16;
    * Требования к паролю: 5 <= password.length <= 20;
    * Пример пары **Логин:Пароль: i_like@htc.cs : HTC_is_best**

    
# 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
