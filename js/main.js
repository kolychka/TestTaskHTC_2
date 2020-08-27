window.onload = function() {
    const ACTIVE_CLASS = 'active';
    const VISIBLE_CLASS = 'visible';
    const INVISIBLE_CLASS = 'invisible';
    const TABS_ITEM_SELECTOR = '.tabs__item';
    const DATA_ITEM_SELECTOR = '.data__item';

    const tabsItems = document.querySelectorAll(TABS_ITEM_SELECTOR);
    const dataItems = document.querySelectorAll(DATA_ITEM_SELECTOR);
    tabsItems.forEach(item => {
        item.onclick = function () {
            tabsItems.forEach(elem => elem.classList.remove(ACTIVE_CLASS));
            this.classList.add(ACTIVE_CLASS);
            dataItems.forEach(elem => {
               elem.classList.remove(VISIBLE_CLASS);
               elem.classList.add(INVISIBLE_CLASS);
            });
            const it = document.querySelector(`.${this.dataset.contentItem}`);
            it.classList.add(VISIBLE_CLASS);
            it.classList.remove(INVISIBLE_CLASS);
        }
    });

    const newFilms = document.querySelector('.movie');
    NEW_FILMS_DATA.forEach(el => newFilms.innerHTML += newFilmsItem(el));
    newFilms.lastChild.classList.remove('movie__img_margins');
    newFilms.lastChild.classList.add('movie__img_margins_last-child');

    const tvChannels = document.querySelector('.tv-channels');
    TV_PROGRAMM_DATA.forEach(el => tvChannels.innerHTML += newTVChannelsItem(el));
    /* добавить проверику на наличие элемента */
    const tvChannelsImgSection = document.querySelectorAll('.tv-channels__img-section');
    tvChannelsImgSection.forEach((elem, i) =>
        tvChannelsImgSection[i].innerHTML = tvChannelsImg(TV_PROGRAMM_DATA[i].img));
    /* добавить проверику на наличие элемента */
    const tvChannelsTVProgramm = document.querySelectorAll('.tv-channels__tv-programm');
    tvChannelsTVProgramm.forEach((elem, i) => {
        TV_PROGRAMM_DATA[i].programm.forEach(el => tvChannelsTVProgramm[i].innerHTML += tvChannelsTVProgrammItem(el));
        tvChannelsTVProgramm[i].firstChild.classList.add('font_color_red');
    });

    const authorizationFadeContainer = document.querySelector('.authorization__fade-container');
    const authorHeader = document.querySelector('.authorized-header');
    const authorHeaderUsername = document.querySelector('.header__username');
    const unauthorHeader = document.querySelector('.unauthorized-header');
    const name = USERNAME.surname !== '' ? USERNAME.name + ' ' + USERNAME.surname[0] + '.' : USERNAME.name;

    function signInOnclickHandler(event) {
        event.preventDefault();
        authorHeader.classList.remove('display_none');
        unauthorHeader.classList.add('display_none');
        authorizationFadeContainer.classList.add('display_none');

        authorHeaderUsername.innerHTML = name;
        const signOut = document.querySelector('#sign-out');
        signOut.onclick = signOutOnclickHandler;
    }

    function signOutOnclickHandler() {
        unauthorHeader.classList.remove('display_none');
        authorHeader.classList.add('display_none');
    }

    function openTheFormSignInHandler() {
        authorizationFadeContainer.classList.remove('display_none');
        authorizationFadeContainer.innerHTML = popupWindow();
        const signIn = document.querySelector('#sign-in');
        signIn.onclick = signInOnclickHandler;
    }
    const openTheFormSignIn = document.querySelector('#open-the-form-sign-in');
    openTheFormSignIn.onclick = openTheFormSignInHandler;
}
