INSERT INTO employee (first_name, last_name) VALUES ("JOHN", "DOE");
INSERT INTO employee (first_name, last_name) VALUES ("MIKE", "CHAN");
INSERT INTO employee (first_name, last_name) VALUES ("ASHLEY", "RODRIGUEZ");
INSERT INTO employee (first_name, last_name) VALUES ("KEVIN", "TUPIK");
INSERT INTO employee (first_name, last_name) VALUES ("MALIA", "BROWN");
INSERT INTO employee (first_name, last_name) VALUES ("SARAH", "LOURD");
INSERT INTO employee (first_name, last_name) VALUES ("TOM", "ALLEN");
INSERT INTO employee (first_name, last_name) VALUES ("CHRISTIAN", "ECKENRODE");

INSERT INTO e_role (title,salary) VALUES ("SALES LEAD", 100000);
INSERT INTO e_role (title,salary) VALUES ("SALESPERSON", 80000);
INSERT INTO e_role (title,salary) VALUES ("LEAD ENGINEER", 150000);
INSERT INTO e_role (title,salary) VALUES ("SOFTWARE ENGINEER", 120000);
INSERT INTO e_role (title,salary) VALUES ("ACCOUNTANT", 125000);
INSERT INTO e_role (title,salary) VALUES ("LEGAL TEAM LEAD", 250000);
INSERT INTO e_role (title,salary) VALUES ("LAWYER", 190000);
INSERT INTO e_role (title,salary) VALUES ("LEAD ENGINEER", 150000);

INSERT INTO department (department_name) VALUES ("SALES");
INSERT INTO department (department_name) VALUES ("SALES");
INSERT INTO department (department_name) VALUES ("ENGINEERING");
INSERT INTO department (department_name) VALUES ("ENGINEERING");
INSERT INTO department (department_name) VALUES ("FINANCE");
INSERT INTO department (department_name) VALUES ("LEGAL");
INSERT INTO department (department_name) VALUES ("LEGAL");
INSERT INTO department (department_name) VALUES ("ENGINEERING");

SELECT * FROM employee;
SELECT * FROM e_role;
SELECT * FROM department;