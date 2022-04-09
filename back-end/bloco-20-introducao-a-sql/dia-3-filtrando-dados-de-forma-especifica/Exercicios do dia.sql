USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'GR%';
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor ASC;
SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';
SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco DESC;
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) 
BETWEEN '2018/04/15' AND '2019/07/30';
USE Scientists;
SELECT * FROM Scientists
WHERE Name LIKE '%e%';
SELECT Name FROM Projects
WHERE Name Like 'A%'
ORDER BY Name ASC;
SELECT Code, Name FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Name ASC;
SELECT Scientist FROM AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');
SELECT * FROM Projects
WHERE Hours > 500;
SELECT * FROM Projects
WHERE Hours > 250 AND Hours < 800;
SELECT Name FROM Projects
WHERE Name NOT LIKE ('A%');
SELECT * FROM Projects
WHERE Code LIKE ('%H%');