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
    - [POST - /users/resetpassword](#15-enviando-email-para-resetar-a-senha-do-usuário)
    - [PATCH - /users/resetpassword/:token](#16-resetando-a-senha-do-usuário)
- [Login](#2-login)
  - [POST - /login](#21-login-no-site)
- [Anúncio](#3-anúncio)
    - [POST - /adverts](#31-criação-do-anúncio)
    - [GET - /adverts](#32-listando-anúncios)
    - [GET - /adverts/filters](#33-listando-anúncios-com-filtro)
    - [GET - /adverts/:id](#34-listando-anúncio-pelo-id)
    - [GET - /adverts/seller/:id](#35-listando-anúncios-do-vendedor)
    - [PATCH - /adverts/:id](#36-editando-anúncio)
    - [DELETE - /adverts/:id](#37-deletando-anúncio)
    - [POST - /adverts/images/:id](#38-criando-a-imagem-do-anúncio)
    - [GET - /adverts/images/:id](#381-listando-a-imagem-do-anúncio)
    - [DELETE - /adverts/images/:id](#382-deletando-a-imagem-do-anúncio)
- [CommentPost](#4-Comentário-de-post)
    - [POST - /posts/comment](#41-criação-de-comentário-de-post)
- [Reposts](#5-Repost)
    - [POST - /reposts](#51-criação-de-repost)
- [CommentReposts](#6-Comentário-de-repost)
    - [POST - /reposts/comment](#61-Criação-de-comentário-de-repost)

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
POST /users/resetpassword
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
{
 "message": "Token sent to your email."
}
```

### Possíveis Erros:
| Código do Erro  | Descrição       |
|-----------------|-----------------|
| 404 Not Found   | User not found. |


[ Voltar para os Índices ](#7-índice)

---

### 1.6. **Resetando a senha do usuário**

### `/users/resetpassword/:token`

### Exemplo de Request:
```
PATCH /users/resetpassword/:token
Host: http://localhost:3000/users/resetpassword/:token
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
 "password": "1234567"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
 "message": "Your password has been changed."
}
```

### Possíveis Erros:
| Código do Erro  | Descrição       |
|-----------------|-----------------|
| 400 Bad Request | String must contain at least 4 character(s). |


[ Voltar para os Índices ](#7-índice)

---

## 2. **Login**

O objeto Login é definido como:

| Campo    | Tipo   | Descrição                   |
| ---------|--------|-----------------------------|
| token    | string | Token de acesso do usuário. |

### Endpoints

| Método   | Rota       | Descrição          |
|----------|------------|--------------------|
| POST     | /login     | Faz login no site. |


[ Voltar para os Índices ](#7-índice)

---

### 2.1. **Login no site**

### `/posts`

### Exemplo de Request:
```
POST /login
Host: http://localhost:3000/login
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição          |
|-------------|-------------|--------------------|
| email       | string      | E-mail do usuário. |
| password    | string      | Senha do usuário.  |


### Corpo da Requisição:
```json
{
	"email": "user_1@mail.com",
	"password": "12345678"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIgMSIsImlhdCI6MTY4ODE2NjU5NCwiZXhwIjoxNjg4MjUyOTk0LCJzdWIiOiIxYTBjZDM3MC03YjgwLTQ4YmEtYTVhNC1lY2EzMTNmZmQ2MGUifQ.Lq7zr1HbMSgXGTlUeQ1Iap-IQqB2nQXYQw3HAFaOOzE"
}
```

### Possíveis Erros:
| Código do Erro        | Descrição                  |
|-----------------------|----------------------------|
| 400 Bad request       | Invalid email.             |
| 403 Forbidden         | Invalid email or password. |


[ Voltar para os Índices ](#7-índice)

---

## 3. **Anúncio**

O objeto Anúncio é definido como:

| Campo       | Tipo   | Descrição                                       |
| ------------|--------|-------------------------------------------------|
| id          | string | Identificador único do usuário.                 |
| brand       | string | Marca do veículo.                               |
| model       | string   | Modelo do veículo.                            |
| year        | string | Ano de fabricação do veículo.    	         |
| fuel        | string | Tipo de combustível.    			 |
| mileage     | number | Quilometragem do veículo.   		         |
| color       | string | Cor do veículo.    				 |
| value       | number | Valor fipe do veículo.     			 |
| price       | number | Valor de venda do veículo.     		 |
| description | string | Descrição do veículo.     			 |
| active      | boolean| Booleano para saber se o anúncio está ativo.    |
| images      | array  | Um array de imagens do veículo.     		 |

### Endpoints

| Método | Rota                 | Descrição                              |
|--------|----------------------|----------------------------------------|
| POST   | /adverts             | Criação de um anúncio.               	 |
| GET    | /adverts             | Lista todos os anúncios.               |
| GET    | /adverts/filters     | Lista os anúncios com filtro.       	 |
| GET    | /adverts/:id         | Lista um anúncio específico.           |
| GET    | /adverts/seller/:id  | Lista todos os anúncios de um vendedor.|
| PATCH  | /adverts/:id         | Edita as informações do anúncio.     	 |
| DELETE | /adverts/:id         | Deleta o anúncio.               	 |
| GET    | /adverts/images/:id  | Lista as imagens do anúncio.   	 |
| POST   | /adverts/images/:id  | Cria uma imagen no anúncio.  		 |
| DELETE | /adverts/images/:id  | Deleta uma imagem do anúncio.  	 |

[ Voltar para os Índices ](#7-índice)

---

### 3.1. **Criação do anúncio**

### `/adverts`

### Exemplo de Request:
```
POST /adverts
Host: http://localhost:3000/adverts
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIgMSIsImlhdCI6MTY4ODE1MTA4NywiZXhwIjoxNjg4MjM3NDg3LCJzdWIiOiIxYTBjZDM3MC03YjgwLTQ4YmEtYTVhNC1lY2EzMTNmZmQ2MGUifQ.7Sj11yHXD6OFwE96YvSxdBLaz9W0gYV-KwTS5eCRlCM
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo   | Descrição                      		 |
|-------------|--------|-------------------------------------------------|
| brand       | string | Marca do veículo.                               |
| model       | string | Modelo do veículo.                              |
| year        | string | Ano de fabricação do veículo.    	         |
| fuel        | string | Tipo de combustível.    			 |
| mileage     | number | Quilometragem do veículo.   		         |
| color       | string | Cor do veículo.    				 |
| value       | number | Valor fipe do veículo.     			 |
| price       | number | Valor de venda do veículo.     		 |
| description | string | Descrição do veículo.     			 |
| active      | boolean| Booleano para saber se o anúncio está ativo.    |
| images      | array  | Um array de imagens do veículo.     		 |


### Corpo da Requisição:
```json
{
  "brand": "Chevrolet",
  "model": "Corsinha",
  "year": "2002",
  "fuel": "Gasolina / Etanol",
  "mileage": 10000,
  "color": "verde",
  "value": 15000,
  "price": 14000,
  "description": "Descrição do corsinha",
  "active": true,
  "images": [{"image":"1"}, {"image":"2"}, {"image":"3"}]
}
```

### Exemplo de Response:
```
201 Created
```
```json
{
	"id": "a9cdab46-85a5-4c3d-844d-bd5253fb28dc",
	"brand": "Chevroleet",
	"model": "Corsinha",
	"year": "2002",
	"fuel": "Gasolina / Etanol",
	"mileage": 10000,
	"color": "verde",
	"value": 15000,
	"price": 14000,
	"description": "Descrição do corsinha",
	"active": true,
	"images": [
		{
			"image": "1"
		},
		{
			"image": "2"
		},
		{
			"image": "3"
		}
	],
	"user": {
		"id": "1e3130f2-a783-447e-8f31-d5bddb764223",
		"name": "user_2",
		"email": "user_2@mail.com",
		"cpf": "10987654321",
		"phone": "5541123456789",
		"birthDate": "2000-12-01",
		"description": "Descrição teste 2",
		"type": "Vendedor",
		"street": "Rua sem saida",
		"number": "000",
		"complement": "",
		"city": "cidade",
		"state": "estado",
		"cep": "00000000",
		"reset_token": "e62ad5ce-763c-416d-881c-77f5399e8e4d"
	}
}
```

### Possíveis Erros:
| Código do Erro        | Descrição                                         |
|-----------------------|---------------------------------------------------|
| 401 Unauthorized   | Invalid token. |
| 401 Unauthorized   | No token has been sent. |
| 401 Unauthorized   | Only a seller can create an advert! |
| 404 Not Found   | User not found. |
| 409 Conflict   | Ad already exists, check if it's active. |


[ Voltar para os Índices ](#7-índice)

---

### 3.2. **Listando anúncios**

### `/adverts`

### Exemplo de Request:
```
GET /adverts
Host: http://localhost:3000/adverts
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 Ok
```
```json
[
{
	"id": "9089dca2-dc69-405a-8dd1-9729dba80a77",
	"brand": "Chevrolet",
	"model": "Corsinha",
	"year": "2002",
	"fuel": "Gasolina / Etanol",
	"mileage": 10000,
	"color": "verde",
	"value": 15000,
	"price": 14000,
	"description": "Descrição do corsinha",
	"active": true,
	"images": [
		{
			"image": "1"
		},
		{
			"image": "2"
		},
		{
			"image": "3"
		}
	],
	"user": {
		"id": "1e3130f2-a783-447e-8f31-d5bddb764223",
		"name": "user_1 da Silva",
		"email": "user_2@mail.com",
		"cpf": "10987654321",
		"phone": "5541123456789",
		"birthDate": "2000-12-01",
		"description": "Descrição teste 2",
		"type": "Vendedor",
		"street": "Rua sem saida",
		"number": "000",
		"complement": "",
		"city": "cidade",
		"state": "estado",
		"cep": "00000000",
		"reset_token": "e62ad5ce-763c-416d-881c-77f5399e8e4d"
	}
},
{
	"id": "9089dca2-dc69-405a-8dd1-9729dba80a77",
	"brand": "Chevrolet",
	"model": "Camaro",
	"year": "2003",
	"fuel": "Gasolina / Etanol",
	"mileage": 10000,
	"color": "verde",
	"value": 15000,
	"price": 14000,
	"description": "Descrição do camaro",
	"active": true,
	"images": [
		{
			"image": "1"
		},
		{
			"image": "2"
		},
		{
			"image": "3"
		}
	],
	"user": {
		"id": "1e3130f2-a783-447e-8f31-d5bddb764223",
		"name": "user_1 da Silva",
		"email": "user_2@mail.com",
		"cpf": "10987654321",
		"phone": "5541123456789",
		"birthDate": "2000-12-01",
		"description": "Descrição teste 2",
		"type": "Vendedor",
		"street": "Rua sem saida",
		"number": "000",
		"complement": "",
		"city": "cidade",
		"state": "estado",
		"cep": "00000000",
		"reset_token": "e62ad5ce-763c-416d-881c-77f5399e8e4d"
	}
}
]
```

### Possíveis Erros:
| Código do Erro        | Descrição                                         |
|-----------------------|---------------------------------------------------|
| 404 Not Found   | No products has been found. |

---

### 3.3. **Listando anúncios com filtro**

### `/adverts/filters`

### Exemplo de Request:
```
GET /adverts/filters
Host: http://localhost:3000/adverts/filters
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo   | Descrição                      		 |
|-------------|--------|-------------------------------------------------|



### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
201 Created
```
```json

```

### Possíveis Erros:
| Código do Erro        | Descrição                                         |
|-----------------------|---------------------------------------------------|
| 401 Unauthorized   | Invalid token. |
| 401 Unauthorized   | No token has been sent. |
| 401 Unauthorized   | Only a seller can create an advert! |
| 404 Not Found   | User not found. |
| 409 Conflict   | Ad already exists, check if it's active. |

---

### 3.4. **Listando anúncio pelo id**

### `/adverts/:id`

### Exemplo de Request:
```
GET /adverts/:id
Host: http://localhost:3000/adverts/9089dca2-dc69-405a-8dd1-9729dba80a77
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo   | Descrição                      		 |
|-------------|--------|-------------------------------------------------|
| id          | string | Id do anúncio.                                  |



### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 Ok
```
```json
{
	"id": "9089dca2-dc69-405a-8dd1-9729dba80a77",
	"brand": "Chevrole2et",
	"model": "Corsinha",
	"year": "2002",
	"fuel": "Gasolina / Etanol",
	"mileage": 10000,
	"color": "verde",
	"value": 15000,
	"price": 14000,
	"description": "Descrição do corsinha",
	"active": true,
	"images": [
		{
			"image": "1"
		},
		{
			"image": "2"
		},
		{
			"image": "3"
		}
	],
	"user": {
		"id": "1e3130f2-a783-447e-8f31-d5bddb764223",
		"name": "user_1 da Silva",
		"email": "user_2@mail.com",
		"cpf": "10987654321",
		"phone": "5541123456789",
		"birthDate": "2000-12-01",
		"description": "Descrição teste 2",
		"type": "Vendedor",
		"street": "Rua sem saida",
		"number": "000",
		"complement": "",
		"city": "cidade",
		"state": "estado",
		"cep": "00000000",
		"reset_token": "e62ad5ce-763c-416d-881c-77f5399e8e4d"
	}
}
```

### Possíveis Erros:
| Código do Erro        | Descrição                                         |
|-----------------------|---------------------------------------------------|
| 404 Not Found   | Ad does not exist. |


---

### 3.5. **Listando anúncios do vendedor**

### `/adverts/seller/:id`

### Exemplo de Request:
```
GET /adverts/seller/:id
Host: http://localhost:3000/adverts/seller/1e3130f2-a783-447e-8f31-d5bddb764223
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo   | Descrição                      		 |
|-------------|--------|-------------------------------------------------|
| id          | string | id do vendedor.                                 |



### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 Ok
```
```json
[
{
	"id": "9089dca2-dc69-405a-8dd1-9729dba80a77",
	"brand": "Chevrolet",
	"model": "Corsinha",
	"year": "2002",
	"fuel": "Gasolina / Etanol",
	"mileage": 10000,
	"color": "verde",
	"value": 15000,
	"price": 14000,
	"description": "Descrição do corsinha",
	"active": true,
	"images": [
		{
			"image": "1"
		},
		{
			"image": "2"
		},
		{
			"image": "3"
		}
	],
	"user": {
		"id": "1e3130f2-a783-447e-8f31-d5bddb764223",
		"name": "user_1 da Silva",
		"email": "user_2@mail.com",
		"cpf": "10987654321",
		"phone": "5541123456789",
		"birthDate": "2000-12-01",
		"description": "Descrição teste 2",
		"type": "Vendedor",
		"street": "Rua sem saida",
		"number": "000",
		"complement": "",
		"city": "cidade",
		"state": "estado",
		"cep": "00000000",
		"reset_token": "e62ad5ce-763c-416d-881c-77f5399e8e4d"
	}
},
{
	"id": "9089dca2-dc69-405a-8dd1-9729dba80a77",
	"brand": "Chevrolet",
	"model": "Camaro",
	"year": "2003",
	"fuel": "Gasolina / Etanol",
	"mileage": 10000,
	"color": "verde",
	"value": 15000,
	"price": 14000,
	"description": "Descrição do camaro",
	"active": true,
	"images": [
		{
			"image": "1"
		},
		{
			"image": "2"
		},
		{
			"image": "3"
		}
	],
	"user": {
		"id": "1e3130f2-a783-447e-8f31-d5bddb764223",
		"name": "user_1 da Silva",
		"email": "user_2@mail.com",
		"cpf": "10987654321",
		"phone": "5541123456789",
		"birthDate": "2000-12-01",
		"description": "Descrição teste 2",
		"type": "Vendedor",
		"street": "Rua sem saida",
		"number": "000",
		"complement": "",
		"city": "cidade",
		"state": "estado",
		"cep": "00000000",
		"reset_token": "e62ad5ce-763c-416d-881c-77f5399e8e4d"
	}
}
]
```

### Possíveis Erros:
| Código do Erro        | Descrição                                         |
|-----------------------|---------------------------------------------------|
| 404 Not Found   | User not found! |


---

---

### 3.6. **Editando anúncio**

### `/adverts/:id`

---

### 3.7. **Deletando anúncio**

### `/adverts/:id`

---

### 3.8. **Criando a imagem do anúncio**

### `/adverts/images/:id`

---

### 3.8.1 **Listando a imagen do anúncio**

### `/adverts/images/:id`

---

### 3.8.2 **Deletando a imagem do anúncio**

### `/adverts/images/:id`


[ Voltar para os Índices ](#7-índice)

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
