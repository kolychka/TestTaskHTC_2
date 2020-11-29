function TVChannels(layouts) {
    this.createTVProgramm = () => {
        const tvChannels = document.querySelector('.tv-channels');
        TV_PROGRAMM_DATA.forEach(el => tvChannels.innerHTML += layouts.newTVChannelsItem(el));

        const tvChannelsImgSection = document.querySelectorAll('.tv-channels__img-section');
        tvChannelsImgSection.forEach((elem, i) =>
            tvChannelsImgSection[i].innerHTML = layouts.tvChannelsImg(TV_PROGRAMM_DATA[i].img));

        const tvChannelsTVProgramm = document.querySelectorAll('.tv-channels__tv-programm');
        tvChannelsTVProgramm.forEach((elem, i) => {
            TV_PROGRAMM_DATA[i].programm.forEach(el => tvChannelsTVProgramm[i].innerHTML += layouts.tvChannelsTVProgrammItem(el));
            tvChannelsTVProgramm[i].firstChild.classList.add('font_color_red');
        });
    }
}