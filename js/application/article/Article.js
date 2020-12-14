class Article extends Component {

    constructor(options) {
        super(options);
        this.films = new Films({ 
            id: 'films', 
            parent: 'article-content',
            template: template.filmsTemplate,
            templateParams: NEW_FILMS_DATA
        });
        this.tvChannels = new TVChannels({ 
            id: 'tv-channels',
            parent: 'article-content',
            template: template.tvChannelsTemplate,
            templateParams: TV_PROGRAMM_DATA
        });
        // проинициализировать что-нибудь, что нам нужно
        this.tvChannels.hide();
    }
    
    showFilms() {
        this.tvChannels.hide();
        this.films.show();
    }

    showTVChannels() {
        this.films.hide();
        this.tvChannels.show();
    }

    addEventListeners() {
        const filmsButton = document.querySelector('#films-button');
        const tvChannelsButton = document.querySelector('#tv-channels-button');
        filmsButton.addEventListener('click', () => {
            // меняем классы у меню "Фильмы/Телеканалы"
            filmsButton.classList.add('active');
            tvChannelsButton.classList.remove('active');
            // меняем наполнение страницы
            this.showFilms();
        });
        tvChannelsButton.addEventListener('click', () => {
            // меняем классы у меню "Фильмы/Телеканалы"
            filmsButton.classList.remove('active');
            tvChannelsButton.classList.add('active');
            // меняем наполнение страницы
            this.showTVChannels();
        });
        /*document.getElementById('loginButton').addEventListener('click', () => this.loginButton());*/
    }


/*    loginButton() {
        // сначала что-то делаем про авторизацию (взять логин и пароль, провалидировать, решить: авторизовался или не очень)
        //...
        //this.callbacks.login();
    }*/
}