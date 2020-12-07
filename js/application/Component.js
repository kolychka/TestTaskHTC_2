class Component {
    constructor({ id, parent, template = () => '<div>дефолтный шаблон</div>', templateParams = null, callbacks = {}}) {
        // записать данные
        this.id = id;
        this.parent = parent;
        this.callbacks = callbacks;
        // сгенерировать разметку компоненты, положить её на страницу и обработать события
        this.render(template(templateParams));
        this.addEventListeners();
    }

    // Желательно не перезаписывать
    show() {
        document.getElementById(this.id).classList.remove('display_none');
    }
    hide() {
        document.getElementById(this.id).classList.add('display_none');
    }

    // Обязательно нужно вызывать метод родителя
    render(template) {
        const elem = document.createElement('div');
        elem.setAttribute('id', this.id);
        elem.innerHTML = template;
        if (this.parent) {
            document.getElementById(this.parent).appendChild(elem);
        } else {
            document.querySelector('body').appendChild(elem);
        }
    }

    // можно перезаписывать сколько хочется
    addEventListeners() {}
}