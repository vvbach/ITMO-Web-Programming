document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementsByClassName("comment-preloader")[0];
    const commentContainer = document.getElementsByClassName("comment-container")[0];

    const createCommentElement = (name, email, body) => {
        const comment = document.createElement("div");
        comment.classList.add("comment");

        const commentUsername = document.createElement("div");
        commentUsername.classList.add('comment-username');
        commentUsername.textContent = name;
        
        const commentEmail = document.createElement("div");
        commentEmail.classList.add('comment-email');
        commentEmail.textContent = email;

        const commentBody = document.createElement("p");
        commentBody.textContent = body;

        comment.appendChild(commentUsername);
        comment.appendChild(commentEmail);
        comment.appendChild(commentBody);

        return comment;
    };

    const fetchComments = async() => {
        try {
            const api = `https://jsonplaceholder.typicode.com/comments?_limit=10&id_gte=${Math.floor(Math.random() * 100)}`
            const response = await fetch(api);
            console.log(api);

            if (!response.ok) {
                throw new Error("Failed to fetch comments");
            }

            const comments = await response.json();

            preloader.style.display = "none";

            comments.forEach((comment) => {
                const commentElement = createCommentElement(
                    comment.name,
                    comment.email,
                    comment.body
                );
                commentContainer.appendChild(commentElement);
            });
        } catch (error) {
            preloader.style.display = "none";

            const errorMessage = document.createElement("p");
            errorMessage.textContent = "⚠ Something went wrong.";
            errorMessage.style.color = "red";
            commentContainer.appendChild(errorMessage);
        }
    };

    fetchComments();
});
