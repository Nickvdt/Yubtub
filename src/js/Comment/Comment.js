class Comment {
    constructor(commentText, profilePicture) {
        this.commentsListItem = document.createElement("li");
        this.commentsListItem.classList.add("comments__list", "comments__list--item");

        this.profilePictureReaction = document.createElement("img");
        this.profilePictureReaction.classList.add("profilePicture");
        this.profilePictureReaction.src = profilePicture;
        this.commentsListItem.appendChild(this.profilePictureReaction);

        this.commentTextElement = document.createElement("p");
        this.commentTextElement.textContent = commentText;
        this.commentsListItem.appendChild(this.commentTextElement);
    }
}