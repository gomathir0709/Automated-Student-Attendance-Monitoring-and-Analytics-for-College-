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
function addStudent() {
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push({
        roll: roll,
        name: name,
        department: department,
        year: year
    });

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added Successfully!");

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("year").value = "";
}

