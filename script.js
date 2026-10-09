const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Hello! JavaScript is working inside Docker 🚀";

    // Add animation styles using JavaScript
    message.style.opacity = "0";
    message.style.transform = "translateY(20px) scale(0.9)";
    message.style.transition = "none";

    // Restart animation
    void message.offsetWidth;

    message.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    message.style.opacity = "1";
    message.style.transform = "translateY(0) scale(1)";
});
