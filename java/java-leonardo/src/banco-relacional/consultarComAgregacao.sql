SELECT regiao as "Região", SUM(populacao) as "Total" FROM estados GROUP BY regiao ORDER BY total DESC;

SELECT sum(populacao) as Total from estados;

SELECT avg(populacao) as Total from estados;