// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 20,
  location: "Abuja",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create and render a table
const table = document.createElement("table");
const headerRow = document.createElement("tr");

// Create table headers
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Append rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Add table styling (optional)
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.querySelectorAll("th, td").forEach((cell) => {
  (cell as HTMLElement).style.border = "1px solid black";
  (cell as HTMLElement).style.padding = "8px";
});

// Append the table to the body
document.body.appendChild(table);
