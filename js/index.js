window.onload = function() {
    const ACTIVE_CLASS = 'active';
    const VISIBLE_CLASS = 'visible';
    const INVISIBLE_CLASS = 'invisible';
    const TABS_ITEM_SELECTOR = '.tabs__item';
    const DATA_ITEM_SELECTOR = '.data__item';

    const tabsItems = document.querySelectorAll(TABS_ITEM_SELECTOR);
    const dataItems = document.querySelectorAll(DATA_ITEM_SELECTOR);
    tabsItems.forEach(item => {
        item.addEventListener('click', function () {
            tabsItems.forEach(elem => elem.classList.remove(ACTIVE_CLASS));
            this.classList.add(ACTIVE_CLASS);
            dataItems.forEach(elem => {
                elem.classList.remove(VISIBLE_CLASS);
                elem.classList.add(INVISIBLE_CLASS);
            });
            const it = document.querySelector(`.${this.dataset.contentItem}`);
            it.classList.add(VISIBLE_CLASS);
            it.classList.remove(INVISIBLE_CLASS);
        });
    });

    const films = new Films();
    films.createFilms();

    const tvProgramm = new TVChannels();
    tvProgramm.createTVProgramm();

    const openTheFormSignIn = document.querySelector('#open-the-form-sign-in');
    const authorizationFade = document.querySelector('.authorization__fade');
    const unauthorHeader = document.querySelector('.unauthorized-header');
    const authorHeader = document.querySelector('.authorized-header');
    const headerUsername = document.querySelector('.header__username');
    const username = USERNAME.surname ? `${USERNAME.name} ${USERNAME.surname.charAt(0)}.` : USERNAME.name;

    function headerUsernameOnFocusoutHandler() {
        if (this.innerHTML.replace('^[^\s]*/', '')) {
            localStorage.setItem('username', this.innerHTML);
        }
    }

    function signInOnclickHandler(event) {
        event.preventDefault();
        const formError = document.querySelector('.authorization__form_error');
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;

        /*if (login && password
            && login.length >= 3 && login.length <= 16
            && password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})')*/ // для полной проверки пароля
        if (login && password) {

            const signOutButton = document.querySelector("#sign-out");
            authorHeader.classList.remove('display_none');
            unauthorHeader.classList.add('display_none');
            authorizationFade.classList.add('display_none');
            headerUsername.innerHTML = username;
            if (headerUsername) {
                if (localStorage.getItem('username')) {
                    headerUsername.innerHTML = localStorage.getItem('username');
                }
            }
            signOutButton.addEventListener('click', signOutOnclickHandler);
        } else {
            formError.classList.remove('display_none');
            setTimeout(() => { formError.classList.add('display_none'); }, 6000);
        }
    }

    function signOutOnclickHandler() {
        unauthorHeader.classList.remove('display_none');
        authorHeader.classList.add('display_none');
    }

    function openTheFormSignInHandler() {
        authorizationFade.innerHTML = popupWindow();
        authorizationFade.classList.remove('display_none');

        const authorizationForm = document.querySelector('.authorization__form');
        const authButton = document.querySelector(".authorization__button");
        const signIn = document.querySelector('#sign-in');

        authButton.addEventListener('click', signInOnclickHandler);
        authorizationFade.addEventListener('click', () => authorizationFade.classList.add('display_none'));
        authorizationForm.addEventListener('click', event => event.stopPropagation());
        signIn.addEventListener('click', signInOnclickHandler);
    }

    openTheFormSignIn.addEventListener('click', openTheFormSignInHandler);
    headerUsername.addEventListener('focusout', headerUsernameOnFocusoutHandler);
}