class App extends Component {

    constructor(options) {
        super(options);
        this.header = new Header({ 
            id: 'header', 
            parent: this.id,
            template: template.headerTemplate
        });
        this.article = new Article({
            id: 'article',
            parent: this.id,
            template: template.articleTemplate,
            callbacks: {
                showFilms: () => this.showFilms(),
                showTVChannels: () => this.showTVChannels(),
                //login: () => {}
            }
        });
        this.films = new Films({ 
            id: 'films', 
            parent: 'article-content',
            template: template.filmsTemplate
        });
        this.tvChannels = new TVChannels({ 
            id: 'tv-channels',
            parent: 'article-content',
            template: template.tvChannelsTemplate 
        });
        this.footer = new Footer({
            id: 'footer',
            parent: this.id,
            template: template.footerTemplate
        });

        // проинициализировать что-нибудь, что нам нужно
        this.tvChannels.hide();
    }

    // скорее всего не понадобится
    render(template) {
        super.render(template);
        //....
        console.log('Я сработал!!');
    }

    showFilms() {
        this.tvChannels.hide();
        this.films.show();
    }

    showTVChannels() {
        this.films.hide();
        this.tvChannels.show();
    }
}