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
    addMoreEmployee = false;
  };
  
  //Return the employees array
//Call the function to collect employee data
let employeeArray = collectEmployees();
console.log(employeeArray);