# Plano de Testes de Usabilidade

Para o teste de usabilidade, será realizado um questionário de UX através da plataforma Google Forms, onde os usuários testados responderão às seguintes perguntas com cinco opções de respostas (Discordo totalmente / Discordo / Neutro / Concordo / Concordo totalmente): 

    1. Acho que gostaria de usar este sistema com frequência
    2. Achei o sistema desnecessariamente complexo.
    3. Achei o sistema fácil de usar.
    4. Achei que seria necessário o apoio de um técnico para poder usar este sistema.
    5. As funções deste sistema estavam bem integradas.
    6. Achei este sistema muito inconsistente.
    7. Imagino que a maioria das pessoas aprenderiam a usar este sistema rapidamente.
    8. Achei o sistema muito complicado de usar.
    9. Eu me senti muito confiante com o sistema.
    10. Eu preciso aprender um monte de coisas antes de continuar usando este sistema.
    11. Eu me senti confortável com este sistema.
    12. Foi fácil encontrar a informação que eu precisava.
    13. Eu gostei de usar a interface do sistema.
    14. A interface do sistema é agradável.
    15. A organização de informações na tela do sistema é clara.

| **Caso de Teste** 	| **CT-09 - Usuários**                                                                           	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-01	A aplicação não permite o recebimento de cadastros de usuários com dados necessários em branco.   |
| Objetivo do Teste 	| Verificar se o usuário consegue cadastrar sem preencher dados, deixando em branco.                                     |
| Passos 	           | 1. Acessar o Aplicativo<br>2. ir em registrar <br> 3. Tentar cadastrar um usuário sem dados. <br> 4. salvar dados|
| Critério de Êxito  | Não irá permitir o cadastro do usuário pois precisa preencher os dados.                                  | 


| **Caso de Teste** 	| **CT-10 - Erro de cadastro e login**                                                                           	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-01	A aplicação deverá informar o erro de cadastro e login para o usuário caso os dados inseridos não estejam no banco de dados.   |
| Objetivo do Teste 	| Verificar se quando for fazer o cadastro ou login irá retornar um erro e/ou falha.                                     |
| Passos 	           | 1. Acessar o Aplicativo<br>2. Realizar o cadastro equivocado. <br> 3. Verificar se mostra a falha|
| Critério de Êxito  | Irá retornar uma falha no registro do usuário.                                  | 


| **Caso de Teste** 	| **CT-11 - Cronometro**                                                                           	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-07	A aplicação deverá cronometrar as partidas de forma correta.   |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar o cronômetro e se ele está funcionando corretamente.                                     |
| Passos 	           | 1. Acessar o Aplicativo<br>2. Acessar uma partida<br> 3. Apertar para iniciar o cronômetro                      |
| Critério de Êxito  | O cronômetro está rodando corretamente.                                  | 


| **Caso de Teste** 	| **CT-12 - Pagamento**                                                                           	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-09 E RF-10	A aplicação deverá informar a chave pix para os atletas, após cadastradas pelo dono da pelada.   |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar e realizar o pagamento via pix.                                     |
| Passos 	           | 1. Acessar o Aplicativo<br>2. Entrar em uma partida<br>3. Encerrar a partida<br>4. Realizar o pagamento.                      |
| Critério de Êxito  | O atleta deve conseguir realizar o pagamento via pix.                                 | 
