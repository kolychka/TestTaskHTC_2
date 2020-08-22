const unauthorizedHeader = () => `<button id="open-the-form-sign-in" class="font-default button-default button cursor_pointer">Войти</button>`;

const authorizedHeader = name => `<label class="font_weight_medium cursor_pointer">${name}</label>
                        <button id="sign-out" class="font-default button-default button-text cursor_pointer">Выйти</button>`;

const popupWindow = () => `<div class="fade authorization__fade"></div>
                        <form class="authorization__form">
                            <label class="font_weight_medium text-block font_size_m line-height_m authorization__elem_margin_b authorization__label">Вход</label>
                            <section class="authorization__inputs">
                                <label>
                                    <input type="text" class="font-default text-block authorization__input-login-password input_line-bottom authorization__elem_margin_b" placeholder="Логин">
                                    <input type="text" class="font-default text-block authorization__input-login-password input_line-bottom authorization__elem_margin_b" placeholder="Пароль">
                                </label>
                                <input id="checkbox-remember" type="checkbox" class="checkbox checkbox_margins authorization__elem_margin_b ">
                                <label for="checkbox-remember" class="font-default text-block authorization__elem_margin_b authorization__elem_margin_l">Запомнить</label>
                            </section>
                            <button id="sign-in" class="font-default button-default button cursor_pointer authorization__button">Войти</button>
                        </form>`;