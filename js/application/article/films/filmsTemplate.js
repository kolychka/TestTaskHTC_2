Template.prototype.filmsTemplate = (data) => {

    let str = '';
    data.forEach((film, i) => {
        let imgMargins = '';
        if (data.length - 1 === i) {
            imgMargins = 'movie__img_margins_last-child';
        } else {
            imgMargins = 'movie__img_margins';
        }
        
        str += `<section class="movie__item ${imgMargins}">
            <div class="movie__img-container movie__img-container_margin_b cursor_pointer">
                <div class="movie__img">
                    <img class="movie__img_border-radius" src="images/posters/${film.img}" alt="">
                </div>
                <div class="fade movie__fade movie__fade_text">${film.annotation}</div>
            </div>
            <label class="font_size_s line-height_xs">${film.title}</label>
        </section>`;
    });

    return `<article class="films data__item">
            <section>
                <section class="name-category font_weight_medium font_size_m line-height_s">
                    <img src="images/emoji/fire.png" alt="">
                    <label>Новинки</label>
                </section>
                <section class="movie movie_margin_vert">${str}</section>
            </section>
            <section>
                <section class="name-category font_weight_medium font_size_m line-height_s">
                    <label>Жанры</label>
                </section>
                <section class="genres genres_margin_vert">
                    <div class="genres__item genres__item_background_1 cursor_pointer">
                        <img class="genres__img" src="images/emoji/comedy.png" alt="">
                        <label class="genres__title font_size_s line-height_xs">Комедии</label>
                    </div>
                    <div class="genres__item genres__item_background_2 cursor_pointer">
                        <img class="genres__img" src="images/emoji/dramas.png" alt="">
                        <label class="genres__title font_size_s line-height_xs">Драмы</label>
                    </div>
                    <div class="genres__item genres__item_background_3 cursor_pointer">
                        <img class="genres__img" src="images/emoji/fantastic.png" alt="">
                        <label class="genres__title font_size_s line-height_xs">Фантастика</label>
                    </div>
                    <div class="genres__item genres__item_background_4 cursor_pointer">
                        <img class="genres__img" src="images/emoji/horrors.png" alt="">
                        <label class="genres__title font_size_s line-height_xs">Ужасы</label>
                    </div>
                </section>
            </section>
        </article>`
};