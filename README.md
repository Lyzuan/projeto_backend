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
Navegue até o diretório do projeto:

bash
Copiar código
cd nome-repositorio
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

env
Copiar código
DB_NAME=projeto_backend
DB_USER=root
DB_PASSWORD=194100
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3000
Configure o banco de dados MySQL e crie as tabelas usando os comandos SQL fornecidos.

Inicie o servidor:

bash
Copiar código
npm start
O servidor estará disponível em http://localhost:3000.

Endpoints
Usuários
GET /v1/user/
: Obtém informações de um usuário pelo ID.
POST /v1/user: Cria um novo usuário.
PUT /v1/user/
: Atualiza informações de um usuário.
DELETE /v1/user/
: Deleta um usuário.
Categorias
GET /v1/category/search: Obtém uma lista de categorias com filtros e paginação.
GET /v1/category/
: Obtém informações de uma categoria pelo ID.
POST /v1/category: Cria uma nova categoria.
PUT /v1/category/
: Atualiza informações de uma categoria.
DELETE /v1/category/
: Deleta uma categoria.
Produtos
GET /v1/product/search: Obtém uma lista de produtos com filtros e paginação.
GET /v1/product/
: Obtém informações de um produto pelo ID.
POST /v1/product: Cria um novo produto.
PUT /v1/product/
: Atualiza informações de um produto.
DELETE /v1/product/
: Deleta um produto.
Testes
Para executar os testes, utilize o comando:

bash
Copiar código
npm test
Contribuição
Sinta-se à vontade para contribuir com o projeto. Faça um fork do repositório, crie uma branch com suas alterações e envie um pull request.

Licença
Este projeto está licenciado sob a MIT License.
