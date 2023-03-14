INSERT INTO empresas
  (nome, cnpj)
VALUES
  ('Bradesco', 1256987859),
  ('Vale', 1215478787),
  ('Cielo', 6987458787);

ALTER TABLE empresas MODIFY cnpj VARCHAR(10);

DESC empresas;
DESC prefeitos;
SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades
  (empresa_id, cidade_id, sede)
VALUES
  (1,9,1),
  (1,10,0),
  (2,9,0),
  (2,10,1);
