De modo geral, estes são os types que podem ser usados de acordo com a aplicação do campo input:

button : define um botão;
checkbox : permite que o usuário selecione ZERO ou MAIS opções de um número limitado de escolhas;
color : campos de entrada que devem conter uma cor para selecionar;
date : campos de entrada que devem conter uma data;
datetime-local : campo de entrada de data e hora, sem fuso horário;
email : campos de entrada que devem conter um endereço de e-mail;
file : campo de seleção de arquivo e um botão "Procurar" para uploads de arquivos;
month : permite ao usuário selecionar um mês e ano;
number : define um campo de entrada numérico;
password : os caracteres do campo de senha são mascarados (mostrados como asteriscos ou círculos);
radio : permite que um usuário selecione APENAS UMA de um número limitado de opções;
range : define um controle para inserir um número (como um controle deslizante). Intervalo padrão é de 0 a 100;
reset : redefinirá todos os valores do formulário para seus valores padrão;
search : usado para campos de pesquisa;
submit : envia dados de formulário a um manipulador de formulários(especificado na action do form );
tel : campos de entrada que devem conter um número de telefone;
text : campo de entrada de texto de linha única;
time : permite que o usuário selecione um horário (sem fuso horário);
url : campos de entrada que devem conter um endereço URL;
week : permite ao usuário selecionar uma semana e um ano.

O valor default de um type , sempre será text . Portanto, é preciso especificar de acordo com a sua necessidade.
Como complemento, temos os atributos que são propriedades inseridas para seus inputs HTML . Com elas, você poderá adicionar funcionalidades ao seu formulário. Temos os seguintes atributos abaixo:

value : especifica um valor inicial para um campo de entrada;
readonly : especifica que um campo de entrada é somente leitura;
disabled : especifica que um campo de entrada deve ser desativado;
size : especifica a largura visível, em caracteres, de um campo de entrada;
maxlength : especifica o número máximo de caracteres permitidos em um campo de entrada;
min e max : especificam os valores mínimo e máximo para um campo de entrada;
multiple : especifica que o usuário tem permissão para inserir mais de um valor em um campo de entrada;
pattern : especifica uma expressão regular em relação à qual o valor do campo de entrada é verificado;
placeholder : especifica uma dica curta que descreve o valor esperado de um campo de entrada;
required : especifica que um campo de entrada deve ser preenchido antes de enviar o formulário;
step : especifica os intervalos de números válidos para um campo de entrada;
autofocus : especifica que um campo de entrada deve obter foco automaticamente quando a página é carregada;
height e width : especificam a altura e a largura de um elemento;
autocomplete : especifica se um campo de entrada deve ter o preenchimento automático ativado ou desativado.

O formulário deverá permitir que o usuário insira os seguintes campos:
Nome Completo:
Limitado entre 10 e 40 caracteres.
E-mail:
Limitado entre 10 e 50 caracteres.
Destino Preferido:
4 opções: Cidade, Campo, Praia, Montanhas.
Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
Limite de 500 caracteres.
Qual a melhor data para realizar sua viagem?
Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.
Esses serão os principais campos utilizadas nos próximos exercícios.
Crie um botão para enviar as informações preenchidas.
Agora vamos utilizar um pouco de javascript, para isso crie o arquivo script.js e o referencie no HTML.
Dica: Coloque a tag <script> no final do seu body.
Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() . Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?
Crie um botão que limpe as informações contidas nos campos;


Bônus

A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.