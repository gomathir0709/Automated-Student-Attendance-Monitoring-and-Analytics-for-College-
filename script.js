function addStudent() {
    alert("Working");
}

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
