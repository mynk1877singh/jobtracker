document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const submitBtn = document.getElementById("submitBtn");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent actual form submission for this demo

        let isValid = true;

        emailInput.parentElement.classList.remove("error");
        passwordInput.parentElement.classList.remove("error");

     
        if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
            emailInput.parentElement.classList.add("error");
            isValid = false;
        }

       
        if (!passwordInput.value.trim()) {
            passwordInput.parentElement.classList.add("error");
            isValid = false;
        }

       
        if (isValid) {
            submitBtn.textContent = "Signing in...";
            submitBtn.style.opacity = "0.8";

           
            setTimeout(() => {
                alert("Login successful! Redirecting to JobTracker dashboard...");
                submitBtn.textContent = "Sign in";
                submitBtn.style.opacity = "1";
                loginForm.reset();
            }, 1500);
        }
    });

    // Remove error state on input
    emailInput.addEventListener("input", () => {
        emailInput.parentElement.classList.remove("error");
    });

    passwordInput.addEventListener("input", () => {
        passwordInput.parentElement.classList.remove("error");
    });
});
