SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(title) FROM sakila.film;
SELECT COUNT(film_id) FROM sakila.film;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT first_name, last_name FROM sakila.actor
ORDER BY first_name ASC, last_name DESC;
SELECT name FROM sakila.language LIMIT 5 OFFSET 1;
SELECT * FROM sakila.film;
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC;