class NextVideo {
    aside;
    htmlelement;
    data;
    constructor(aside, data) {
        this.aside = aside;
        this.data = data;
        this.htmlelement = document.createElement("video");
        this.htmlelement.classList.add("rightAside__video");
        this.htmlelement.src = "src/videos/video--" + data.link + ".mp4";
        this.aside.yubtub.renderer.render("aside", this.htmlelement);
        this.htmlelement.onclick = this.videoClicked;

    }

    videoClicked = () => {
        this.aside.yubtub.app.switcher.switch(this.data.link);
    }
}
