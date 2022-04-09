SELECT * FROM staff;
INSERT INTO staff 
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
	('Guilherme', 'Leite', 5, 'Gui@gui.com', 1, 1, 'Gui', '11111');
SELECT * FROM staff;
INSERT INTO staff
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
	('Nicole', 'Caldierari', 6, 'nic@nic.com', 2, 1, 'Nic', '121212'),
    ('Matheus', 'Mineiro', 7, 'mateus@mateus.com', 1, 0, 'Teteus', '8989');
SELECT * FROM staff;
INSERT INTO actor(first_name, last_name)
    SELECT first_name, last_name
    FROM customer
    ORDER BY customer_id
    LIMIT 5;
SELECT * FROM customer
ORDER BY customer_id;
SELECT * FROM actor
ORDER BY actor_id DESC;
SELECT * FROM category;
INSERT INTO category
	(`name`)
VALUE
	('Porno góspel'),
    ('Gore'),
    ('Furies');
SELECT * FROM category;
SELECT * FROM store;
INSERT INTO store
	(manager_staff_id, address_id)
VALUE
	(3, 3);
SELECT * FROM store;