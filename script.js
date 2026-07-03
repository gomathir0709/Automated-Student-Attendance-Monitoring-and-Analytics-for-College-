function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Username or Password");
    }
}
function addStudent() {
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;

    if (roll === "" || name === "" || department === "" || year === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("Student Added Successfully!");

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("year").value = "";
}
