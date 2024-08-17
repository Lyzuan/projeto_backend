# Projeto Backend

Este projeto é um backend desenvolvido com Node.js e Sequelize, utilizando MySQL como banco de dados. O projeto é uma API RESTful que permite gerenciar usuários, categorias e produtos.

## Funcionalidades

- **Usuários**
  - CRUD de usuários (Criar, Ler, Atualizar, Deletar)
  - Autenticação e autorização
- **Categorias**
  - CRUD de categorias
  - Filtros e paginação na busca de categorias
- **Produtos**
  - CRUD de produtos
  - Associação de produtos com categorias
  - Gerenciamento de imagens e opções de produtos

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de servidores web.
- **Sequelize**: ORM para Node.js.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **dotenv**: Carregamento de variáveis de ambiente.
- **bcrypt**: Biblioteca para hashing de senhas.
- **JEST**: Framework para testes.

## Configuração

### Pré-requisitos

- Node.js (v14 ou superior)
- MySQL

### Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/nome-repositorio.git


1. **Navegue até o diretório do projeto:**
    ```bash
    cd nome-repositorio
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:**
    ```env
    DB_NAME=projeto_backend
    DB_USER=root
    DB_PASSWORD=194100
    DB_HOST=localhost
    DB_DIALECT=mysql
    PORT=3000
    ```

4. **Configure o banco de dados MySQL e crie as tabelas usando os comandos SQL fornecidos.**

5. **Inicie o servidor:**
    ```bash
    npm start
    ```

   O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Endpoints

### Usuários

- **GET /v1/user/:id**: Obtém informações de um usuário pelo ID.
- **POST /v1/user**: Cria um novo usuário.
- **PUT /v1/user/:id**: Atualiza informações de um usuário.
- **DELETE /v1/user/:id**: Deleta um usuário.

### Categorias

- **GET /v1/category/search**: Obtém uma lista de categorias com filtros e paginação.
- **GET /v1/category/:id**: Obtém informações de uma categoria pelo ID.
- **POST /v1/category**: Cria uma nova categoria.
- **PUT /v1/category/:id**: Atualiza informações de uma categoria.
- **DELETE /v1/category/:id**: Deleta uma categoria.

### Produtos

- **GET /v1/product/search**: Obtém uma lista de produtos com filtros e paginação.
- **GET /v1/product/:id**: Obtém informações de um produto pelo ID.
- **POST /v1/product**: Cria um novo produto.
- **PUT /v1/product/:id**: Atualiza informações de um produto.
- **DELETE /v1/product/:id**: Deleta um produto.

## Testes

Para executar os testes, utilize o comando:
```bash
npm test

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
