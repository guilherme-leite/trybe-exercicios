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
