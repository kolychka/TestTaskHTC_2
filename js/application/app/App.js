class App extends Component {

    constructor(options) {
        super(options);
        this.authorizationForm = new AuthorizationForm({ 
            id: 'authorization',
            parent: this.id,
            template: template.authorizationFormTemplate,
            callbacks: {
                submitForm: (formError, login, password) => this.submitForm(formError, login, password) // отправить логин и пароль на проверку
                // показать сообщение об ошибке
            }
        });
        this.header = new Header({ 
            id: 'header', 
            parent: this.id,
            template: template.headerTemplate,
            templateParams: {
                USERNAME,
                /*authorized : false*/
            },
            callbacks: {
                openForm: () => this.openForm(), // открыть окно формы
                signIn: () => this.signIn() // скрыть кнопку "войти", открыть имя и кнопку "выйти"
            }
        });
        this.article = new Article({
            id: 'article',
            parent: this.id,
            template: template.articleTemplate,
            templateParams: NEW_FILMS_DATA
        });
        this.footer = new Footer({
            id: 'footer',
            parent: this.id,
            template: template.footerTemplate,
            classNames: 'siski and asses', // ПОПРАВИТЬ ВЁРСТКУ! О-ЛО-ЛО!
        });
        this.authorizationForm.hide();
    }

    visible(elem) {
        elem.classList.remove('display_none');
    }
    invisible(elem) {
        elem.classList.add('display_none');
    }

    openForm() {
        this.authorizationForm.show();
    }

    signIn() {
        return true;
    }

    submitForm(formError, login, password) {
        if (login && password
            && login.length >= 3 && login.length <= 16
            && password.length >= 5 && password.length <= 20
            /*password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})')*/ // для полной проверки пароля
        ) {
            /*const signOutButton = document.querySelector("#sign-out");
            authorHeader.classList.remove('display_none');
            unauthorHeader.classList.add('display_none');
            authorizationFade.classList.add('display_none');
            headerUsername.innerHTML = username;
            if (headerUsername) {
                if (localStorage.getItem('username')) {
                    headerUsername.innerHTML = localStorage.getItem('username');
                }
            }
            signOutButton.addEventListener('click', signOutOnclickHandler);*/
            console.log('получилось', formError, login, password);
            // this.visible(document.querySelector('.authorized-header'));
            // this.invisible(document.querySelector('.unauthorized-header'));
            this.authorizationForm.hide();
        } else {
            console.log('не получилось', formError, login, password);
            formError.classList.remove('display_none');
            setTimeout(() => { formError.classList.add('display_none'); }, 6000);
        }
    }

}