function main() {
  const root = document.getElementById("root");
}
const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

// Create h1 element
const heading = document.createElement("h1");
heading.textContent = "FREELANCERS";

// Append h1 element to the root
root.appendChild(heading);

// Create unordered list element
const userList = document.createElement("ul");

// Loop through the users array
users.forEach((user) => {
  // Create li element for each user
  const listItem = document.createElement("li");

  // Create HTML content for the user
  const userHTML = `
      <span class="name">${user.name}</span>
      <span class="age">Age: ${user.age}</span>
      <span class="occupation">Occupation: ${user.occupation}</span>
    `;

  // Set the HTML content of the li element
  listItem.innerHTML = userHTML;

  // Append the li element to the unordered list
  userList.appendChild(listItem);
});

// Append the unordered list to the root
root.appendChild(userList);

// Call the main function when the page finishes loading
document.addEventListener("DOMContentLoaded", main);

//call the main function
main();
