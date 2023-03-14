SELECT * FROM estados;

SELECT * FROM estados where id = 27;

INSERT INTO cidades (nome, area, estados_id)
VALUES("Campinas", 795, 27);

INSERT INTO cidades (nome, area, estados_id)
VALUES("Niteroi", 133.9, 21);

INSERT INTO cidades (nome, area, estados_id)
VALUES("Caruaru", 920.6, (SELECT id FROM estados WHERE sigla = "PE"));

INSERT INTO cidades (nome, area, estados_id)
VALUES("Juazeiro do Norte", 248.2, (SELECT id FROM estados WHERE sigla = "CE"));

SELECT * FROM cidades;

