Template.prototype.articleTemplate = () => `
<section class="display_j-c_center main__section_margin">
    <section id="article-content">
        <header>
            <nav>
                <ul class="tabs tabs_padding_l tabs_margin_vert font_weight_medium font_size_l line-height_m">
                    <li id="films-button" data-content-item="films" class="tabs__item tabs__item_margin_r cursor_pointer active">Фильмы</li>
                    <li id="tv-channels-button" data-content-item="tv-channels" class="tabs__item tabs__item_margin_r cursor_pointer">Телеканалы</li>
                </ul>
            </nav>
        </header>
    </section>
</section>`;

/*filmsLayout(el) {
        return `<section class="movie__item movie__img_margins">
            <div class="movie__img-container movie__img-container_margin_b cursor_pointer">
                <div class="movie__img">
                    <img class="movie__img_border-radius" src="images/posters/${el.img}" alt="">
                </div>
                <div class="fade movie__fade movie__fade_text">${el.annotation}</div>
            </div>
            <label class="font_size_s line-height_xs">${el.title}</label>
        </section>`;
    }


    createNewFilms() {
        const newFilms = document.querySelector('.movie');
        NEW_FILMS_DATA.forEach(el => newFilms.innerHTML += filmsLayout(el));
        newFilms.lastChild.classList.remove('movie__img_margins');
        newFilms.lastChild.classList.add('movie__img_margins_last-child');
    }


    */