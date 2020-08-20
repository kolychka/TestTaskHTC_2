const newFilmsItem = el => `<section class="movie__item movie__img_margins">
                                <div class="movie__img-container movie__img-container_margin_b cursor_pointer">
                                    <div class="movie__img">
                                        <img class="movie__img_border-radius" src="images/posters/${el.img}" alt="">
                                    </div>
                                    <div class="movie__fade movie__fade_text">${el.annotation}</div>
                                </div>
                                <label class="movie__title_margin font_size_s line-height_xs">${el.title}</label>
                            </section>`;
