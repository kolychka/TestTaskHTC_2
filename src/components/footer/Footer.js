import React from 'react';
import '../css/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <section className="footer-container footer-container_paddings footer-container_margin_t background_gray">
                <section className="display_j-c_center">
                    <footer className="footer">
                        <img className="footer__img footer__img_margin_r" src="images/site-logotypes/htc-cs-logo.png" alt="Центр Высоких Технологий" />
                        <section>
                            <section className="footer_contact_margin">
                                <label className="text-block footer__text_padding">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</label>
                                <label className="text-block footer__text_padding">+7 (3412) 93-88-61, 43-29-29</label>
                            </section>
                            <a className="text-block font_weight_medium" href="https://htc-cs.ru/">htc-cs.ru</a>
                        </section>
                    </footer>
                </section>
            </section>
        );
    }
}

export default Footer;