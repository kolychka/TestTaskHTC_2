Layout.prototype.authLayout = `<form class="body authorization__form">						
                                <label class="font_weight_medium text-block font_size_m line-height_m authorization__elem_margin_b authorization__label">Вход</label>
                                <section class="authorization__inputs">
                                    <label>
                                        <input id="login" type="text" class="font-default text-block authorization__input-login-password input_line-bottom authorization__elem_margin_b" placeholder="Логин">
                                        <input id="password" type="password" class="font-default text-block authorization__input-login-password input_line-bottom authorization__elem_margin_b" placeholder="Пароль">
                                    </label>
                                    <input id="checkbox-remember" type="checkbox" class="checkbox checkbox_margins authorization__elem_margin_b ">
                                    <label for="checkbox-remember" class="font-default text-block authorization__elem_margin_b authorization__elem_margin_l">Запомнить</label>
                                    <label class="authorization__form_error display_none">Не удаётся войти. Пожалуйста, проверьте правильность написания логина и пароля.</label>
                                </section>
                                <button id="sign-in" class="font-default button-default button cursor_pointer authorization__button">Войти</button>
                            </form>`;