import data from '../../../data/tv-channels.js';

function TVChannels() {

    function addLogoTVCannel(img) {
        return "<img src=\"images/channels-logotypes/" + img + "\" alt=\"\">";
    }

    function addProgramm(programm) {
        let str = '';
        let color = '';
        programm.forEach((el, i) => {

            if (i === 0) {
                color = 'font_color_red'
            } else {
                color = ''
            }

            str += `<section className="tv-channels__tv-programm_margin_b ${color}">
                <label className="tv-channels__tv-programm_time">${el.timeStart}</label>
                <label className="tv-channels__tv-programm_title">${el.title}</label>
            </section>`;
        });
        return str;
    }

    let str = '';
    data.forEach(tvProgramm => str+= `<section className="tv-channels__item tv-channels__item_margins background_gray">
            <section className="tv-channels__img-section">${addLogoTVCannel(tvProgramm.img)}</section>
            <section className="tv-channels__text_paddings">
                <label className="text-block tv-channels__title_paddings font_weight_medium font_size_s line-height_xs">${tvProgramm.title}</label>
                <section className="tv-channels__tv-programm">${addProgramm(tvProgramm.programm)}</section>
            </section>
        </section>`
    );

    return (
        // <div classNameName="TVChannels">TVChannels</div>
        <article className="tv-channels data__item">{str}</article>
    );
}

export default TVChannels;