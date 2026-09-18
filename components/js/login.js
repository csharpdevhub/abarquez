 const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    const adminOption = document.getElementById("adminOption");
    const userOption = document.getElementById("userOption");

    const usernameInput = document.getElementById("username");

    let selectedAccount = "admin";

    // Admin selected
    adminOption.addEventListener("click", function() {
        selectedAccount = "admin";

        adminOption.classList.add("active");
        userOption.classList.remove("active");

        usernameInput.placeholder = "Enter admin username";

        errorMessage.classList.remove("show");
    });

    // User selected
    userOption.addEventListener("click", function() {
        selectedAccount = "user";

        userOption.classList.add("active");
        adminOption.classList.remove("active");

        usernameInput.placeholder = "Enter user username";

        errorMessage.classList.remove("show");
    });

    // Login
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = document.getElementById("password").value;

        // ADMIN LOGIN
        if (
            selectedAccount === "admin" &&
            username === "employer" &&
            password === "employer"
        ) {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("userRole", "admin");
            localStorage.setItem("username", username);

            window.location.href = "success.html";
            return;
        }

        // USER LOGIN
        if (
            selectedAccount === "user" &&
            username === "guest" &&
            password === "guest"
        ) {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("userRole", "user");
            localStorage.setItem("username", username);

            window.location.href = "user-page.html";
            return;
        }

        // INVALID LOGIN
        errorMessage.textContent =
            "Invalid " + selectedAccount + " username or password.";

        errorMessage.classList.add("show");

        document.getElementById("password").value = "";
    });






