-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências ( manager ) cujos departamentos ( department ) são diferentes.
USE hr;
SELECT
    CONCAT(Employee.FIRST_NAME, ' ', Employee.LAST_NAME) AS 'Nome Pessoa Colaboradora',
    CONCAT(Manager.FIRST_NAME, ' ', Manager.LAST_NAME) As 'Nome Gerentez'
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager
ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;

SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHER
    Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;

-- Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.

SELECT
    CONCAT(Manager.FIRST_NAME, ' ', Manager.LAST_NAME) AS Manager,
    COUNT(*)
FROM 
    employees AS Manager
INNER JOIN
    employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY
    Manager.EMPLOYEE_ID;