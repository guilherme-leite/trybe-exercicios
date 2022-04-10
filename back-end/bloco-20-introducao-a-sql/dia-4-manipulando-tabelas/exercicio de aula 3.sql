SET SQL_SAFE_UPDATES = 0;
SELECT actor_id, first_name FROM actor
WHERE first_name = 'KARL';
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
DELETE FROM actor
WHERE first_name = 'KARL';
SELECT first_name FROM actor
WHERE first_name = 'KARL';
DELETE FROM actor
WHERE first_name = 'MATTHEW';
SELECT first_name FROM actor
WHERE first_name = 'MATHEW';
DELETE FROM film_text
WHERE description LIKE '%saga%';
SELECT description FROM film_text
WHERE description LIKE '%saga%';
TRUNCATE film_actor;
TRUNCATE film_category;
SELECT * FROM film_actor;
