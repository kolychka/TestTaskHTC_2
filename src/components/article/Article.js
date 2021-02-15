import React from 'react';
import Films from './films/Films';
import TVChannels from './tvChannels/TVChannels';
import '../css/tabs.css';
import '../css/article.css';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'films',
        }
    }

    render() {
        return (
            <section className="article">
                <section className="display_j-c_center main__section_margin">
                    <section>
                        <header>
                            <nav>
                                <ul className="tabs tabs_padding_l tabs_margins font_weight_medium font_size_l line-height_m">
                                    <li 
                                        className={"tabs__item_margin_r cursor_pointer" + 
                                            (this.state.activeTab === 'films' ? " active" : "")}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            this.setState({ activeTab: 'films' });
                                        }}
                                    >Фильмы</li>
                                    <li 
                                        className={"cursor_pointer" + 
                                            (this.state.activeTab === 'tvChannels' ? " active" : "")}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            this.setState({ activeTab: 'tvChannels' });
                                        }}
                                    >Телеканалы</li>
                                </ul>
                            </nav>
                        </header>
                    </section>
                </section>
                <section className="article-content">
                    {this.state.activeTab === 'films' ? 
                        <Films></Films> : 
                        <TVChannels></TVChannels>
                    }
                </section>
            </section>
        );
    }
}

export default Article; 