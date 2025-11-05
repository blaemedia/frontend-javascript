// main.ts
// Create two student objects
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "Lagos",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 20,
    location: "Abuja",
};
// Create an array of students
var studentsList = [student1, student2];
// Create and render a table
var table = document.createElement("table");
var headerRow = document.createElement("tr");
// Create table headers
var nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
// Append rows for each student
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Add table styling (optional)
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.querySelectorAll("th, td").forEach(function (cell) {
    cell.style.border = "1px solid black";
    cell.style.padding = "8px";
});
// Append the table to the body
document.body.appendChild(table);
//# sourceMappingURL=main.js.map