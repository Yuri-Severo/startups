Esta é uma API Rest, desenvolvida para interagir com um banco de dados com informações de diversas startups. 

- Tecnologias e Ferramentas utilizadas:
Banco de dados: MongoDB (Atlas)
Ferramenta de teste: Insomnia
Linguagem de programação: JavaScript
Motor de compilação: NodeJS
Biliotecas e outros, podem ser encontrados no "package.json"
 
- Inicialização e configuração de ambiente:
Esta API está configurada para se conectar com o meu banco de dados privado no MongoDB Atlas, caso deseje utilizar, baixe o arquivo
startup_data.csv, importe para um cluster seu no MongoDB Atlas e substitua a variável "process.env.MONGO_URI" presento no arquivo
"backend/config/dbConnection.js" pelo link de conexão com o seu banco de dados.

Após conectar com o banco de dados, para que a API seja inicializada, certifique-se de abrir o terminal na pasta "backend"
insira o comando "npm install" para instalar as dependências
insira "npm run dev" para iniciar a aplicação

Ocorrendo tudo bem, as mensagens aparecerão no terminal:
"Server running on port 5000"
"DataBase connected"

- Funções de manipulação de Usuários:
POST (REGISTER USER): http://localhost:5000/user/register
POST (LOGIN USER): http://localhost:5000/user/login
GET (ALL USERS): http://localhost:5000/users
DEL (DELETE ONE): http://localhost:5000/user/:id

Corpo modelo para POST:
{
  "username": "username",
  "password": "password",
  "role": "user" ou "admin" (necessário somente no register)
}

Observação:
No login o usuário envia um json com suas informações ("username" e "password") e é retornado um token, o qual deve ser utilizado na ferramenta de teste 
no campo de autenticação "Bearer Token" de cada requisição HTTP. De acordo com a "role" do usuário, o token permite acesso à funções restritas,
o "user" tem acesso aos get's das startups e o "admin" à todas as funções. Sem o token, não é possível realizar nenhuma função, obrigando o registro
e login para o uso da API.


- Funções de manipulação do Banco de Dados:
GET (ALL): http://localhost:5000/startups/all
GET (ONE): http://localhost:5000/startup/:id
POST (REGISTER ONE): http://localhost:5000/startups
PUT (UPDATE ONE): http://localhost:5000/startups/:id
DEL (DELETE ONE): http://localhost:5000/startups/:id

Corpo modelo para POST e PUT:
{
		"name": "nome da startup",
		"state_code": "SC",
		"city": "cidade",
		"founded_at": "dd-mm-aaaa",
		"category_code": "categoria",
		"status": "acquired" ou "closed",
}

Este projeto foi inteiramente realizado por mim, Yuri Severo.

