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
  
| **Caso de Teste** 	| **CT-04 - Permitir que o usuário crie a lista de presença semanal.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-04 - Permitir que o usuário crie a lista de presença semanal. <br> RF-05 - Permitir que o usuário manifeste sua presença ou ausência na lista semanal.|
| Objetivo do Teste 	| Permitir que o usuário crie uma lista de presença.               |
| Passos 	           | 1. Acessar o aplicativo <br> 2. Ir no icone de criar lista de presença <br> 3. Clicar em criar lista <br> 4. Colocar as informações necessárias <br> 5. Salvar dados <BR> 6. Verificar se os usuários conseguem manifestar a sua presença ou não                                                                                                           |
| Critério de Êxito  | Verificar se o usuário consegue criar a lista de presença.<br> Verificar se o usuário consegue confirmar ou não a presença.|

| **Caso de Teste** 	| **CT-05 - A aplicação deverá sortear os times com base nos participantes da lista semanal.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-06 - A aplicação deverá sortear os times com base nos participantes da lista semanal.|
| Objetivo do Teste 	| O aplicativo deverá sortear os times.               |
| Passos 	           | 1. Acessar o aplicativo <br> 2. Acessar partida<br> 3. Clicar no botão sortear times                                                                                              |
| Critério de Êxito  | Verificar se o aplicativo fez sorteio dos jogadores conforme a lista de presença da partida|

| **Caso de Teste** 	| **CT-06 - A aplicação deverá cronometrar as partidas.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-07 - A aplicação deverá cronometrar as partidas.|
| Objetivo do Teste 	| O aplicativo deverá ter um cronômetro para ser utilizado nas partidas.               |
| Passos 	           | 1. Acessar aplicativo<br> 2. Ir na aba Menu<br> 3. Clicar no botão cronômetro<br> 4. Clicar no botão iniciar                                                                                              |
| Critério de Êxito  | O cronômetro deverá contar o tempo, parar quando clicar no botão e salvar o tempo quando clicar em parar.|

| **Caso de Teste** 	| **CT-07 - A aplicação deverá armazenar as estatísticas dos marcadores e assistentes da partida..**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-08 - A aplicação deverá armazenar as estatísticas dos marcadores e assistentes da partida.|
| Objetivo do Teste 	| O aplicativo irá armazenar as estatísticas e assistências das partidas               |
| Passos 	           | 1. Acessar o aplicativo<br> 2. Ir na aba Menu<br> 3. Clicar no botão partidas<br> 4. Entrar na partida<br> 5. Clicar no botão ver estatísticas e assistências da partidas.                                                                                               |
| Critério de Êxito  | Deverá conter as informações das estatísticas e assistências da partida|

| **Caso de Teste** 	| **CT-08 - Pagamentos.**                                	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-09 - A aplicação deverá informar aos semimensalistas e avulsos a chave PIX para pagamento. <br> RF-10 - A aplicação deverá permitir aos semimensalistas e avulsos informar o pagamento realizado.|
| Objetivo do Teste 	| Permitir que o usuário acesse o QRCode do pix.               |
| Passos 	           | 1. Acessar o aplicativo<br> 2. Ir na aba Menu <br> 3. Clicar em pagamentos <br> 4. Ler o QRCODE                                                                                              |
| Critério de Êxito  | Verificar se o usuário consegue fazer o pagamento via chave pix.<br> Verificar se o usuário consegue confirmar o pagamento.|


 

