class Header {
    yubtub
    constructor(yubtub) {
        this.yubtub = yubtub
        this.headerElement = document.createElement("header");
        this.headerElement.classList.add("header");
        this.headerPElement = document.createElement("p");
        this.headerPElement.classList.add("header__p");
        this.headerPElement.innerText = "Gemaakt door Nick van der Tol SD2D Mediacollege";

        this.yubtub.renderer.render("body", this.headerElement);
        this.headerElement.appendChild(this.headerPElement);
    }
}