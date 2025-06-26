        document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const response = document.getElementById("responseMessage");
        if (name === "" || email === "" || message === "") {
            response.textContent = "please fill all the details";
            response.style.color = "red";
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            response.textContent = "please enter a valid email ";
            response.style.color = "red";
            return;
        }
        response.textContent = `Thanks for contacting us ${name},we'll get back to you soon`;
        response.style.color = "green";
        });
