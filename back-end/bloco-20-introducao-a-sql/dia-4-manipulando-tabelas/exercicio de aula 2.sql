UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
SELECT first_name FROM actor
WHERE first_name = 'JULIA';
SELECT first_name FROM actor
WHERE first_name = 'JULES';
SELECT * FROM category
WHERE name = 'Sci-Fi';
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
SELECT rental_rate FROM film;
UPDATE sakila.film
SET film.rental_rate = '25'
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;
UPDATE film
SET rental_rate = (
CASE 
	WHEN length BETWEEN 1 AND 100 THEN 10
	WHEN length > 100 THEN 20
END);
SELECT rental_rate FROM film
WHERE length > 100;