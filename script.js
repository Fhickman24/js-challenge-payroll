// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
let employees = [];
};

// loop to collect employee data
let addMoreEmployees = true;
while(addMoreEmployees){
  let firstName = prompt("Enter employee's first name:");
  let lastName = prompt("Enter employee's last name:");
  let salary = prompt("Enter employee's salary:");
  let salaray = isNaN(Number(salaryInput)) ? 0 : Number (salaryInput); prompt("Please enter a number for the salary");
};

  //create an object for each employee
  let employee = {
    firstName: firstName,
    lastName: lastName,
    salary: parseFloat(salary)
  };

  //Add the employee object to the employees array
  employees.push(employee);

  //Prompt the user to see if they want to add another employee
  let addMore = prompt("Would you like to add another employee? (yes or no)");
  if(addMore.toLowerCase() === "no"){
    addMoreEmployees = false;
  };

  //Return the employees array
//Call the function to collect employee data
let employeeArray = collectEmployees();
console.log(employeeArray);


====================
STARTER CODE
Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
// Get the employee table
const employeeTable = document.querySelector('#employee-table');

// Clear the employee table
employeeTable.innerHTML = '';

// Loop through the employee data and create a row for each employee
for (let i = 0; i < employeesArray.length; i++) {
  const currentEmployee = employeesArray[i];

  const newTableRow = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = currentEmployee.firstName;
  newTableRow.append(firstNameCell);

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = currentEmployee.lastName;
  newTableRow.append(lastNameCell);

  const salaryCell = document.createElement("td");
  // Format the salary as currency
  salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  });

  newTableRow.append(salaryCell);

  employeeTable.append(newTableRow);
}
}

const trackEmployeeData = function() {
const employees = collectEmployees();

console.table(employees);

displayAverageSalary(employees);

console.log('==============================');

getRandomEmployee(employees);

employees.sort(function(a,b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
});

displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
