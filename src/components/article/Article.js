import React from 'react';
import Films from './films/Films';
import TVChannels from './tvChannels/TVChannels';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuTab: 'films',
        }
    }

    render() {
        return (
            <section>
                <section className="display_j-c_center main__section_margin">
                    <section id="article-content">
                        <header>
                            <nav>
                                <ul className="tabs tabs_padding_l tabs_margin_vert font_weight_medium font_size_l line-height_m">
                                    <li id="films-button" data-content-item="films" className="tabs__item tabs__item_margin_r cursor_pointer active"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            this.setState({menuTab: 'films'});
                                        }}
                                    >Фильмы</li>
                                    <li id="tv-channels-button" data-content-item="tv-channels" className="tabs__item tabs__item_margin_r cursor_pointer"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            this.setState({menuTab: 'tvChannels'});
                                        }}
                                    >Телеканалы</li>
                                </ul>
                            </nav>
                        </header>
                    </section>
                </section>
                {this.state.menuTab === 'films' ? 
                    <Films></Films> : 
                    <TVChannels></TVChannels>
                }
            </section>
        );
    }
}

export default Article; 