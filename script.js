function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "admin123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Username or Password!");
    }
}

