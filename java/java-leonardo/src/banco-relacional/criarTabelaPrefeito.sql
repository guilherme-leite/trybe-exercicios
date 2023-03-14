CREATE TABLE IF NOT EXISTS prefeitos(
  id INT UNSIGNED not null auto_increment,
  nome VARCHAR(255) NOT NULL,
  cidade_id int UNSIGNED,
  PRIMARY KEY (id),
  UNIQUE KEY (cidade_id),
  FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);