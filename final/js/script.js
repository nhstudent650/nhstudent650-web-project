const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
            formMessage.classList.remove("hidden");
            return;
        }

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            formMessage.classList.remove("hidden");
            return;
        }

        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        formMessage.classList.remove("hidden");

        form.reset();
    });
}
