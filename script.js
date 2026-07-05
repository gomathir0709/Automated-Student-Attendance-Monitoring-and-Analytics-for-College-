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

    location.reload();
}
