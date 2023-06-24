class Comments {
    constructor(data) {
        this.data = data;
        this.comments = document.createElement("section");
        this.comments.classList.add("comments");

        this.commentsList = document.createElement("ul");
        this.commentsList.classList.add("comments__list");

        this.textAreaElement = document.createElement("textarea");
        this.textAreaElement.classList.add("comments__textArea");
        this.textAreaElement.placeholder = "Plaats hier je reactie";
        this.textAreaElement.setAttribute("maxlength", "30");
        this.textAreaElement.addEventListener("keydown", this.processEnterKey.bind(this));

        this.comments.appendChild(this.commentsList);
        this.comments.appendChild(this.textAreaElement);

        this.addComment(data.comment1, data.comment1profilepicture);
        this.addComment(data.comment2, data.comment2profilepicture);
    }

    processEnterKey(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            this.commentText = this.textAreaElement.value.trim();
            if (this.commentText !== "") {
                this.addComment(this.commentText, this.data.profilepicture);
                this.textAreaElement.value = "";
            }
        }
    }

    addComment(commentText, profilePicture) {
        this.comment = new Comment(commentText, profilePicture);
        this.commentsList.appendChild(this.comment.commentsListItem);
    }
}
