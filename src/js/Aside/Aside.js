class Aside {
    yubtub;
    nextVideo;
    htmlelement;
    constructor(yubtub, data) {
        this.yubtub = yubtub;
        this.htmlelement = document.createElement("aside");
        this.htmlelement.classList.add("rightAside");
        this.yubtub.renderer.render("main", this.htmlelement);
        this.nextVideo = new NextVideo(this, data);

    }
}