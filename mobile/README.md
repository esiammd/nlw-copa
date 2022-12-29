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

- [React Native](https://reactnative.dev/)
- [Native Base](https://nativebase.io/)
- [Expo](https://expo.dev/)
- [OAuth2](https://oauth.net/2/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Como executar
1.  Clone o repositório: `git clone git@github.com:esiammd/nlw-copa.git`
2.  Acesse a pasta do projeto: `cd nlw-copa/mobile`
3.  Instale as dependências (node_modules): `npm install`
4.  Crie um app no google para ter acesso ao OAuth2 (https://docs.expo.dev/guides/authentication/#google).
5. Faça uma copia do arquivo `.env.example` e chame-a de `.env` e informe o seu CLIENT_ID.
6. Alterar o endereço do arquivo `src/services/api.ts` colocando o IP da sua máquina.
7. Execute o comando: `npx expo start --tunnel`

**Obs.1:** Aqui você vai precisar ter instalado o aplicativo Expo, caso teste via mobile, ou Android Studio (caso Windows e Linux) ou Xcode (caso Mac) para testes via desktop.

**Obs.2:** Para testar a aplicação mobile você precisará ter o servidor executando também ([como executar o backend](../server/README.md)).
