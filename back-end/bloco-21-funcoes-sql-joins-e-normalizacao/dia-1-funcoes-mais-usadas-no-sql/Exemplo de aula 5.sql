SELECT * FROM film;

SELECT 
  AVG(length) AS 'Média de duração',
  MIN(length) AS 'Duração mínima',
  MAX(length) AS 'Duração máxima',
  SUM(length) AS 'Tempo de exibição total',
  COUNT(*) AS 'Filmes registrados'
FROM film;