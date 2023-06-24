class Switcher {
    yubtub;
    cleaner;
    app;
    default = 0;
    constructor(app, data) {
        this.data = data
        this.app = app;
        this.yubtub = new Yubtub(this.app, data[this.default]);
        this.cleaner = new Cleaner();
    }

    switch(link) {
        this.cleaner.clean("body");
        this.yubtub = new Yubtub(this.app, this.data[link]);
    }
}