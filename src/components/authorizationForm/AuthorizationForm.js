function AuthorizationForm() {
    return (
        // <div classNameName="AuthorizationForm">AuthorizationForm</div>
        <section id="authorization" className="authorization__fade">
            <form className="body authorization__form">						
                <label className="font_weight_medium text-block font_size_m line-height_m authorization__elem_margin_b authorization__label">Вход</label>
                <section className="authorization__inputs">
                    <label>
                        <input id="login" type="text" className="font-default text-block authorization__input-login-password input_line-bottom authorization__elem_margin_b" placeholder="Логин" />
                        <input id="password" type="password" className="font-default text-block authorization__input-login-password input_line-bottom authorization__elem_margin_b" placeholder="Пароль" />
                    </label>
                    <input id="checkbox-remember" type="checkbox" className="checkbox checkbox_margins authorization__elem_margin_b" />
                    <label for="checkbox-remember" className="font-default text-block authorization__elem_margin_b authorization__elem_margin_l">Запомнить</label>
                    <label className="authorization__form_error display_none">Не удаётся войти. Пожалуйста, проверьте правильность написания логина и пароля.</label>
                </section>
                <button id="sign-in" className="font-default button-default button cursor_pointer authorization__button">Войти</button>
            </form>
        </section>
    );
}

export default AuthorizationForm;