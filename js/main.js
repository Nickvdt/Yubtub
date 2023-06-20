class Api {
    url = "";
    data = null;

    constructor(newURL) {
        this.url = newURL;
    }

    async getData() {
        await fetch(this.url)
            .then(function (response) {
                return response.json();
            }).then((data) => {
                this.data = data.data;
            });
        return this.data;
        
    }

}

class App {
    switcher;
    constructor() {
        this.api = new Api("./data/data.json");

        this.api
        .getData().then((data) => {
            this.switcher = new Switcher(this, data);
        });
    }
}

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

class Cleaner {
    clean(whereToClean) {
        document.querySelector(whereToClean).innerHTML = "";
    }
}


class Yubtub {
    aside;
    renderer;
    app;
    data;
    constructor(app, data) {
        this.data = data;
        this.app = app;
        this.renderer = new Renderer(this);
        this.main = new Main(this, data);
        this.aside = new Aside(this, data);
        this.renderer.render("body", this.main.htmlelement);
    }
}

class Main{
    yubtub;
    constructor(yubtub, data){
        this.yubtub = yubtub;
        this.data = data;
        this.mainElement = document.createElement("main");
        this.mainElement.classList.add("main");
        this.leftSection = document.createElement("section");
        this.leftSection.classList.add("leftSection");

        this.sectionElement = document.createElement("section");
        this.sectionElement.classList.add("video")

        this.videoElement = document.createElement("video");
        this.videoElement.classList.add("video__main");
        this.videoElement.autoplay = true;
        this.videoElement.src = "videos/video--2.mp4";
        

        this.videoInfo = document.createElement("section");
        this.videoInfo.classList.add("video__information");

        this.videoInfoLeft = document.createElement("div");
        this.videoInfoLeft.classList.add("video__information", "video__information--left");

        this.profilePictureTitle = document.createElement("img");
        this.profilePictureTitle.src = "https://picsum.photos/80";
        this.profilePictureTitle.classList.add("profilePicture");

        this.profilePictureReaction = document.createElement("img");
        this.profilePictureReaction.src = "https://picsum.photos/79";
        this.profilePictureReaction.classList.add("profilePicture");

        this.profilePictureReaction2 = document.createElement("img");
        this.profilePictureReaction2.src = "https://picsum.photos/81";
        this.profilePictureReaction2.classList.add("profilePicture");

        this.titleElement = document.createElement("p");
        this.titleElement.textContent = "Titel"

        this.videoInfoRight = document.createElement("div");
        this.videoInfoRight.classList.add("video__information", "video__information--right");

        this.starElement = document.createElement("i");
        this.starElement.classList.add("fa-regular", "fa-star");

        this.arrowElement = document.createElement("i")
        this.arrowElement.classList.add("fa-solid", "fa-arrow-right");

        this.comments = document.createElement("section");
        this.comments.classList.add("comments");

        this.commentsList = document.createElement("ul");
        this.commentsList.classList.add("comments__list");

        this.commentsListItem = document.createElement("li")
        this.commentsListItem.classList.add("comments__list", "comments__list--item");

        this.commentsListItem2 = document.createElement("li")
        this.commentsListItem2.classList.add("comments__list", "comments__list--item");

        this.reactionElement = document.createElement("p");
        this.reactionElement.textContent = "Reactie";

        this.reactionElement2 = document.createElement("p");
        this.reactionElement2.textContent = "Reactie 2";

        this.textAreaElement = document.createElement("textarea");
        this.textAreaElement.classList.add("comments__textArea");
        this.textAreaElement.placeholder = "Plaats hier je reactie";

        this.mainElement.appendChild(this.leftSection);
        this.leftSection.appendChild(this.sectionElement);

        this.sectionElement.appendChild(this.videoElement);
        this.sectionElement.appendChild(this.videoInfo);

        this.videoInfo.appendChild(this.videoInfoLeft);
        this.videoInfoLeft.appendChild(this.profilePictureTitle);
        this.videoInfoLeft.appendChild(this.titleElement);

        this.videoInfo.appendChild(this.videoInfoRight);
        this.videoInfoRight.appendChild(this.starElement);
        this.videoInfoRight.appendChild(this.arrowElement);

        this.leftSection.appendChild(this.comments);
        this.comments.appendChild(this.commentsList);

        this.commentsList.appendChild(this.commentsListItem);
        this.commentsList.appendChild(this.commentsListItem2);

        this.commentsListItem.appendChild(this.profilePictureReaction);
        this.commentsListItem.appendChild(this.reactionElement);

        this.commentsListItem2.appendChild(this.profilePictureReaction2);
        this.commentsListItem2.appendChild(this.reactionElement2);

        this.comments.appendChild(this.textAreaElement);

        this.yubtub.renderer.render("body", this.mainElement);

    }
}

class Renderer {
    render(whereToRender, whatToRender) {
        document.querySelector(whereToRender).appendChild(whatToRender);
    }
}

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

class NextVideo {
    aside;
    htmlelement;
    data;
    constructor(aside, data) {
        this.aside = aside;
        this.data = data;
        this.htmlelement = document.createElement("video");
        this.htmlelement.classList.add("rightAside__video");
        this.htmlelement.src = "./videos/" + data.video;
        this.aside.yubtub.renderer.render("aside", this.htmlelement);
        this.htmlelement.onclick = this.videoClicked;
        
    }

    videoClicked = () => {
        this.aside.yubtub.app.switcher.switch(this.data.link);
    }
}

const app = new App();
console.log(app);