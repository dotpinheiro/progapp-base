## Programação de Aplicativos - UTFPR
O objetivo deste repositório é criar uma base de desenvolvimento
backend para os alunos da disciplina de programação de aplicativos
da UTFPR - Campo Mourão.

#### Tecnologias
- NodeJS
- Express
- Sequelize

#### Links Úteis
- [Criando um projeto backend com express](https://www.youtube.com/watch?v=yZifRUvxdAk)
- [Configurando Sequelize e migrations](https://www.youtube.com/watch?v=Fbu7z5dXcRs)

#### Utilizando o projeto
O projeto consiste em uma estrutura simplificada de um backend com node utilizando express.

Para iniciar o projeto, clone este repositório e instale as dependências com o seguinte comando:
```
npm install
```
Após instalar as dependências rode o seguinte comando
```
npm start dev
```

##### Rotas
Por padrão as rotas do backend possuem o prefixo /api/

Dentro da pasta routes é possível criar um arquivo .router.js e definir os endpoints
para a rota específica, exemplo: user.router.js

Após a definição você deve importar o arquivo no index.js de routes conforme o arquivo example.router.js

##### Controllers
Os controllers são responsáveis por garantir a lógica de uma rota, dentro da pasta controllers
existe um exemplo no qual é utilizado na rota /example

##### Banco de dados
É possível utilizar o banco de dados de algumas formas, uma delas é com o Sequelize ORM que auxilia bastante na criação de queries e modelagem de banco. No trecho de links úteis há um vídeo explicando
a utilização.

Outra forma é utilizando o driver do banco de forma pura, criando as queries de forma "manual".
