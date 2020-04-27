DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE e_role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE department{
  id INT NOT NULL AUTO_INCREMENT,
  deparment_name VARCHAR(30),
  PRIMARY KEY (id)
}

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Doe", 1)

SELECT * FROM employee;
SELECT * FROM e_role;
SELECT * FROM department;

-- Insert a set of records.
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 90, "relaxed");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Elaine", 80, "righteous");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 20, "doofus");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("George", 70, "selfish");