import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        
        this.setNeedToLogin = props.setNeedToLogin;
    }

    onSignIn(event) {
        event.preventDefault();
        
        this.setNeedToLogin(true); // открыть форму авторизации

    }

    render() {
        const username = 'Константин К.';
    
        function addUsername() {
            return localStorage.getItem('username') ? localStorage.getItem('username') : username;
        }
    
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
                            <section className="authorized-header display_none">
                                <label className="header__username font_weight_medium cursor_pointer" contenteditable="true">{addUsername()}</label>
                                <button id="sign-out" className="font-default button-default button-text cursor_pointer">Выйти</button>
                            </section>
                            <section className="unauthorized-header">
                                <button 
                                    className="font-default button-default button cursor_pointer"
                                    onClick={(event) => this.onSignIn(event)}
                                    >Войти</button>
                            </section>
                        </section>
                    </header>
                </section>
            </section>
        );
    }
}

export default Header;