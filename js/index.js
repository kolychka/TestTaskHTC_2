const template = new Template();

window.onload = function() {
    new App({ id: 'app', parent: 'main', template: template.appTemplate });
};