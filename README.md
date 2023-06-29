# API Express em TypeScript

Esse repositório é uma api de blog, ou seja ela tem o proposito de se ter usuário onde conseguem realizar login, curti posts, criar posts, editar seus post e etc...

Criei esse repositório para apenas treinar a linguagem TS em uma situação real de uso, como a criação de uma API, seguinto com quase todas as funcionalidades do TS, como tipagem, POO, logo ela não possui todas as rotas terminadas, mais me ajudou muito para ter uma base de back-end um pouco mais avançado, envolvendo também a parte de se criar uma arquitetura para o back-end.

<br>

## Funcionalidades

- Registrar usuário
- Ler usuário pelo ID
- Login
- Modificar o nome do usuário

<br>

## Stack utilizada

**Back-end:** Node, Express, TS, Prisma.ts, JWT

<br>

## Rodando localmente

### É necessário criar um arquivo .env com as variáveis:
- DATABASE_URL: Url do DB que queira utilizar
- SECRETE_KEY: Key para o JWT

Clone o projeto

```bash
  git clone https://github.com/AbnerSilvaBarbosa/API_Typescript
```

Entre no diretório do projeto

```bash
  cd API_Typescript
```

Instale as dependências

```bash
  npm i
```

Rodar as migrations do prisma
```bash
  npx prisma generate
  npx prisma migrate deploy
```

Inicie o servidor

```bash
  npm run dev
```

<br>

## Aprendizados

Aprendi a como pensar em criar uma API, tanto como segurança, escalabilidade da aplicação em si, arquitetura de uma API ou como pensar nela, além de entender algumas tecnlogias como JWT, Prisma, TS e Express, além de conseguir pensar na arquitetura do banco de dados, algo que eu sentia falta como um programador que quer codar back-end

