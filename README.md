# Konv-back-api

## Sobre o projeto

Api desenvolvida fazendo integração com api de pokemons a [pokeapi](https://pokeapi.co/). Projeto contem duas rotas principais:

- Retornar paginado uma lista de pokemons.

## extra

- Retornar apenas um pokemon atravez do seu nome ou especie.

##

Projeto seguindo modelo de arquitetura em camadas com controller e service, decompondo o projeto para facilitar a compreensão e sua manuntenção, aplicando as boas praticas de clean code.

## Tecnologias utilizadas:

- JavaScript
- NodeJs
- Express
- core
- Nodemon
- dotenv
- axios
- express-async-errors

## Instrucoes para utilizar a api localmente

- Primeiro: clone o repositorio:

```shell
$ git clone git@github.com:GabrielliMelo/back.git
```

- Segundo: va para a pasta src

```
$ cd ./src
```

- Terceiro: instale as dependencias

```shell
$ yarn
```

Or:

```shell
$ npm install
```

## Configurando

Essa aplicação nao utiliza nenhum [banco de dados](https://www.oracle.com/br/database/what-is-database/).

### .env

Nesse arquivo você configura as variaveis de ambiente. Utilize os nomes das keys e coloque os valores referente ao que esta configurado na sua maquina.

| key             | description | default                    |
| --------------- | ----------- | -------------------------- |
| PORT            | porta       | 3008                       |
| POKEMON_API_URL | url pokeapi | https://pokeapi.co/api/v2/ |

## Iniciando projeto

Para iniciar a execução da aplicação:

```
$ yarn dev
```

Or:

```
$ npm run dev
```

- Utilize Insomnia ou Postman (Utilizei o insomnia) para testar as requisicões.

- A aplicação será iniciada na porta 3008

http://localhost:3008/pokemons?limit=10&page=1 - endpoint que retorna uma lista de pokemons
http://localhost:3008/pokemons/:name - rota que retorna informações de um pokemon

# Status code

- 200 (success) 😀
- 400 (bad request) 😱

```
 🚩 NÃO É OBRIGATÓRIO O TOKEN NO HEADER DAS REQUISIÇÕES - AUTENTICAÇÃO NAO NECESSÁRIA!
```

# url deploy

- https://back-pokemon-simbiox.herokuapp.com/

# Endpoints

## Lista de pokemons

### GET: /pokemons?limit=10&page=1

**Requisitos:**

- query params
  - limit
  - page

```js
Exemplo de resposta - Sucesso
ex: http://localhost:3008/pokemons?limit=2&page=1

[
	{
		"name": "bulbasaur",
		"sprites": {
			"back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
		},
		"species": {
			"name": "bulbasaur"
		},
		"height": 7,
		"weight": 69
	},
	{
		"name": "ivysaur",
		"sprites": {
			"back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
		},
		"species": {
			"name": "ivysaur"
		},
		"height": 10,
		"weight": 130
	}
]
```

## Consultar um pokemon

## Get: /pokemons/:name

**Requisitos:**

- path variable
  - name

```js
// Exemplo de resposta
{
	"name": "ditto",
	"sprites": {
		"back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
	},
	"species": {
		"name": "ditto"
	},
	"height": 3,
	"weight": 40,
	"abilities": [
		{
			"ability": {
				"name": "limber",
				"url": "https://pokeapi.co/api/v2/ability/7/"
			},
			"is_hidden": false,
			"slot": 1
		},
		{
			"ability": {
				"name": "imposter",
				"url": "https://pokeapi.co/api/v2/ability/150/"
			},
			"is_hidden": true,
			"slot": 3
		}
	]
}

```

## Pontos de melhoria

- Testes automatizados.
- Autenticação.

## extra para implementar

- Conectar no Sharepoint e obter isso de uma lista.
- método que insira novos pokemons.

## Desenvolvedora

```js
{
nome: "Gabrielli Melo da silva Borges",
Idade: 23,
Nivel Atual: "Júnior",
Competências: [
	"HTLM", "CSS","JavaScript", "NodeJs",
	"ReactJs", "Java", "Spring Boot",
	"Docker", "AWS", "PostgreSQL",
	"MySQL", "Redis", "API Rest",
	"Scrum", "Kanbam", "Git/GitFlow"
],
Habilidades: [
	"Comunicação", "Empatia", "Trabalho em equipe",
	"Positividade", "Proatividade",
	"Resolução de problemas", "...etc"
],
Linkdln: "https://www.linkedin.com/in/gabriellimeloborges/",
GitHub: "https://github.com/GabrielliMelo/"
}
```
