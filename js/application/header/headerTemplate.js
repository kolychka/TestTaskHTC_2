Template.prototype.headerTemplate = () => {

    const username = USERNAME.surname ? `${USERNAME.name} ${USERNAME.surname.charAt(0)}.` : USERNAME.name;

    function addUsername() {
        return localStorage.getItem('username') ? localStorage.getItem('username') : username;
    }

    return `<section class="display_j-c_center">
        <section class="header-container">
            <header class="header header_size header_padding">
                <section>
                    <img src="images/site-logotypes/logo.png" alt="Видеосервис">
                </section>
                <section>
                    <label><input class="font-default search search_color search_margins input_line-bottom" type="text" placeholder="Поиск..."></label>
                    <button class="font-default button-default button-text cursor_pointer">Найти</button>
                </section>
                <section>
                    <section class="authorized-header display_none">
                        <label class="header__username font_weight_medium cursor_pointer" contenteditable="true">${addUsername()}</label>
                        <button id="sign-out" class="font-default button-default button-text cursor_pointer">Выйти</button>
                    </section>
                    <section class="unauthorized-header">
                        <button id="open-the-form-sign-in" class="font-default button-default button cursor_pointer">Войти</button>
                    </section>
                </section>
            </header>
        </section>
    </section>`;
}