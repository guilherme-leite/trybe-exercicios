select e.nome as "nome do estado", c.nome as "nome da cidade", regiao from estados e, cidades c where e.id = c.estados_id;

select * from estados e;

SELECT c.nome as Cidade, e.nome as Estado, regiao as Região FROM estados e INNER JOIN cidades c on e.id = c.estados_id;