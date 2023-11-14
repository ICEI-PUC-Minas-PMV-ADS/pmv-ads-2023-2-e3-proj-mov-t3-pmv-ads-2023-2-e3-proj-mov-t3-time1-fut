# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

# Plano de Testes de Software
<p align="justify">


| **Caso de Teste** 	| **CT-01 - Cadastrar usuário**                                                                      	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| Permitir que o usuário cadastre-se.                  |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar no aplicativo.                                               |
| Passos 	           | 1. Acessar o aplicativo<br>2. Clicar no icone Criar Cadastro<br>3. informar os dados necessários<br>4. Clicar no botão cadastrar<br>|
| Critério de Êxito  | Irá aparecer uma mensagem como: O cadastro foi realizado com sucesso.    |

 
| **Caso de Teste** 	| **CT-02 - Permitir que o usuário crie sua pelada.** 	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-02 -  Permitir que o usuário crie sua pelada. |
| Objetivo do Teste 	| Verificar se o aplicativo apresenta corretamente a partida de futebol criada.       |
| Passos 	           | 1. Acessar o aplicativo <br> 2. ir no icone de criar partida <br> 3. informar os dados <br> 4. verificar se a partida foi criada corretamente conforme os dados informados|
| Critério de Êxito  | As informações da partida devem ser exibidas corretamente no aplicativo |


| **Caso de Teste** 	| **CT-03 - Permitir que o usuário associe-se à uma pelada.**  |
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-03 - Permitir que o usuário associe-se à uma pelada. |
| Objetivo do Teste 	| Verificar se os usuários cadastrados coonseguem se associar a uma partida.               |
| Passos 	           | 1. Acessar o aplicativo <br> 2. Ir no icone de se associar a partida <br> 3. Acessar a partida <br> 4. ver as informações da partida, como horário, quem está confirmado, local|
| Critério de Êxito  | Verificar se o usuário consegue se associar a uma partida de futebol.|
  
| **Caso de Teste** 	| **CT-04 - Permitir que o usuário registre os gols da partida.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-04 - Permitir que o usuário registre os gols da partida. 
| Objetivo do Teste 	| Permitir que o usuário registre os gols da partida.               |
| Passos 	           | 1. Acessar o aplicativo <br> 2. Ir no icone de buscar partida <br> 3. Clicar na partida desejada <br> 4. Informar no campo os gols realizados nas partidas <br> 5. Salvar dados <BR> 6. Verificar se os gols foram registrados corretamente |
| Critério de Êxito  | Verificar se o usuário consegue criar a lista de presença.<br> Verificar se o usuário consegue confirmar ou não a presença.|

| **Caso de Teste** 	| **CT-05 - Permitir que o usuário visualize a lista de presença.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-05 - Permitir que o usuário visualize a lista de presença.|
| Objetivo do Teste 	| O aplicativo deverá mostrar a lista de presença.               |
| Passos 	           | 1. Acessar o aplicativo <br> 2. Acessar partida<br> 3. Clicar no botão lista de presença                                                                                              |
| Critério de Êxito  | Verificar se o aplicativo informou os nomes dos jogadores associados na partida|

| **Caso de Teste** 	| **CT-06 - A aplicação deverá ter uma aba de resenha para a galera postar no aplicativo.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-06 - A aplicação deverá ter uma aba de resenha para a galera postar no aplicativo.|
| Objetivo do Teste 	| O aplicativo deverá ter uma aba para resenha dos jogadores.               |
| Passos 	           | 1. Acessar aplicativo<br> 2. Ir na aba home<br> 3. Clicar no ícone em forma de lápis <br> 4. escrever um post<br> 5. Postar                                                                                              |
| Critério de Êxito  | O post deverá aparecer na tela home e também deverá permitir que os usuários curtem a publicação.|

| **Caso de Teste** 	| **CT-07 - A aplicação deverá cronometrar as partidas.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-07 - A aplicação deverá cronometrar as partidas.|
| Objetivo do Teste 	| O aplicativo deverá ter um cronômetro para ser utilizado nas partidas.               |
| Passos 	           | 1. Acessar aplicativo<br> 2. Ir na aba Menu<br> 3. Clicar no botão cronômetro<br> 4. Clicar no botão iniciar                                                                                              |
| Critério de Êxito  | O cronômetro deverá contar o tempo, parar quando clicar no botão e salvar o tempo quando clicar em parar.|

| **Caso de Teste** 	| **CT-08 - A Aplicação deverá permitir que os usuários avaliem as partidas.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-08 - A Aplicação deverá permitir que os usuários avaliem as partidas.|
| Objetivo do Teste 	| O aplicativo irá permitir que os usuários avaliem as partidas |
| Passos 	           | 1. Acessar o aplicativo<br> 2. Ir na aba de buscar partida<br> 3. Clicar no botão avaliar partida <br> 4. Avaliar de 1 a 5 clicando em cima do troféu em formato de chuteira<br> 5. Salvar.                                                                                               |
| Critério de Êxito  | O aplicativo deverá permitir avaliar a partida|

| **Caso de Teste** 	| **CT-08 - Pagamentos.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-09 - A aplicação deverá informar aos semimensalistas e avulsos a chave PIX para pagamento. <br> RF-10 - A aplicação deverá permitir aos semimensalistas e avulsos informar o pagamento realizado.|
| Objetivo do Teste 	| Permitir que o usuário acesse o QRCode do pix.               |
| Passos 	           | 1. Acessar o aplicativo<br> 2. Ir na aba Menu <br> 3. Clicar em pagamentos <br> 4. Ler o QRCODE                                                                                              |
| Critério de Êxito  | Verificar se o usuário consegue fazer o pagamento via chave pix.<br> Verificar se o usuário consegue confirmar o pagamento.|


 

