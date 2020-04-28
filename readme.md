# Unit 12 MySQL Homework: Employee Tracker

## Description

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

## User Story

    AS A business owner
    I WANT to be able to view and manage the departments, roles, and employees in my company
    SO THAT I can organize and plan my business

## Criteria

    GIVEN a business owner has a team with specific roles and information

    WHEN the application is ran
    THEN the user must make a choice from a list
    WHEN view departments is selected
    THEN a list of the departments shows up in a table
    WHEN add department is selected
    THEN user is asked to input name of department
    WHEN the name is inputed
    THEN a list of the all the departments shows up in a table
    WHEN view role is selected
    THEN a list of the roles shows up in a table
    WHEN add role is selected
    THEN the user is asked to input a title and salary
    WHEN the title and salary is inputed
    THEN a list of all the roles shows up in a table
    WHEN view all employees is selected
    THEN a list of all the employees shows up in a table
    WHEN add employee is selected
    THEN the user is asked to input the first name, last name, title of role, salary and department name
    WHEN the first name, last name, title of role, salary and department name is inputed
    THEN a list of the employees shows up in a table
    WHEN update employee roles is selected
    THEN the user is asked to input the ID of the employee, the updated title and updated salary 
    WHEN the user inputs the ID of the employee, the updated title and updated salary 
    THEN a list of the employees shows up in a table
    WHEN exit is selected
    THEN the connection ends
    
## Requirements

Build a command-line application that at a minimum allows the user to:

- Add departments, roles, employees
- View departments, roles, employees
- Update employee roles

## Preview

![](images/example.gif)