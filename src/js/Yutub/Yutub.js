class Yubtub {
    aside;
    renderer;
    app;
    data;
    constructor(app, data) {
        this.data = data;
        this.app = app;
        this.renderer = new Renderer(this);
        this.header = new Header(this);
        this.main = new Main(this, data);
        this.aside = new Aside(this, data);

    }
}