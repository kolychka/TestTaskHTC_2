class AuthorizationForm extends Component {

    addEventListeners() {
        /*document.getElementById('showFilms').addEventListener('click', () => this.callbacks.showFilms());
        document.getElementById('showTVChannels').addEventListener('click', () => this.callbacks.showTVChannels());
        document.getElementById('loginButton').addEventListener('click', () => this.loginButton());*/
        document.querySelector('#sign-in').addEventListener('click', (event) => {
            event.preventDefault();

            const formError = document.querySelector('.authorization__form_error');
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;

            this.callbacks.submitForm(formError, login, password);
        });
    }


/*    loginButton() {
        // сначала что-то делаем про авторизацию (взять логин и пароль, провалидировать, решить: авторизовался или не очень)
        //...
        //this.callbacks.login();
    }*/
}