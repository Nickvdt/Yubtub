class App{
    switcher;
    data = [
    {
        id: 0,
        video: "video--1.mp4",
        link: 1

    },
    {
        id: 1,
        video: "video--2.mp4",
        link: 0
    }]

    constructor(){
        this.switcher = new Switcher(this, this.data);
    }
}

class Switcher{
    yubtub;
    cleaner;
    app;
    default = 0;
    constructor(app, data){
        this.data = data
        this.app = app;
        this.yubtub = new Yubtub(this.app, data[this.default]);
        this.cleaner = new Cleaner();
    }

    switch(link){
        this.cleaner.clean("body");
        this.yubtub = new Yubtub(this.app, this.data[link]);
    }
}

class Cleaner{
    clean(whereToClean){
        document.querySelector(whereToClean).innerHTML = "";
    }
}


class Yubtub{
    aside;
    renderer;
    constructor(app, data){
        console.log(data);
        this.app = app;
        this.renderer = new Renderer(this);
        this.aside = new Aside(this, data);

    }
}

class Renderer{
    render(whereToRender, whatToRender){
        document.querySelector(whereToRender).appendChild(whatToRender);
    }
}

class Aside{
    yubtub;
    nextVideo;
    htmlelement;
    constructor(yubtub, data){
        console.log(data);
        this.yubtub = yubtub;
        this.htmlelement = document.createElement("aside");

        this.yubtub.renderer.render("body", this.htmlelement);
        this.nextVideo = new NextVideo(this, data);
    }
}

class NextVideo{
    aside;
    htmlelement;
    constructor(aside ,data){
        this.aside = aside;
        this.data = data;
        this.htmlelement = document.createElement("video");
        this.htmlelement.src = "./videos/" + data.video;
        this.aside.yubtub.renderer.render("aside", this.htmlelement);
        this.htmlelement.onclick = this.videoClicked;
    }

    videoClicked = () =>{
        this.aside.yubtub.app.switcher.switch(this.data.link);
    }
}

const app = new App();
console.log(app);