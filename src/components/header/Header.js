import React from 'react';

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

    authorizedHeader() {
        if (this.state.authStatus) {
            return (
                <section className="authorized-header">
                    <label className="header__username font_weight_medium cursor_pointer" contenteditable="true">{this.addUsername()}</label>
                    <button 
                        className="font-default button-default button-text cursor_pointer"
                        onClick={(event) => this.onSignOut(event)}
                    >Выйти</button>
                </section>
            )
        }
        return (
            <section className="unauthorized-header">
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
                    <header className="header header_size header_padding">
                        <section>
                            <img src="images/site-logotypes/logo.png" alt="Видеосервис" />
                        </section>
                        <section>
                            <label><input className="font-default search search_color search_margins input_line-bottom" type="text" placeholder="Поиск..." /></label>
                            <button className="font-default button-default button-text cursor_pointer">Найти</button>
                        </section>
                        <section>
                            {this.authorizedHeader()}
                        </section>
                    </header>
                </section>
            </section>
        );
    }
}

export default Header;