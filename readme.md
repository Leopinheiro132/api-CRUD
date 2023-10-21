# API CRUD de Perguntas e Respostas

Este é um projeto de API CRUD que permite criar, ler, atualizar e excluir perguntas e respostas. A API é construída usando o Node.js, Express e MongoDB.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado o Node.js, o MongoDB e as dependências listadas no arquivo `package.json`.

```shell```
```npm install```

## Configuração
O projeto utiliza variáveis de ambiente para configurar a conexão com o MongoDB. Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis:
```MONGODB_PASS=sua_senha_do_MongoDB```
```PORT=3000```


Estrutura do Projeto
app.js: O arquivo principal da aplicação que configura o servidor Express e define as rotas CRUD.
models/models.js: Define o modelo do MongoDB para perguntas e respostas.
routes/routes.js: Define as rotas da API.
package.json: Arquivo de manifesto do Node.js com as dependências do projeto.
Uso
GET /: Retorna todas as perguntas.
POST /: Cria uma nova pergunta.
DELETE /:id: Exclui uma pergunta por ID.
PUT /:id: Atualiza uma pergunta por ID.