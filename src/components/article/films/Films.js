import React from 'react';
import data from '../../../data/films.js';
import '../../css/movie.css';
import '../../css/genres.css';

class Films extends React.Component {
    render() {
        return (
            <article>
                <section>
                    <section className="font_weight_medium font_size_m line-height_s">
                        <img src="images/emoji/fire.png" alt="" />
                        <label> Новинки</label>
                    </section>
                    <section className="movie movie_margins">{
                        data.map((film, i) => {
                            return (
                                <section key={i} className="movie__item">
                                    <div className="movie__img-container movie__img-container_margin_b cursor_pointer">
                                        <div className="movie__img">
                                            <img className="movie__img_border-radius" src={`images/posters/${film.img}`} alt="" />
                                        </div>
                                        <div className="fade movie__fade movie__fade_text">{film.annotation}</div>
                                    </div>
                                    <div className="movie__title">
                                        <label className="font_size_s line-height_xs">{film.title}</label>
                                    </div>
                                </section>
                            )
                        })
                    }</section>
                </section>
                <section>
                    <section className="font_weight_medium font_size_m line-height_s">
                        <label>Жанры</label>
                    </section>
                    <section className="genres genres_margins">
                        <div className="genres__item genres__item_background_1 cursor_pointer">
                            <img className="genres__img" src="images/emoji/comedy.png" alt="" />
                            <label className="genres__title font_size_s line-height_xs">Комедии</label>
                        </div>
                        <div className="genres__item genres__item_background_2 cursor_pointer">
                            <img className="genres__img" src="images/emoji/dramas.png" alt="" />
                            <label className="genres__title font_size_s line-height_xs">Драмы</label>
                        </div>
                        <div className="genres__item genres__item_background_3 cursor_pointer">
                            <img className="genres__img" src="images/emoji/fantastic.png" alt="" />
                            <label className="genres__title font_size_s line-height_xs">Фантастика</label>
                        </div>
                        <div className="genres__item genres__item_background_4 cursor_pointer">
                            <img className="genres__img" src="images/emoji/horrors.png" alt="" />
                            <label className="genres__title font_size_s line-height_xs">Ужасы</label>
                        </div>
                    </section>
                </section>
            </article>
        );
    }
}

export default Films;