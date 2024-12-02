document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementsByClassName("comment-form")[0];
    const commentsContainer = document.getElementsByClassName("comment-container")[0];

    const COMMENTS_STORAGE_KEY = "articleComments";

    const loadComments = () => {
        const savedComments = localStorage.getItem(COMMENTS_STORAGE_KEY);
        if (savedComments) {
            const comments = JSON.parse(savedComments);
            comments.forEach(({ username, email, comment, timestamp }) => {
                addCommentToDOM(username, email, comment, timestamp);
            });
        }
    };
    const saveComments = (username, email, comment) => {
        const currentComments = JSON.parse(localStorage.getItem(COMMENTS_STORAGE_KEY)) || [];
        const timestamp = new Date().toISOString();
        currentComments.push({ username, email, comment, timestamp });
        localStorage.setItem(COMMENTS_STORAGE_KEY, JSON.stringify(currentComments));
        return timestamp;
    };

    const addCommentToDOM = (username, email, comment, timestamp) => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        const commentHeader = document.createElement("div");
        commentHeader.classList.add("comment-header");

        const commentUsername = document.createElement("span");
        commentUsername.classList.add("comment-username");
        commentUsername.textContent = username;

        const commentTime = document.createElement("span");
        commentTime.classList.add("comment-time");
        commentTime.textContent = new Date(timestamp).toLocaleString();

        commentHeader.appendChild(commentUsername);
        commentHeader.appendChild(commentTime);

        const commentEmail = document.createElement("div");
        commentEmail.classList.add('comment-email');
        commentEmail.textContent = email;

        const commentBody = document.createElement("p");
        commentBody.classList.add("comment-body");
        commentBody.textContent = comment;

        commentElement.appendChild(commentHeader);
        commentElement.appendChild(commentEmail);
        commentElement.appendChild(commentBody);
        commentsContainer.appendChild(commentElement);
        
    };

    commentForm.addEventListener("submit", () => {

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const comment = document.getElementById("comment").value;

        const timestamp = saveComments(username, email, comment);

        addCommentToDOM(username, email, comment, timestamp);

        commentForm.reset();
    });

    loadComments();
});
