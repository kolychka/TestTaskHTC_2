class Header extends Component {

    addEventListeners() {
        /*document.getElementById('showFilms').addEventListener('click', () => this.callbacks.showFilms());
        document.getElementById('showTVChannels').addEventListener('click', () => this.callbacks.showTVChannels());*/
        document.querySelector('#open-the-form-sign-in').addEventListener('click', () => this.callbacks.openForm());
    }


/*    loginButton() {
        // сначала что-то делаем про авторизацию (взять логин и пароль, провалидировать, решить: авторизовался или не очень)
        //...
        //this.callbacks.login();
    }*/
}