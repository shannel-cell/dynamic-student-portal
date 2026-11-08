// Welcome message when the homepage loads
alert("Welcome to The Dynamic Student Portal!");
console.log("Homepage loaded successfully.");
// Variables for a student
let studentName = "Shannel";
let yearOfStudy = 2;

// Conditional: a different message depending on the year
if (yearOfStudy === 1) {
    console.log("Welcome, " + studentName + "! You are a first-year student.");
} else if (yearOfStudy <= 3) {
    console.log("Hello, " + studentName + "! You are in year " + yearOfStudy + ". Keep going!");
} else {
    console.log("Hello, " + studentName + "! You are a final-year student.");
}
// For loop: log the numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}
// ----- Lab 8: arrays, functions and events -----
function addStudentToPage(student) {
    const list = document.getElementById("student-list");
    const item = document.createElement("li");
    item.textContent = student.name + " - " + student.course + " (Year " + student.year + ")";
    list.appendChild(item);
}

function displayAllStudents(students) {
    // Clear the list first so repeated clicks don't duplicate names
    document.getElementById("student-list").innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }

    document.getElementById("student-count").textContent = "Registered students: " + students.length;
}
function loadStudents() {
    fetch("students.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(function (students) {
            displayAllStudents(students);
        })
        .catch(function (error) {
            console.log("Could not load students: " + error);
            document.getElementById("student-list").innerHTML =
                "<li>Sorry, the student list could not be loaded.</li>";
        });
}

document.getElementById("show-students").addEventListener("click", function () {
    loadStudents();
});