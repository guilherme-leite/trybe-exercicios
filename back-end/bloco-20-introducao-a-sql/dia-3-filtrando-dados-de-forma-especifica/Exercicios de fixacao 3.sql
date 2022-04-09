USE sakila;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason','morales', 'kennedy')
ORDER BY first_name ASC;
SELECT email, address_id FROM customer
WHERE address_id BETWEEN 172 AND 176;
SELECT COUNT(payment_id) FROM payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration IN (3, 6)
ORDER BY rental_duration DESC, title ASC;
SELECT title, rating FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title ASC
LIMIT 500;