class Video {
    constructor(data) {
        this.data = data;
        this.sectionElement = document.createElement("section");
        this.sectionElement.classList.add("video")
        this.starTopElement = document.createElement("i");
        this.starTopElement.classList.add("fa-regular", "fa-star", "video__star");
        this.videoElement = document.createElement("video");
        this.videoElement.classList.add("video__main");
        this.videoElement.autoplay = true;
        this.videoElement.loop = true;
        this.videoElement.muted = true;
        this.videoElement.src = "src/videos/" + data["video"];
        this.videoInfo = document.createElement("section");
        this.videoInfo.classList.add("video__information");
        this.titleElement = document.createElement("p");
        this.titleElement.textContent = data["title"];

        this.videoInfoRight = document.createElement("div");
        this.videoInfoRight.classList.add("video__information", "video__information--right");

        this.videoInfoLeft = document.createElement("div");
        this.videoInfoLeft.classList.add("video__information", "video__information--left");
        this.starElement = document.createElement("i");
        this.starElement.classList.add("fa-regular", "fa-star");

        this.arrowElement = document.createElement("i")
        this.arrowElement.classList.add("fa-solid", "fa-arrow-right");

        this.profilePictureTitle = document.createElement("img");
        this.profilePictureTitle.src = data["profilepicture"];
        this.profilePictureTitle.classList.add("profilePicture");

        this.sectionElement.appendChild(this.videoElement);
        this.sectionElement.appendChild(this.starTopElement);
        this.sectionElement.appendChild(this.videoInfo);

        this.videoInfo.appendChild(this.videoInfoLeft);
        this.videoInfoLeft.appendChild(this.profilePictureTitle);
        this.videoInfoLeft.appendChild(this.titleElement);

        this.videoInfo.appendChild(this.videoInfoRight);
        this.videoInfoRight.appendChild(this.starElement);
        this.videoInfoRight.appendChild(this.arrowElement);
    }
}