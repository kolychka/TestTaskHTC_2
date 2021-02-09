import React from 'react';

class Article extends React.Component {
    render() {
        return (
            <section className="display_j-c_center main__section_margin">
                <section id="article-content">
                    <header>
                        <nav>
                            <ul className="tabs tabs_padding_l tabs_margin_vert font_weight_medium font_size_l line-height_m">
                                <li id="films-button" data-content-item="films" className="tabs__item tabs__item_margin_r cursor_pointer active">Фильмы</li>
                                <li id="tv-channels-button" data-content-item="tv-channels" className="tabs__item tabs__item_margin_r cursor_pointer">Телеканалы</li>
                            </ul>
                        </nav>
                    </header>
                </section>
            </section>
        );
    }
}

export default Article; 