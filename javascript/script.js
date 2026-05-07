document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("greetForm");
    const message = document.getElementById("greetingMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        const name = document.getElementById("username").value.trim();

        if (name.length > 0) {
            message.textContent = `Hello, ${name}! Thanks for visiting my PC Building page.`;
        } else {
            message.textContent = "Please enter your name first.";
        }
    });

});
