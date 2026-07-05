// Login Function
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

// Add Student
function addStudent() {
    let roll = document.getElementById("roll").value.trim();
    let name = document.getElementById("name").value.trim();
    let department = document.getElementById("department").value.trim();
    let year = document.getElementById("year").value.trim();

    if (roll === "" || name === "" || department === "" || year === "") {
        alert("Please fill all fields!");
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

    alert("Student Added Successfully!");

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("year").value = "";

    displayStudents();
}

// Display Students
function displayStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];

    let table = document.getElementById("studentTable");

    if (!table) return;

    table.innerHTML = "";

    students.forEach(function(student, index) {
        table.innerHTML += `
        <tr>
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.department}</td>
            <td>${student.year}</td>
            <td><button onclick="deleteStudent(${index})">Delete</button></td>
        </tr>
        `;
    });
}

// Search Student
function searchStudent() {
    let input = document.getElementById("searchStudent").value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tr");

    rows.forEach(function(row) {
        let text = row.innerText.toLowerCase();

        if (text.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// Load Students Automatically
window.onload = function() {
    displayStudents();
};
function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}
