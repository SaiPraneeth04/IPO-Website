document.addEventListener("DOMContentLoaded", function () {
    const readMoreLink = document.getElementById("read-more-link");
    const readLessLink = document.getElementById("read-less-link");
    const shortContent = document.getElementById("short-content");
    const fullContent = document.getElementById("full-content");

    readMoreLink.addEventListener("click", function (event) {
        event.preventDefault();
        shortContent.style.display = "none";
        fullContent.style.display = "block";
    });

    readLessLink.addEventListener("click", function (event) {
        event.preventDefault();
        fullContent.style.display = "none";
        shortContent.style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", function () {
            const isVisible = answer.style.display === "block";
            
            // Hide all answers
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            
            // Toggle current answer
            answer.style.display = isVisible ? "none" : "block";
        });
    });
});
