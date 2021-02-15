import React from 'react';
import '../css/header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        
        this.openCloseAuthForm = props.openCloseAuthForm;
        this.state = {
            authStatus: props.authStatus
        };
    }

    onSignIn(event) {
        event.preventDefault();
        this.openCloseAuthForm(true); // открыть форму авторизации
    }

    onSignOut(event) {
        event.preventDefault();
        this.setState({ authStatus: false });
    }

    addUsername() {
        return localStorage.getItem('username') ? localStorage.getItem('username') : 'Константин К.';
    }

    usernameOnBlurHandler(event) { // сохраняем в localStorage имя пользователя после изменения
        const username = event.target.innerHTML; // Берёт значение со страницы.
        let name = username.replaceAll('&nbsp;', ''); // Удаляет неразрывные пробелы, которые ставятся в начале и конце строки.
        name = name.trim(); // Удаляет обычные пробелы в начале и конце строки.
        if (name !== '') {
            localStorage.setItem('username', name);
        }
    }

    authorizedHeader() {
        if (this.state.authStatus) {
            // suppressContentEditableWarning={true} прячет ошибку реакта (suppress that warning) при использовании contentEditable={true}
            return (
                <section>
                    <label 
                        contentEditable={true}
                        suppressContentEditableWarning={true} 
                        className="header__username_margin_r font_weight_medium cursor_pointer" 
                        onBlur={this.usernameOnBlurHandler}
                    >{this.addUsername()}</label>
                    <button 
                        className="font-default button-default button-text cursor_pointer"
                        onClick={(event) => this.onSignOut(event)}
                    >Выйти</button>
                </section>
            )
        }
        return (
            <section>
                <button 
                    className="font-default button-default button cursor_pointer"
                    onClick={(event) => this.onSignIn(event)}
                >Войти</button>
            </section>
        )
    }

    render() {
        return (
            <section className="display_j-c_center">
                <section className="header-container">
                    <header className="header header_padding">
                        <section>
                            <img src="images/site-logotypes/logo.png" alt="Видеосервис" />
                        </section>
                        <section>
                            <label><input className="font-default search search_color search_margins input_line-bottom" type="text" placeholder="Поиск..." /></label>
                            <button className="font-default button-default button-text cursor_pointer">Найти</button>
                        </section>
                        <section className="header__authorization-element">
                            {this.authorizedHeader()}
                        </section>
                    </header>
                </section>
            </section>
        );
    }
}

export default Header;