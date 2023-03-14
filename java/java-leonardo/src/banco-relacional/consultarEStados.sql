SELECT * FROM estados;

SELECT nome as "Nome do estado", sigla FROM estados WHERE populacao >= 10 ORDER BY populacao DESC;