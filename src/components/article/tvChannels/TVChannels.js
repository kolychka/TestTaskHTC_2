import React from 'react';
import { Scrollbar } from "react-scrollbars-custom";
import data from '../../../data/tv-channels.js';
import '../../css/tv-channels.css';

class TVChannels extends React.Component {

    addProgram(program) {
        return program.map((el, i) => {
            const color = (i === 0) ? 'font_color_red' : '';
            return (
                <section key={i} className={"tv-channels__tv-program_margin_b " + color}>
                    <label className="tv-channels__tv-program_margin_r">{el.timeStart}</label>
                    <label className="tv-channels__tv-program_title">{el.title}</label>
                </section>
            )
        });
    }

    addLogoTVCannel(img) {
        return (<img src={"images/channels-logotypes/" + img} alt="" />);
    }

    render() {    
        return (
            // класс tv-channels используется для отступов последнего компонента tv-channels__item 
            <article className="tv-channels">
                <Scrollbar style={{ width: 1196, height: 696 }}>{
                    data.map((tvProgram, i) => {
                        return (
                            <section key={i} className="tv-channels__item tv-channels__item_margins tv-channels__item_padding background_gray">
                                <section className="tv-channels__img-section">{this.addLogoTVCannel(tvProgram.img)}</section>
                                <section>
                                    <label className="text-block tv-channels__title_paddings font_weight_medium font_size_s line-height_xs">{tvProgram.title}</label>
                                    <section>{this.addProgram(tvProgram.program)}</section>
                                </section>
                            </section>
                        )
                    }) 
                }
                </Scrollbar>
            </article>
        );
    }
}

export default TVChannels;