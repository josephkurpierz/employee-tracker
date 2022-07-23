const express = require("express");
const router = express.Router();

//joins tables to see all employees with their roles and departments
// select employees.*, roles.title as role_function, departments.name as department from employees left join roles on employees.role_id = roles.id left join departments on roles.department_id=departments.id;

module.exports = router;