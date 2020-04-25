const connection = require('./server.js')
const inquirer = require("inquirer");

//View all all roles
// Add role
//Remove role

function employeeStart() {
    inquirer
        .prompt({

            type: "list",
            message: "What would you like to do?",
            name: "start",
            choices: ["View departments", "Add department", "View role", "Add role", "View all employees", "Add employees", "View all employees by manager", "Update employe managers", "View all employees by department", "Delete"]

        })
        .then(function (data) {

            let test = data.start

            switch (test) {

                case "View departments":

                    allDepartments()

                    break;

                case "Add department":

                    console.log(test)

                    break;
                
                case "View role":

                    console.log(test)

                    break;

                case "Add role":

                    console.log(test)

                    break;

                case "View all employees":

                    console.log(test)
    
                break;

                case "Add employees":

                    console.log(test)
    
                break;


                case "View all employees by manager":

                    console.log(test)
    
                break;

                case "Update employe managers":

                    console.log(test)
    
                break;

                case "View all employees by department":

                    console.log(test)
    
                break;

                case "Delete":

                    console.log(test)
    
                break;
                
            };

        employeeStart()

    })
}

employeeStart()

function allDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {

        if (err) throw err;

        console.table(res)

    });
}






 // View department
    //List all departments

  //Add department
    //What is the name of the department

  //View/Update role
    //List of all employees
    //Select employee and update role

  //Add role
    //List all the name of employees
    //Selecte employee and add a role

      // View all employees
    // A TABLE LOGGING ALL OF THE EMPLOYEES

  // Add Employee
    //Ask for employee first name (input)
    //Ask for employee last name (input)
    //SHow a list of departments to be inserted into
    //Ask who is employees manager

      // View all employees by manager
    //Select which manager you would like to view the employees in a list
    //Show the list of employees under the manager

  //Update employee managers
    //List all employees
    //Select employee to update
    //List all name of managers and update

  // Delete departmetns, roles, and employees
    //List Department, roles or employees
    //List Selection
    //Let them pick which one to delete

