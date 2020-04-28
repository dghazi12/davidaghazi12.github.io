const connection = require('./server.js')
const inquirer = require("inquirer");

function start(){

inquirer
    .prompt([{

        type: "list",
        message: "What would you like to do?",
        name: "start",
        choices: [  "View departments", 
                    "Add department", 
                    "View role", 
                    "Add role", 
                    "View all employees", 
                    "Add employee", 
                    "Update employee roles", 
                    "Exit", 
                    new inquirer.Separator()]

    }])
    .then(function (data) {

        switch (data.start) {

            case "View departments":

                department()

                break;

            case "Add department":

                addDepartment()

                break;

            case "View role":

                role()

                break;

            case "Add role":

                addRole()

                break;

            case "View all employees":

                employee()

                break;

            case "Add employee":

                addEmployee()

                break;

            case "Update employee roles":

                updateRoles()

                break;

            case "Exit":

                connection.end();

                break;

        };

    })

}

start();

function department() {
    let query = "SELECT * FROM department";
    connection.query(query, function (err, res) {

        if (err) throw err;

        console.table(res)

    });

}

function addDepartment() {

    inquirer
        .prompt([{

            message: "What is the name of the new department?",
            name: "department",

        }])
        .then(function (data) {

            connection.query(
                "INSERT INTO department SET ?",
                {
                    department_name: data.department.toUpperCase()
                },
                function (err) {
                    if (err) throw err;
                    console.log("The new department was created successfully!");
                }
            );

            department();

        });
}

function role() {
    let query = "SELECT * FROM e_role";
    connection.query(query, function (err, res) {

        if (err) throw err;

        console.table(res)

    });
}

async function addRole() {

    try {

        const { role } = await inquirer.prompt({
            message: "What is the title of the new role to be added?",
            name: "role"
        });

        const { salary } = await inquirer.prompt({
            message: "What is the salary?",
            name: "salary"
        });

        connection.query(
            "INSERT INTO e_role SET ?",
            {
                title: (`${role}`.toUpperCase()),
                salary: (`${salary}`)
            },
            function (err) {
                if (err) throw err;
                console.log("Role has been updated!");
            }
        );

    } catch (err) {
        console.log(err);
    }

    role()

}

function employee() {
    let query = "SELECT * FROM employee LEFT JOIN e_role ON (employee.id = e_role.id)";
    connection.query(query, function (err, res) {

        if (err) throw err;

        console.table(res)

    });
}

async function addEmployee() {

    try {

        const { first } = await inquirer.prompt({
            message: "What is the first name?",
            name: "first",
        });

        const { last } = await inquirer.prompt({
            message: "What is the last name?",
            name: "last"
        });

        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: (`${first}`.toUpperCase()),
                last_name: (`${last}`.toUpperCase())
            },
            function (err) {
                if (err) throw err;
                console.log("Employee has been added!");
            }
        );

    } catch (err) {
        console.log(err);
    }

    addRole()

}

function updateRoles() {

    inquirer.prompt([
        {
            message: "Enter the ID of the employee you want to update.",
            type: "number",
            name: "id"
        }, 
        {
            message: "What is the updated title?",
            type: "input",
            name: "title" 
        },
        {
            message: "What is the updated salary?",
            type: "number",
            name: "salary"
        }
    ]).then(function (response) {

        connection.query("UPDATE e_role SET title = ?, salary = ? WHERE id = ?", [response.title.toUpperCase(), response.salary, response.id], function (err, data) {
            console.table(data);
        })
    })

}