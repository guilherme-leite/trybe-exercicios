-- Bônus

-- Exercício 6: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.

SELECT
  *
FROM Movies AS M
INNER JOIN BoxOffice AS BO
ON M.id = BO.movie_id
WHERE BO.rating > 8;