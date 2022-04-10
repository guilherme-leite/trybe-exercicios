SELECT 
  film_id, title,
  IF(title = 'ACE GOLDFINGER', 'Já assisti esse filme', 'Não conheço o filme') AS 'Conheço?'
FROM sakila.film;

SELECT
  film_id,
  title,
  CASE
    WHEN title = 'ACE GOLDFINGER' THEN 'Já assisti esse filme'
    ELSE 'Não conheço o filme'
  END AS 'Conheço?'
FROM film;

SELECT rating FROM film;

SELECT
  title,
  rating,
  CASE
    WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN "Não recomendado para menores de 10 anos" 
    WHEN rating = 'PG-13' THEN "Não recomendado para menores de 13 anos"
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
  END AS 'público-alvo'
FROM film;