<div style="display: flex; align-items: flex-start;" >
  <h1>Ignite Feed</h1>
  <img src=./src/assets/ignite-logo.svg alt="Logo Ignite Feed" width="30px" style="padding-left: 20px; padding-top: 5px" />
</div>

## Índice
- [Contexto de Negócio](#contexto-de-negócio)
- [Desenvolvimento Local](#desenvolvimento-local)
    - [Requisitos](#requisitos)
    - [Passo a Passo](#passo-a-passo)
    - [Comandos Úteis](#comandos-úteis)
- [Para colaborar no projeto](#para-colaborar-no-projeto)
    - [Padrão de _Branch_](#padrão-de-branch)
    - [Padrão de _Commits_](#padrão-de-commits)


## Contexto de Negócio

**Ignite Feed** é uma aplicação que reproduz um feed de rede social.

## Desenvolvimento Local

### Requisitos
- [NVM](https://github.com/nvm-sh/nvm#install--update-script)
- [Node v18.17.1](https://nodejs.org/en)
- [Vite](https://vitejs.dev/)

### Passo a Passo

1. Clone o repositório:
```bash
  $ git clone https://github.com/CaioAlves10/ignite-feed.git
```

2. Entre no diretório:
```bash
  $ cd ignite-feed
```

3. Rode o comando para instalar a versão correta do Node:
```bash
  $ nvm install 18.17.1
```

3. Sete a versão correta do Node:
```bash
  $ nvm use 18.17.1
```

4. Instale as dependências do projeto:
```bash
  $ npm install
```

5. Rode a aplicação:
```bash
  $ npm run dev
```

6. A aplicação deve ser executada em [localhost:5173](http://localhost:5173/) no seu browser de preferência.


### Comandos Úteis

- **dev:** inicia a aplicação localmente.
```bash
  $ npm run dev
```

- **build:** compila o projeto e suas dependências.
```bash
  $ npm run build
```

- **lint:** destaca problemas de sintaxe e estilo no código.
```bash
  $ npm run lint
```

### Para colaborar no projeto

#### Padrão de _Branch_

1. Crie uma nova _branch_ a partir da `main`;

2. Padrão de nomenclatura da _branch_:<br>
   "tipo de implementação/o que foi feito"<br>
   **Exemplo**: `feat/create-comment-component`

#### Padrão de _Commits_

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), assim sendo, escreva suas mensagens de _commit_ em inglês e de forma objetiva.<br>
**Exemplo:** `feat: comment implementation`

<br />

---

<br />

<p align="center">
  Feito com 💙 por Caio Carvalho
</p>
