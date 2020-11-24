/*
function Authorization(openTheFormSignIn, authorizationFade, unauthorHeader, authorHeader, headerUsername, username) {

    this.headerUsernameOnFocusoutHandler = function () {
        if (this.innerHTML.replace('^[^\s]*!/', '')) {
            localStorage.setItem('username', this.innerHTML);
        }
    }

    this.signInOnclickHandler = function (event) {
        event.preventDefault();
        const formError = document.querySelector('.authorization__form_error');
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;

        if (login && password
            && login.length >= 3 && login.length <= 16
            && password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})')
        ) {
            const signOut = document.querySelector('#sign-out');
            authorHeader.classList.remove('display_none');
            unauthorHeader.classList.add('display_none');
            authorizationFade.classList.add('display_none');
            headerUsername.innerHTML = username;
            if (headerUsername) {
                if (localStorage.getItem('username')) {
                    headerUsername.innerHTML = localStorage.getItem('username');
                }
            }
            signOut.onclick = signOutOnclickHandler;
        } else {
            formError.classList.remove('display_none');
            setTimeout(() => { formError.classList.add('display_none'); }, 6000);
        }
    }

    this.signOutOnclickHandler = function () {
        unauthorHeader.classList.remove('display_none');
        authorHeader.classList.add('display_none');
    }

    this.openTheFormSignInHandler = function () {
        authorizationFade.innerHTML = popupWindow();
        authorizationFade.classList.remove('display_none');

        const authorizationForm = document.querySelector('.authorization__form');
        const signIn = document.querySelector('#sign-in');

        authorizationFade.onclick = () => authorizationFade.classList.add('display_none');
        authorizationForm.onclick = event => event.stopPropagation();
        signIn.onclick = signInOnclickHandler;
    }

}*/
