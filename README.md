
# Startup Database API

Esta é uma API Rest desenvolvida para interagir com um banco de dados contendo informações sobre diversas startups.

## Tecnologias e Ferramentas Utilizadas

- **Banco de Dados:** MongoDB (Atlas)
- **Ferramenta de Teste:** Insomnia
- **Linguagem de Programação:** JavaScript
- **Motor de Execução:** Node.js
- **Dependências:** Veja o arquivo `package.json` para uma lista completa de bibliotecas e ferramentas.

## Inicialização e Configuração de Ambiente

Esta API está configurada para se conectar ao meu banco de dados privado no MongoDB Atlas. Caso deseje utilizá-la, siga os seguintes passos:

1. Baixe o arquivo `startup_data.csv` e importe-o para o seu próprio cluster no MongoDB Atlas.
2. Substitua o valor da variável `process.env.MONGO_URI` no arquivo `backend/config/dbConnection.js` pelo link de conexão com o seu banco de dados.

### Passos para Iniciar a API

1. No terminal, navegue até a pasta `backend` do projeto.
2. Execute o comando `npm install` para instalar todas as dependências.
3. Execute `npm run dev` para iniciar a aplicação em modo de desenvolvimento.

Se tudo estiver correto, você verá as seguintes mensagens no terminal:

- `Server running on port 5000`
- `Database connected`

## Endpoints de Usuários

### Cadastro de Usuário (POST)

**Endpoint:** `http://localhost:5000/user/register`

### Login de Usuário (POST)

**Endpoint:** `http://localhost:5000/user/login`

### Listar Todos os Usuários (GET)

**Endpoint:** `http://localhost:5000/users`

### Deletar um Usuário (DELETE)

**Endpoint:** `http://localhost:5000/user/:id`

#### Corpo de Exemplo para POST:

```json
{
  "username": "username",
  "password": "password",
  "role": "user ou admin" --(necessário apenas no cadastro)
}
```

**Observação:** Após o login, o usuário receberá um token que deve ser utilizado no campo de autenticação "Bearer Token" de cada requisição HTTP. Dependendo da função (role) do usuário, o token permitirá acesso a funções restritas. Usuários com role "user" têm acesso apenas aos GETs das startups, enquanto usuários com role "admin" têm acesso a todas as funções. O token é obrigatório para todas as operações, exceto para registro e login.

## Endpoints de Startups

### Listar Todas as Startups (GET)

**Endpoint:** `http://localhost:5000/startups/all`

### Obter uma Startup (GET)

**Endpoint:** `http://localhost:5000/startup/:id`

### Registrar uma Startup (POST)

**Endpoint:** `http://localhost:5000/startups`

### Atualizar uma Startup (PUT)

**Endpoint:** `http://localhost:5000/startups/:id`

### Deletar uma Startup (DELETE)

**Endpoint:** `http://localhost:5000/startups/:id`

#### Corpo de Exemplo para POST e PUT:

```json
{
  "name": "nome da startup",
  "state_code": "SC",
  "city": "cidade",
  "founded_at": "dd-mm-aaaa",
  "category_code": "categoria",
  "status": "acquired ou closed"
}
```

## Autor

Este projeto foi inteiramente desenvolvido por **Yuri Severo**.
