Layout.prototype.newTVChannelsItem = el => {
    return `<section class="tv-channels__item tv-channels__item_margins background_gray">
                <section class="tv-channels__img-section"></section>
                <section class="tv-channels__text_paddings">
                    <label class="text-block tv-channels__title_paddings font_weight_medium font_size_s line-height_xs">${el.title}</label>
                    <section class="tv-channels__tv-programm"></section>
                </section>
            </section>`;
}

Layout.prototype.tvChannelsImg = img => {
    return "<img src=\"images/channels-logotypes/" + img + "\" alt=\"\">";
}

Layout.prototype.tvChannelsTVProgrammItem = programm => {
    return `<section class="tv-channels__tv-programm_margin_b">
                <label class="tv-channels__tv-programm_time">${programm.timeStart}</label>
                <label class="tv-channels__tv-programm_title">${programm.title}</label>
            </section>`;
}