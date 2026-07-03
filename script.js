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


 let students = JSON.parse(localStorage.getItem("students")) || [];

students.push({
    roll: roll,
    name: name,
    department: department,
    year: year
});

localStorage.setItem("students", JSON.stringify(students));

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
function saveAttendance() {
    alert("Attendance Saved Successfully!");
}
function displayStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let table = document.getElementById("studentTable");

    if (!table) return;

    table.innerHTML = "";

    students.forEach(function(student) {
        table.innerHTML += `
        <tr>
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.department}</td>
            <td>${student.year}</td>
        </tr>`;
    });
}

displayStudents();
function displayAttendance() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let table = document.getElementById("attendanceTable");

    if (!table) return;

    table.innerHTML = "";

    students.forEach(function(student, index) {
        table.innerHTML += `
        <tr>
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td><input type="radio" name="attendance${index}" value="Present"></td>
            <td><input type="radio" name="attendance${index}" value="Absent"></td>
        </tr>`;
    });
}

displayAttendance();

