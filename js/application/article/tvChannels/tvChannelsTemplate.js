Template.prototype.tvChannelsTemplate = (data) => {
    
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

            str += `<section class="tv-channels__tv-programm_margin_b ${color}">
                <label class="tv-channels__tv-programm_time">${el.timeStart}</label>
                <label class="tv-channels__tv-programm_title">${el.title}</label>
            </section>`;
        });
        return str;
    }

    let str = '';
    data.forEach(tvProgramm => str+= `<section class="tv-channels__item tv-channels__item_margins background_gray">
            <section class="tv-channels__img-section">${addLogoTVCannel(tvProgramm.img)}</section>
            <section class="tv-channels__text_paddings">
                <label class="text-block tv-channels__title_paddings font_weight_medium font_size_s line-height_xs">${tvProgramm.title}</label>
                <section class="tv-channels__tv-programm">${addProgramm(tvProgramm.programm)}</section>
            </section>
        </section>`
    );
    return `<article class="tv-channels data__item">${str}каналы</article>`;

};