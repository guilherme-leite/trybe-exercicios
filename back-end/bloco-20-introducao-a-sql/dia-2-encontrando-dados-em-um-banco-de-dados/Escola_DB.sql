CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
SELECT * FROM Escola.Estudantes;
SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;
SELECT DISTINCT Nome FROM Escola.Estudantes;
SELECT DISTINCT Idade FROM Escola.Estudantes;