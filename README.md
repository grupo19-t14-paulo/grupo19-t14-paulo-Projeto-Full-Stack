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

---

## 2. Desenvolvedores

| Diego Ramos  | Franklin Marins |Jéssica Dayane|Petrarca Cavalcante|Valdecir Teixeira|
| :---: | :---: | :---: | :---: | :---: |
| [Linkedin](https://www.linkedin.com/in/diegodcramos/)  | [Linkedin](https://www.linkedin.com/in/franklin-marins/) |[Linkedin](https://www.linkedin.com/in/jessica-dayane-4885b7183/)|[Linkedin](https://www.linkedin.com/in/petrarcacavalcante/)|[Linkedin](https://www.linkedin.com/in/valdecir-teixeira/)|
| [Github](https://github.com/Diegodelli) | [Github](https://github.com/Franklmarins)  |[Github](https://github.com/jessicadmonteiro)|[Github](https://github.com/Petrarca-Cavalcante)|[Github](https://github.com/vardeba)|

[ Voltar para o topo ](#tabela-de-conteúdos)

---

## 3. Documentação


### 3.1 Front-End

para uma melhor organização e experiência, a documentação do Front End foi feita usando a ferramenta Notion.

- [Documentação Front-End](https://complete-pincushion-992.notion.site/Motors-Shop-766e894a660e477b880461347076641c)

### 3.2 Back-End

A documentação do Back End está aqui abaixo.

- [Índice](#7-índice)

[ Voltar para o topo ](#tabela-de-conteúdos)

---

## 4. Início Rápido


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

A URL base da aplicação:
http://localhost:3001/


[ Voltar para o topo ](#tabela-de-conteúdos)

---
## 5. Autenticação

A autenticação é feita por Bearer token, ao fazer login.

---

## 6. Endpoints


| Método | Rota                        | Descrição                           				 |
|--------|-----------------------------|-----------------------------------------------------------------|
| POST   | /users                      | Criação de um usuário.              				 |
| GET    | /users                      | Lista as informações do usuário.    				 |
| PATCH  | /users                      | Edita as informações do usuário. 				 |
| DELETE | /users                      | Deleta o usuário.                   				 |
| POST   | /users/resetpassword        | Envia um email para resetar a senha.				 |
| PATCH  | /users/resetpassword/:token | Reseta a senha.                     				 |
| POST   | /login                      | Faz login no site.                  				 |
| POST   | /adverts                    | Criação de um anúncio.               				 |
| GET    | /adverts                    | Lista todos os anúncios.               			 |
| GET    | /adverts/filters            | Lista os anúncios com filtro.       				 |
| GET    | /adverts/:id                | Lista um anúncio específico.          				 |
| GET    | /adverts/seller/:id         | Lista todos os anúncios de um vendedor. 			 |
| PATCH  | /adverts/:id                | Edita as informações do anúncio.     				 |
| DELETE | /adverts/:id                | Deleta o anúncio.               				 |
| GET    | /adverts/images/:id         | Lista as imagens do anúncio.   				 |
| POST   | /adverts/images/:id         | Cria uma imagen no anúncio.  					 |
| DELETE | /adverts/images/:id         | Deleta uma imagem do anúncio.  				 |
| POST   | /comments/:id               | Cria um comentário em um anúncio.                               |
| GET    | /comments/:id               | Lista todos os comentários do anúncio.                          |
| GET    | /comments/users/:id         | Lista todos os comentários do anúncio de um usuário específico. |
| PATCH  | /comments/:id               | Edita um comentário.  						 |
| DELETE | /comments/:id               | deleta um comentário.  					 |


[ Voltar para o topo ](#tabela-de-conteúdos)

---


## 7. Índice

- [Users](#1-users)
    - [POST - /users](#11-criação-de-usuário)
    - [GET - /users](#12-listando-usuário)
    - [PATCH - /users](#13-editando-usuário)
    - [DELETE - /users](#14-deletando-usuário)
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

[ Voltar para o topo ](#tabela-de-conteúdos)

---

## 1. **Users**

O objeto User é definido como:

| Campo        | Tipo   | Descrição                         	   |
| -------------|--------|------------------------------------------|
| id           | string | Identificador único do usuário.  	   |
| name         | string | O nome do usuário.                	   |
| email        | string | Email do usuário.                        |
| cpf          | string | CPF do usuário.        		   |
| phone        | string | Telefone do usuário.                     |
| birthDate    | date ou string | Data de aniversário do usuário.  |
| description  | null ou string | Descrição do usuário.            |
| password     | string | Senha do usuário.       		   |
| type         | string | Tipo de usuário.        		   |
| street       | string | Rua onde o usuário mora.         	   |
| number       | string | Número da casa do usuário.       	   |
| complement   | string | Complemento da casa do usuário.          |
| city         | string | Cidade onde o usuário mora.      	   |
| state        | string | Estado onde fica a cidade.       	   |
| cep          | string | Cep onde o usuário mora.       	   |
| reset_token  | null ou string | token para resetar a senha.      |

### Endpoints

| Método | Rota       | Descrição                                     |
|--------|------------|-----------------------------------------------|
| POST   | /users     | Criação de um usuário. 		 	      |
| GET    | /users     | Lista as informações do usuário. 	      |
| PATCH  | /users     | Edita as informações do usuário. 	      |
| DELETE | /users     | Deleta o usuário.      			      |
| POST   | /users/resetpassword | Envia um email para resetar a senha.|
| PATCH  | /users/resetpassword/:token | Reseta a senha.              |


[ Voltar para os Índices ](#7-índice)

---

### 1.1. **Criação de Usuário**

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
	"name": "user 1",
	"email": "user_1@mail.com",
	"cpf": "12345678910",
	"phone": "5541987654321",
	"birthDate": "2000-01-01",
	"description": "Descrição teste",
	"password": "12345678",
	"type": "Cliente",
	"street": "Rua sem saida",
	"number": "000",
	"complement": "",
	"city": "cidade",
	"state": "estado",
	"cep": "00000000"
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": "1a0cd370-7b80-48ba-a5a4-eca313ffd60e",
	"name": "user 1",
	"email": "user_1@mail.com",
	"cpf": "12345678910",
	"phone": "5541987654321",
	"birthDate": "2000-01-01",
	"description": "Descrição teste",
	"type": "Cliente",
	"street": "Rua sem saida",
	"number": "000",
	"complement": "",
	"city": "cidade",
	"state": "estado",
	"cep": "00000000",
	"reset_token": null
}
```

### Possíveis Erros:
| Código do Erro          | Descrição                                           |
|-------------------------|-----------------------------------------------------|
| 409 Conflict            | Email already registered.                            |
| 400 Bad request         | 'name', 'email', 'cpf', 'phone', 'birthDate', 'password', 'type', 'street', 'number', 'complement', 'city', 'state', 'cep' key required.                                |


[ Voltar para os Índices ](#7-índice)

---

### 1.2. **Listando Usuário**

### `/users`

### Exemplo de Request:
```
GET /users
Host: http://localhost:3000/users
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIgMSIsImlhdCI6MTY4ODE1MTA4NywiZXhwIjoxNjg4MjM3NDg3LCJzdWIiOiIxYTBjZDM3MC03YjgwLTQ4YmEtYTVhNC1lY2EzMTNmZmQ2MGUifQ.7Sj11yHXD6OFwE96YvSxdBLaz9W0gYV-KwTS5eCRlCM
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
{
	"id": "1a0cd370-7b80-48ba-a5a4-eca313ffd60e",
	"name": "user 1",
	"email": "user_1@mail.com",
	"cpf": "12345678910",
	"phone": "5541987654321",
	"birthDate": "2000-01-01",
	"description": "Descrição teste",
	"type": "Cliente",
	"street": "Rua sem saida",
	"number": "000",
	"complement": "",
	"city": "cidade",
	"state": "estado",
	"cep": "00000000",
	"reset_token": null
}
```

### Possíveis Erros:
| Código do Erro  | Descrição       |
|-----------------|-----------------|
| 401 Unauthorized   | Invalid token. |
| 401 Unauthorized   | No token has been sent. |
| 404 Not Found   | User not found. |


[ Voltar para os Índices ](#7-índice)

---

### 1.3. **Editando Usuário**

### `/users`

### Exemplo de Request:
```
PATCH /users
Host: http://localhost:3000/users
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIgMSIsImlhdCI6MTY4ODE1MTA4NywiZXhwIjoxNjg4MjM3NDg3LCJzdWIiOiIxYTBjZDM3MC03YjgwLTQ4YmEtYTVhNC1lY2EzMTNmZmQ2MGUifQ.7Sj11yHXD6OFwE96YvSxdBLaz9W0gYV-KwTS5eCRlCM
Content-type: application/json
```

### Corpo da Requisição:
```json
{
 "name": "user_1 da Silva",
 "password": "123456",
 "birthDate": "2000-12-01"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": "1a0cd370-7b80-48ba-a5a4-eca313ffd60e",
	"name": "user_1 da Silva",
	"email": "user_1@mail.com",
	"cpf": "12345678910",
	"phone": "5541987654321",
	"birthDate": "2000-12-01",
	"description": "Descrição teste",
	"type": "Cliente",
	"street": "Rua sem saida",
	"number": "000",
	"complement": "",
	"city": "cidade",
	"state": "estado",
	"cep": "00000000",
	"reset_token": null
}
```

### Possíveis Erros:
| Código do Erro  | Descrição       |
|-----------------|-----------------|
| 401 Unauthorized   | Invalid token. |
| 401 Unauthorized   | No token has been sent. |
| 404 Not Found   | User not found. |
| 409 Conflict    | Email already registered.  |


[ Voltar para os Índices ](#7-índice)

---

### 1.4. **Deletando Usuário**

### `/users`

### Exemplo de Request:
```
DELETE /users
Host: http://localhost:3000/users
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIgMSIsImlhdCI6MTY4ODE1MTA4NywiZXhwIjoxNjg4MjM3NDg3LCJzdWIiOiIxYTBjZDM3MC03YjgwLTQ4YmEtYTVhNC1lY2EzMTNmZmQ2MGUifQ.7Sj11yHXD6OFwE96YvSxdBLaz9W0gYV-KwTS5eCRlCM
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 No content
```

### Possíveis Erros:
| Código do Erro  | Descrição       |
|-----------------|-----------------|
| 401 Unauthorized   | Invalid token. |
| 401 Unauthorized   | No token has been sent. |
| 404 Not Found   | User not found. |


[ Voltar para os Índices ](#7-índice)

---

### 1.5. **Enviando email para resetar a senha do usuário**

### `/users/resetpassword`

### Exemplo de Request:
```
PATCH /users/resetpassword
Host: http://localhost:3000/users/resetpassword
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
 "email": "user_1@mail.com"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{ message: "Token sent to your email." }
```

### Possíveis Erros:
| Código do Erro  | Descrição       |
|-----------------|-----------------|
| 404 Not Found   | User not found. |


[ Voltar para os Índices ](#7-índice)

---

## 2. **Posts**

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


[ Voltar para os Índices ](#7-índice)

---

### 2.1. **Criação de posts**

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


[ Voltar para os Índices ](#7-índice)

---

### 2.2. **Listar todos os posts**

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

[ Voltar para os Índices ](#7-índice)

---

### 2.3. **Listar posts por user id**

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

[ Voltar para os Índices ](#7-índice)

---

## 3. **Comentário de post**

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

[ Voltar para os Índices ](#7-índice)

---

### 3.1. **Criação de comentário de post**

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

[ Voltar para os Índices ](#7-índice)

---

## 4. **Repost**

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

[ Voltar para os Índices ](#7-índice)

---

### 4.1. **Criação de repost**

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

[ Voltar para os Índices ](#7-índice)

---

## 5. **Comentário de repost**

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

[ Voltar para os Índices ](#7-índice)

---

### 5.1. **Criação de comentário de repost**

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

[ Voltar para os Índices ](#7-índice)

---
