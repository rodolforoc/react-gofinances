### React Consume API

Aplicação Web feita em [ReactJS](https://reactjs.org/) junto com [TypeScript](https://www.typescriptlang.org/) para consumir dados recebidos da [API NodeJS Postgres](https://github.com/rodolforoc/node-postgres) referente a exibição das transações juntamente com o balance geral da conta. Também tem uma funcionalidade de importação de dados através de um arquivo .csv

## Tecnologias
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/)

### Interface

<p align="center">
  <img src = "https://github.com/rodolforoc/react-gofinances/blob/master/src/assets/gofinances1.PNG" width="700">
</p>
<p align="center">
  <img src = "https://github.com/rodolforoc/react-gofinances/blob/master/src/assets/gofinances2.PNG" width="700">
</p>

### Funcionalidades da aplicação

- **`Listar as transações da sua API`**: A página `Dashboard` exibe uma listagem, com o campo `title`, `value`, `type` e `category` de todas as transações que estão cadastradas na sua API.

- **`Exibir o balance da sua API`**: A página `Dashboard`, exibe o balance, contendo o total geral, junto ao total de entradas e saídas.

- **`Importar arquivos CSV`**: Na página `Import`, é possível o envio de um arquivo no formato `csv`, que irá fazer a importação das transações para o banco de dados.

## Instalações e usos

Clone ou faça o download desse repositório:

```
# Clone o repositório
$ git clone https://github.com/rodolforoc/react-gofinances 
```

Dentro da pasta /react-gofinances rode os seguintes comandos:

```
# Instale as dependencias
$ yarn

# Rode a Aplicação Web
$ yarn start

# running on port 3000
```

