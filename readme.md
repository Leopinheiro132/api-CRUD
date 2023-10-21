# API CRUD de Perguntas e Respostas

Este é um projeto de API CRUD que permite criar, ler, atualizar e excluir perguntas e respostas. A API é construída usando o Node.js, Nodemon, Express e MongoDB.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado o Node.js, o MongoDB e as dependências listadas no arquivo `package.json`.

```node
npm install
```

## Configuração
O projeto utiliza variáveis de ambiente para configurar a conexão com o MongoDB. Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis:
```
MONGODB_URI=sua_uri_do_MongoDB (com senha e usuario)
PORT=3000
```

## Para o inicio

Antes de executar o projeto, certifique-se de ter tudo instalado, para executar so rodar o codigo abaixo na terminal

```node
npm start
```


## Estrutura do Projeto
`app.js`: O arquivo principal da aplicação que configura o servidor Express e define as rotas CRUD.</br>
`models/models.js`: Define o modelo do MongoDB para perguntas e respostas.</br>
`routes/routes.js`: Define as rotas da API.</br>
`package.json`: Arquivo de manifesto do Node.js com as dependências do projeto.</br>
### Uso:

`GET` "/": Retorna todas as perguntas.</br>
`POST` "/": Cria uma nova pergunta.</br>
`DELETE` "/:id": Exclui uma pergunta por ID.</br>
`PUT` "/:id": Atualiza uma pergunta por ID.</br>

## Exemplo de Uso
`POST:` http://localhost:3000/
Criar uma nova pergunta:
```
Body:
{
  "id": 1,
  "texto": "Qual é a capital da França?",
  "alternativas": [
    {
      "alternativaText": "Paris",
      "correta": true
    },
    {
      "alternativaText": "Londres",
      "correta": false
    }
  ]
}
```

`PUT:` http://localhost:3000/ id da pergunta gerada pelo banco
Atualizar uma pergunta existente:
```
Body:
{
  "texto": "Qual é a capital da Itália?",
  "alternativas": [
    {
      "alternativaText": "Roma",
      "correta": true
    },
    {
      "alternativaText": "Londres",
      "correta": false
    }
  ]
}
```

`DELETE:` http://localhost:3000/
Excluir uma pergunta por ID:

```
http://localhost:3000/1
```
