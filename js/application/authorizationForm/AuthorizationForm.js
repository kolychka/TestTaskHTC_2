class AuthorizationForm extends Component {

    addEventListeners() {
        document.querySelector('#sign-in').addEventListener('click', (event) => {
            event.preventDefault();

            const formError = document.querySelector('.authorization__form_error');
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;

            this.callbacks.submitForm(formError, login, password);
        });
    }

}