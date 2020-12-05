const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3300 ,
  user: "root",
  password: "",
  database: "employee_tracker"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;
