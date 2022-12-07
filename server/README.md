<p align="center">
  <img src="https://raw.githubusercontent.com/rocketseat-education/nlw-copa-ignite/385128a4a3ea921b5b9cfb89bbb2746d3cdf2ea3/.github/logo.svg" alt="NLW Copa" width="25%" />
</p>

<h1 align="center">Projeto desenvolvido durante o NLW Copa da Rocketseat</h1>

<p align="center">
    <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-executar">Como executar</a>
</p>

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://www.npmjs.com/package/zod)
- [JWT](https://jwt.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Como executar
1.  Clone o repositório: `git clone git@github.com:esiammd/nlw-copa.git`
2.  Acesse a pasta do projeto no seu terminal: `cd nlw-copa/server`
3.  Instale as dependências (node_modules): `npm install`
4.  Faça uma copia do arquivo `.env.example` e chame-a de `.env`.
5. Execute `npx prisma migrate dev` para rodar as migrations.
    - **Obs.:** Esse comando executará as seeds também.
6. Execute o comando: `npm run dev`