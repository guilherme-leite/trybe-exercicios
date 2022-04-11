-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM film
GROUP BY rating;

SELECT active, COUNT(*)
FROM customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM customer
GROUP BY store_id, active;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

SELECT district, COUNT(*)
FROM address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT first_name, COUNT(*)
FROM actor
GROUP BY first_name
HAVING COUNT(*) > 2;

SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Para Fixar
-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

--     SELECT rating, AVG(length)
--     FROM sakila.film
--     GROUP BY rating;

SELECT rating, AVG(length) AS media_de_duracao
FROM sakila.film
GROUP BY rating
HAVING media_de_duracao BETWEEN 115.0 AND 121
ORDER BY  media_de_duracao DESC;

-- Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
-- Copiar
--     SELECT rating, SUM(replacement_cost)
--     FROM sakila.film
--     GROUP by rating;

SELECT rating, SUM(replacement_cost) AS custo_de_substituicao_total
FROM sakila.film
GROUP by rating
HAVING custo_de_substituicao_total > 3950.50
ORDER BY custo_de_substituicao_total ASC;
