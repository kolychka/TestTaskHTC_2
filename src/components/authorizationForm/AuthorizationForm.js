import React from 'react';
import '../css/authorization.css';

class AuthorizationForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.openCloseAuthForm = props.openCloseAuthForm;
        this.authResult = props.authResult;
    }

    onLogin(event) {
        event.preventDefault();
        // const formError = document.querySelector('.authorization__form_error');
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;

        if (login && password
            && login.length >= 3 && login.length <= 16
            && password.length >= 5 && password.length <= 20
        ) {
            this.authResult(true);
        } else {

            this.authResult(false);

            console.log('показать страшную ошибку');
        }
    }

    render() {
        return (
            <section 
                className="authorization__fade"
                onClick={(event) => {
                    event.preventDefault();
                    this.openCloseAuthForm(false); // закрыть форму авторизации
                }}
            >
                <form className="body authorization__form"
                    onClick={event => event.stopPropagation()} // останавливаем всплытие, чтобы форма не закрылась случайно
                >
                    <label className="font_weight_medium text-block font_size_m line-height_m authorization__elem_margin_b authorization__label">Вход</label>
                    <section className="authorization__inputs">
                        <label>
                            <input id="login" type="text" className="font-default text-block authorization__input-login-password input_line-bottom authorization__elem_margin_b" placeholder="Логин" />
                            <input id="password" type="password" className="font-default text-block authorization__input-login-password input_line-bottom authorization__elem_margin_b" placeholder="Пароль" />
                        </label>
                        <input id="checkbox-remember" type="checkbox" className="checkbox checkbox_margins authorization__elem_margin_b" />
                        <label htmlFor="checkbox-remember" className="font-default text-block authorization__elem_margin_b authorization__elem_margin_l">Запомнить</label>
                        <label className="authorization__form_error display_none">Не удаётся войти. Пожалуйста, проверьте правильность написания логина и пароля.</label>
                    </section>
                    <button 
                        className="font-default button-default button cursor_pointer authorization__button" 
                        onClick={(event) => this.onLogin(event)}
                    >Войти</button>
                </form>
            </section>
        );
    }
}

export default AuthorizationForm;