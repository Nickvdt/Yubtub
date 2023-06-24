class Main {
    yubtub;
    video;
    constructor(yubtub, data) {
        this.yubtub = yubtub;
        this.data = data;
        this.mainElement = document.createElement("main");
        this.mainElement.classList.add("main");
        this.leftSection = document.createElement("section");
        this.leftSection.classList.add("leftSection");

        this.video = new Video(data);
        this.comments = new Comments(data);

        this.mainElement.appendChild(this.leftSection);

        this.leftSection.appendChild(this.video.sectionElement); // uit de classe video
        this.leftSection.appendChild(this.comments.comments); // uit de classe comments
        this.yubtub.renderer.render("body", this.mainElement);
    }
}