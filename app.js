const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require("console.table");

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please choose what you would like to do",
        choices: [
          "View all Departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role",
        ],
      },
    ])
    .then((selectedChoice) => {
      switch (selectedChoice.menu) {
        case "View all Departments":
          selectDepartments();
          break;
        case "View all roles":
          selectRoles();
          break;
        case "View all employees":
          selectEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          process.exit();
      }
    });
};

const selectDepartments = () => {
  db.query(`SELECT * FROM departments`, (err, results) => {
    console.table(results);
    promptMenu();
  });
};

const selectRoles = () => {
  db.query(`SELECT * FROM roles`, (err, results) => {
    console.table(results);
    promptMenu();
  });
};

const selectEmployees = () => {
  db.query(`SELECT * FROM employees`, (err, results) => {
    console.table(results);
    promptMenu();
  });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the new department's name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("please enter a name for the department");
            return false;
          }
        },
      },
    ])
    .then((departmentName) => {
      db.query(`INSERT INTO department SET name = ?`, departmentName);
      promptMenu();
    });
};

const addRole = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is title of the new role?",
      validate: title => {
        if(title) {
          return true;
        }else{
          console.log("please enther the title of the new role");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "salary",
      message: "what is the salary for the new role?",
      validate: salary => {
        if(salary){
          return true;
        } else {
          console.log('enter the salary for the role');
          return false;
        }
      }
    },
    {
      type: "list",
      name: "department",
      message: "What department is this new role for?",
      choices: departments

    }
  ])
  .then(title, salary, department => {
    db.query(`INSERT INTO roles SET title = ?, salary = ?, department_id = ?`,[title,salary,department]);
    promptMenu();
  })
};

const addEmployee = ()=> {

};

const updateEmployee = () => {
  
};
