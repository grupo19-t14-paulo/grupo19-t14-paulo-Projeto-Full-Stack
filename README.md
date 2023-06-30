# grupo19-t14-paulo-Projeto-Full-Stack

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Desenvolvedores](#2-desenvolvedores)
- [Documentação](#3-documentação)
    - [Front-End](#31-front-end)
    - [Back-End](#32-back-end)
- [Início Rápido](#4-início-rápido)
    - [Instalando Dependências](#41-instalando-dependências)
    - [Variáveis de Ambiente](#42-variáveis-de-ambiente)
    - [Migrations](#43-migrations)
- [Autenticação](#5-autenticação)
- [Endpoints](#6-endpoints)
- [Índice](#7-índice)

---

## 1. Visão Geral

A Kenzie Shop é um marketplace online que foi desenvolvido por uma equipe de cinco talentosos desenvolvedores. Durante um período de seis semanas, trabalhamos em conjunto, dividindo tarefas e seguindo um planejamento rigoroso definido pelo nosso Product Owner (P.O.).

Nossa equipe assumiu a responsabilidade tanto do back-end quanto do front-end do projeto, criando uma plataforma excepcional. Com um amplo inventário de veículos, recursos avançados de pesquisa e anúncios detalhados, oferecemos aos usuários uma experiência de compra e venda de veículos fácil, conveniente e segura.

Seguindo o planejamento estabelecido pelo nosso P.O., enfrentamos desafios, superamos obstáculos e trabalhamos em colaboração para alcançar o objetivo final: a criação da Kenzie Shop. Agora, convidamos você a explorar nossa plataforma e desfrutar da qualidade e satisfação que proporcionamos aos nossos clientes. Bem-vindo à Kenzie Shop, o lugar perfeito para comprar e vender veículos.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

---

## 2. Desenvolvedores

### Diego Delli Colli Ramos
- [Linkedin](https://www.linkedin.com/in/diegodcramos/)
- [Github](https://github.com/Diegodelli)
- dellicolli89@gmail.com

### Franklin Marins
- [Linkedin](https://www.linkedin.com/in/franklin-marins/)
- [Github](https://github.com/Franklmarins)
- franklmarins@gmail.com

---

## 3. Documentação
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1 Front-End

para uma melhor organização e experiência, a documentação do Front End foi feita usando a ferramenta Notion.

- [Documentação Front-End](https://complete-pincushion-992.notion.site/Motors-Shop-766e894a660e477b880461347076641c)

### 3.2 Back-End

A documentação do Back End está aqui abaixo.

- [Índice](#7-índice)

---

## 4. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 4.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 4.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 4.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

### 4.4. Testes

Para executar os teste, rode o comando:

```
yarn test
```

A URL base da aplicação:
http://localhost:3001/

---
## 5. Autenticação
[ Voltar para o topo ](#tabela-de-conteúdos)


Por enquanto, não foi implementada autenticação.

---

## 6. Endpoints
[ Voltar para o topo ](#tabela-de-conteúdos)

| Método | Rota             | Descrição                          |
|--------|------------------|------------------------------------|
| POST   | /users           | Criação de um usuário.             |
| GET    | /users           | Lista as informações do usuário.   |
| POST   | /posts           | Criação de um post.                |
| GET    | /posts           | Lista todos os posts.              |
| GET    | /posts/:id       | Lista um post específico.          |
| POST   | /posts/comment   | Faz um comentário em um post.      |
| POST   | /reposts         | Criação de um repost.              |
| POST   | /reposts/comment | Faz um comentário em um repost.    |

---


## 7. Índice
[ Voltar para o topo ](#tabela-de-conteúdos)

- [Users](#1-users)
    - [POST - /users](#11-criação-de-usuário)
    - [GET - /users](#12-listando-usuário)
- [Posts](#2-posts)
    - [POST - /posts](#21-criação-de-posts)
    - [GET - /posts](#22-listar-todos-os-posts)
    - [GET - /posts/:user_id](#23-listar-posts-por-user-id)
- [CommentPost](#3-Comentário-de-post)
    - [POST - /posts/comment](#31-criação-de-comentário-de-post)
- [Reposts](#4-Repost)
    - [POST - /reposts](#41-criação-de-repost)
- [CommentReposts](#5-Comentário-de-repost)
    - [POST - /reposts/comment](#51-Criação-de-comentário-de-repost)
---

## 1. **Users**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo               | Tipo   | Descrição                         |
| --------------------|--------|-----------------------------------|
| id                  | number | Identificador único do usuário.   |
| name                | string | O nome do usuário.                |
| lastInteractionDate | date   | Última interação do usuário.      |
| dailyInteractions   | number | Número de interações do dia.      |
| createdAt           | date   | Data de criação do usuário.       |

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /users     | Criação de um usuário.                  |
| GET      | /users     | Lista as informações do usuário.        |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /users
Host: http://localhost:3000/users
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"name": "user"
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
  "id": 1,
  "name": "user",
  "lastInteractionDate": null,
  "dailyInteractions": 0,
  "createdAt": "2023-05-26",
}
```

### Possíveis Erros:
| Código do Erro          | Descrição                                           |
|-------------------------|-----------------------------------------------------|
| 409 Conflict            | Name already registered.                            |
| 413 Payload too large   | Exceeds the maximum number of characters allowed.   |
| 400 Bad request         | 'name' key required.                                |

---

### 1.2. **Listando Usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
GET /users
Host: http://localhost:3000/users
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"userId": 1
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
  "id": 1,
  "name": "user",
  "createdAt": "2023-05-24",
  "lastInteractionDate": "2023-05-25",
  "dailyInteractions": 1,
    "posts": [],
    "post_comments": [],
    "reposts": [],
    "repost_comments": []
}
```

### Possíveis Erros:
| Código do Erro  | Descrição       |
|-----------------|-----------------|
| 404 Not Found   | User not found. |

---

## 2. **Posts**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Post é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário.                 |
| content    | string | Descrição do post.                              |
| createdAt  | date   | Data de criação.                                |
| user       | object | Informações do usuário que criou o post.        |

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /posts     | Criação de um usuário.                  |
| GET      | /posts     | Lista as informações do usuário.        |

---

### 2.1. **Criação de posts**

[ Voltar aos Endpoints ](#5-endpoints)

### `/posts`

### Exemplo de Request:
```
POST /posts
Host: http://localhost:3000/posts
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                      |
|-------------|-------------|--------------------------------|
| content     | string      | Conteúdo do post               |
| userId     | number      | Identificador único do usuário |


### Corpo da Requisição:
```json
{
	"content": "post content",
	"userId": 1
}
```

### Exemplo de Response:
```
201 Created
```
```json
{
    "id": 1,
    "createdAt": "2023-05-26",
    "content": "create post",
    "user": {
        "id": 1,
        "name": "user",
        "createdAt": "2023-05-24",
        "lastInteractionDate": "2023-05-26",
        "dailyInteractions": 1
    }    
}
```

### Possíveis Erros:
| Código do Erro        | Descrição                                         |
|-----------------------|---------------------------------------------------|
| 400 Bad request       | 'userId' and 'content' keys required.             |
| 413 Payload too large | Exceeds the maximum number of characters allowed. |
| 404 Not Found         | User not found.                                   |

---

### 2.2. **Listar todos os posts**

[ Voltar aos Endpoints ](#5-endpoints)

### `/posts`

### Exemplo de Request:
```
GET /posts
Host: http://localhost:3000/posts
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
    {
        "id": 1,
        "content": "post",
        "createdAt": "2023-05-24",
        "comments": []
    },
    {
        "id": 2,
        "content": "post2",
        "createdAt": "2023-05-24",
        "comments": []
    },
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 2.3. **Listar posts por user id**

[ Voltar aos Endpoints ](#5-endpoints)

### `/posts`

### Exemplo de Request:
```
GET /posts/1
Host: http://localhost:3000/posts/1
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro  | Tipo        | Descrição                      |
|------------|-------------|--------------------------------|
| userId     | number      | Identificador único do usuário |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
    {
        "id": 1,
        "content": "post",
        "createdAt": "2023-05-24"
    },
    {
        "id": 2,
        "content": "post2",
        "createdAt": "2023-05-24"
    }
]
```

### Possíveis Erros:

| Código do Erro  | Descrição       |
|-----------------|-----------------|
| 404 Not Found   | User not found. |

---

## 3. **Comentário de post**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Comment Post é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário.                 |
| content    | string | Descrição do post.                              |
| createdAt  | date   | Data de criação.                                |
| user       | object | Informações do usuário que criou o post.        |
| post       | object | Informações do post que o usuário comentou.     |

### Endpoints

| Método   | Rota           | Descrição                               |
|----------|----------------|-----------------------------------------|
| POST     | /posts/comment | Criação de comentário do post.          |

---

### 3.1. **Criação de comentário de post**

[ Voltar aos Endpoints ](#5-endpoints)

### `/posts/comment`

### Exemplo de Request:
```
POST /posts/comment
Host: http://localhost:3000/posts/comment
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                      |
|-------------|-------------|--------------------------------|
| content     | string      | Conteúdo do post               |
| userId      | number      | Identificador único do usuário |
| PostId      | number      | Identificador único do post    |


### Corpo da Requisição:
```json
{
	"content": "comment post",
	"userId": 1,
	"postId": 1
}
```

### Exemplo de Response:
```
201 Created
```
```json
{
    "id": 1,
    "createdAt": "2023-05-26",
    "content": "comment post",
    "user": {
        "id": 1,
        "name": "user",
        "createdAt": "2023-05-24",
        "lastInteractionDate": "2023-05-26",
        "dailyInteractions": 1
    },
    "post": {
        "id": 1,
        "content": "post",
        "createdAt": "2023-05-24"
    }    
}
```

### Possíveis Erros:
| Código do Erro        | Descrição                                         |
|-----------------------|---------------------------------------------------|
| 400 Bad request       | 'userId', 'content' and 'postId' keys required.   |
| 413 Payload too large | Exceeds the maximum number of characters allowed. |
| 404 Not Found         | User or post not found.                           |

---

## 4. **Repost**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Repost é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário.                 |
| createdAt  | date   | Data de criação.                                |
| post       | object | Informações do post que o usuário comentou.     |

### Endpoints

| Método   | Rota      | Descrição                           |
|----------|-----------|-------------------------------------|
| POST     | /reposts  | Criação de repost do post.          |

---

### 4.1. **Criação de repost**

[ Voltar aos Endpoints ](#5-endpoints)

### `/reposts`

### Exemplo de Request:
```
POST /reposts
Host: http://localhost:3000/reposts
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                      |
|-------------|-------------|--------------------------------|
| userId      | number      | Identificador único do usuário |
| PostId      | number      | Identificador único do post    |


### Corpo da Requisição:
```json
{
	"userId": 1,
	"postId": 1
}
```

### Exemplo de Response:
```
201 Created
```
```json
{
    "id": 1,
    "createdAt": "2023-05-26",
    "post": {
        "id": 1,
        "content": "post",
        "createdAt": "2023-05-24"
    }
}
```

### Possíveis Erros:
| Código do Erro        | Descrição                              |
|-----------------------|----------------------------------------|
| 400 Bad request       | "'userId' and 'postId' keys required   |
| 404 Not Found         | User or post not found.                |

---

## 5. **Comentário de repost**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Comment Repost é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário.                 |
| createdAt  | date   | Data de criação.                                |
| content    | string | Descrição do comentario.                        |
| user       | object | Informações do usuário que criou o post.        |
| repost     | object | Informações do repost que o usuário comentou.   |

### Endpoints

| Método   | Rota              | Descrição                           |
|----------|-------------------|-------------------------------------|
| POST     | /reposts/comment  | Criação de comentario do repost.    |

---

### 5.1. **Criação de comentário de repost**

[ Voltar aos Endpoints ](#5-endpoints)

### `/reposts/comment`

### Exemplo de Request:
```
POST /reposts/comment
Host: http://localhost:3000/reposts/comment
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                      |
|-------------|-------------|--------------------------------|
| content     | string      | Descrição do comentario.       |
| userId      | number      | Identificador único do usuário |
| PostId      | number      | Identificador único do post    |


### Corpo da Requisição:
```json
{
	"content": "comment repost",
	"userId": 1,
	"repostId": 1
}
```

### Exemplo de Response:
```
201 Created
```
```json
{    
    "id": 1,
    "createdAt": "2023-05-26",
    "content": "comment repost",
    "user": {
        "id": 1,
        "name": "user",
        "createdAt": "2023-05-24",
        "lastInteractionDate": "2023-05-26",
        "dailyInteractions": 2
    },
    "repost": {
        "id": 1,
        "createdAt": "2023-05-24"
    }    
}
```

### Possíveis Erros:
| Código do Erro        | Descrição                                         |
|-----------------------|---------------------------------------------------|
| 400 Bad request       | 'userId','repostId' and 'content' keys required   |
| 413 Payload too large | Exceeds the maximum number of characters allowed. |
| 404 Not Found         | User or repost not found.                         |

---
