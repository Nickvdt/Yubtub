class App {
    switcher;
    constructor() {
        this.api = new Api("src/data/data.json");

        this.api.getData().then((data) => {

            this.switcher = new Switcher(this, data);
        });
    }
}