## Database

```sql
CREATE DATABASE school;

USE school ;

CREATE TABLE IF NOT EXISTS class (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS students (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	age INT NOT NULL,
	class_id INT NOT NULl,
	FOREIGN KEY (class_id) REFERENCES class (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO 
    class (id, name) 
VALUES 
    (1, 'Computer Science'),
    (2, 'Engineering'), 
    (3, 'Architecture'), 
    (4, 'Medicine'), 
    (5, 'Law');


INSERT INTO
	students (name, age, class_id)
VALUES
	("Marcos", 32, 1),
	("Rodrigo", 23, 2),
	("Gabriel", 19, 3),
	("Mayara", 34, 3),
	("Rosana", 21, 4),
	("Rogério", 25, 1),
	("Renato", 25, 2),
	("Bárbara", 43, 2),
	("Pedro", 18, 1),
	("Marta", 54, 3),
	("Elisa", 41, 3),
	("Marcela", 29, 3),
	("Erica", 29, 4),
	("Chris", 19, 1),
	("Mike", 22, 2);
```

## Container Docker

```sh
# linux
$ docker run --name trybe-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7

# Mac M1
$ docker run --name trybe-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d --platform linux/x86_64 mysql:5.7
```