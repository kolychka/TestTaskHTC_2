Template.prototype.headerTemplate = (USERNAME/*, authorized*/) => {

    const headerUsername = document.querySelector('.header__username');
    const username = USERNAME.surname ? `${USERNAME.name} ${USERNAME.surname.charAt(0)}.` : USERNAME.name;

    function headerUsernameOnFocusoutHandler() {
        if (this.innerHTML.replace('^[^\s]*/', '')) {
            localStorage.setItem('username', this.innerHTML);
        }
    }

    function addUsername() {
        headerUsername.innerHTML = username;
        if (headerUsername) {
            if (localStorage.getItem('username')) {
                headerUsername.innerHTML = localStorage.getItem('username');
            }
        }
    }

    function authorizedHeader() {
        if (0) {
            return `<section class="authorized-header display_none">
                        <label class="header__username font_weight_medium cursor_pointer" contenteditable="true"></label>
                        <button id="sign-out" class="font-default button-default button-text cursor_pointer">Выйти</button>
                    </section>`;
        } else {
            return `<section class="unauthorized-header">
                        <button id="open-the-form-sign-in" class="font-default button-default button cursor_pointer">Войти</button>
                    </section>`;
        }
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
                    ${authorizedHeader()}
                    <!--<section class="authorized-header display_none">
                        <label class="header__username font_weight_medium cursor_pointer" contenteditable="true"></label>
                        <button id="sign-out" class="font-default button-default button-text cursor_pointer">Выйти</button>
                    </section>-->
                    <!--<section class="unauthorized-header">
                        <button id="open-the-form-sign-in" class="font-default button-default button cursor_pointer">Войти</button>
                    </section>-->
                </section>
            </header>
        </section>
    </section>`;

}