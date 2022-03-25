
O justify-content alinha os flex items no container de acordo com a direção. Essa propriedade possui os valores flex-start que alinha os itens ao início do container, flex-end que alinha os itens ao final do container, center que alinha os itens ao centro do container, space-between cria um espaçamento igual entre os elementos, mantendo o primeiro grudado no início e o último no final, e space-around também cria um espaçamento entre os elementos, mas os espaçamentos do meio são duas vezes maiores que o inicial e final.

Já a propriedade align-items alinha os flex items de acordo com o eixo transversal (cross-axis). Os valores que essa propriedade aceita são stretch , que é seu valor padrão e faz com os flex items cresçam igualmente, flex-start alinha os itens ao início, flex-end alinha os itens ao final, center alinha os itens ao centro e baseline que alinha os itens de acordo com a linha base da tipografia.

Por fim, a propriedade align-content alinha as linhas do container em relação ao eixo transversal (cross-axis), sendo que essa propriedade só funciona caso haja mais de uma linha de flex items. As opções de alinhamento que o align-content apresenta são stretch , seu valor padrão que faz com que os flex items cresçam igualmente na vertical, flex-start , alinha todas as linhas de itens ao início, flex-end , que alinha todas as linhas de itens ao final, center que alinha todas as linhas ao centro, space-between , que cria um espaçamento igual entre as linhas, mantendo a primeira grudada no topo e a última no bottom, e space-around , que também cria um espaçamento entre as linhas, mas os espaçamentos do meio são duas vezes maiores que o top e o bottom.

Para fixar

Interessante quantas possibilidades para manipular o posicionamento de elementos o flex-box nos traz, não é? Copie o código abaixo e teste algumas destas possibilidades para fixar seu conhecimento.

1 - Utilizando o código abaixo, teste as possibilidades ( center , flex-start , flex-end , space-around e space-between ) para a propriedade justify-content .


<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Justify Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 20%;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
  </body>
</html>

2 - Teste as possibilidades ( center , flex-start , flex-end , stretch e baseline ) para a propriedade align-items . Não se esqueça de copiar o código abaixo! 😉

<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Align Items</title>
    <style>
      .box-one {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 70px;
        min-height: 80px;
        margin: 10px 5px;
        text-align: center;
        width: 50px;
      }

      .box-two {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        min-height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 50px;
      }

      .box-three {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 30px;
        margin: 10px 5px;
        min-height: 50px;
        text-align: center;
        width: 50px;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box-one">1</div>
      <div class="box-two">2</div>
      <div class="box-three">3</div>
    </div>
  </body>
</html>

3 - Teste as possibilidades ( center , flex-start , flex-end , stretch , space-around e space-between ) para a propriedade align-content .

<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Align Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        min-height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 30%;
      }

      .box-container {
        /* ADICIONE AQUI SEUS TESTES */
        background-color: #0fa36b;
        display: flex;
        flex-wrap: wrap;
        height: 600px;
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
      <div class="box">8</div>
      <div class="box">9</div>
    </div>
  </body>
</html>

https://www.w3schools.com/css/css3_flexbox.asp
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://flexboxfroggy.com
http://www.flexboxdefense.com
https://the-echoplex.net/flexyboxes/
https://codepen.io/enxaneta/full/adLPwv