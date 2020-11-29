function Films(layouts) {
    this.createFilms = () => {
        const newFilms = document.querySelector('.movie');
        NEW_FILMS_DATA.forEach(el => newFilms.innerHTML += layouts.filmsLayout(el));
        newFilms.lastChild.classList.remove('movie__img_margins');
        newFilms.lastChild.classList.add('movie__img_margins_last-child');
    }
}