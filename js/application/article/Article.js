class Article extends Component {

    addEventListeners() {
        const filmsButton = document.querySelector('#films-button');
        const tvChannelsButton = document.querySelector('#tv-channels-button');
        filmsButton.addEventListener('click', () => {
            // меняем классы у меню "Фильмы/Телеканалы"
            filmsButton.classList.add('active');
            tvChannelsButton.classList.remove('active');
            // меняем наполнение страницы
            this.callbacks.showFilms();
        });
        tvChannelsButton.addEventListener('click', () => {
            // меняем классы у меню "Фильмы/Телеканалы"
            filmsButton.classList.remove('active');
            tvChannelsButton.classList.add('active');
            // меняем наполнение страницы
            this.callbacks.showTVChannels();
        });
        /*document.getElementById('loginButton').addEventListener('click', () => this.loginButton());*/
    }


    loginButton() {
        // сначала что-то делаем про авторизацию (взять логин и пароль, провалидировать, решить: авторизовался или не очень)
        //...
        //this.callbacks.login();
    }
}