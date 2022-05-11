Criando container MySQL
// Mac M1

$ docker run -d -p 3306:3306 --name mysql --platform linux/x86_64 --env MYSQL_ROOT_PASSWORD=12345 mysql
// Ubuntu

$ docker run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=12345 mysql
Database
CREATE DATABASE IF NOT EXISTS musics;

USE musics;

CREATE TABLE songs
(
  id INT NOT NULL auto_increment,
  name VARCHAR(30) NOT NULL,
  album VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO songs (name, album)

VALUES ('Carry On','Angels Cry'),
  ('Dawn of Victory','Symphony of Enchanted Lands'),
  ('Mirror Mirror','Nightfall in Middle Earth'),
  ('Distant Thunder','Ritual'),
  ('I Want Out','Keeper of the Seven Keys II');

CREATE TABLE artists
(
  id INT NOT NULL auto_increment,
  name VARCHAR(30) NOT NULL,
  genre VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO artists (name, genre)

VALUES ("Angra", "power metal"),
  ("Racionais MC's", "rap"),
  ("Elis Regina", "MPB"),
  ('Nina Simone', 'R&B');
Dockerizando a aplicação
version: '3.1'

services:
  mysql:
    image: mysql:5.7
    container_name: container_mysql
    environment:
      - MYSQL_ROOT_PASSWORD=password
    ports:
      - 3306:3306

  api:
    image: node:16
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=mysql
      - DB_NAME=musics
      - DB_USER=root
      - DB_PASSWORD=password
      - SERVER_PORT=3001
    volumes:
      - ./:/usr/app
    working_dir: /usr/app
    command: bash -c "npm install && npm start"
