class Header extends Component {

    addEventListeners() {
        document.querySelector('#open-the-form-sign-in').addEventListener('click', () => this.callbacks.openForm());
        document.querySelector('.header__username').addEventListener('focusout', () => this.callbacks.usernameOnFocusoutHandler(headerUsername.innerHTML));
    }

}