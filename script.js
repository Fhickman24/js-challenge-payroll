// Collect employee data
const collectEmployees = function() {

  let employeeArray = [];
  
  let addMoreEmployees = true
  
  
    while(addMoreEmployees) {
  
      let firstName = prompt("Enter employee's first name:");
      if (firstName === null) return null;  // User cancelled
      let lastName = prompt("Enter employee's last name:");
      if (lastName === null) return null;  // User cancelled
      let salaryInput = prompt("Enter employee's salary:");
      if (salaryInput === null) return null;  // User cancelled
      
      let salary = parseFloat(salaryInput);
      
      while (isNaN(salary)) {
        salaryInput = prompt("Please enter a valid number for the salary:");
        salary = parseFloat(salaryInput);
      }
      
      const newEmployee =  {
        firstName: firstName,
        lastName: lastName,
        salary: salary
      };
      
      employeeArray.push(newEmployee);
      addMoreEmployees = confirm("Would you like to add another employee?");
    }
  
  return employeeArray;
  
  };
  
  
  // Get a reference to the #add-employees-btn element
  const addEmployeesBtn = document.querySelector('#add-employees-btn');
  
  
  // Function to select a random employee
  const getRandomEmployee = function(employeesArray) {
    if (employeesArray.length === 0) return; // Prevent errors if the array is empty
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
  }
  
  
  const displayAverageSalary = function(employeesArray) {
    const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
    const numberOfEmployees = employeesArray.length;
    const averageSalary = totalSalary / numberOfEmployees;
    const averageSalaryFormatted = averageSalary.toFixed(2);
    
    console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryFormatted}`);
    };
  
  /*
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