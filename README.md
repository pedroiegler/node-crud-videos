# 🚀 Node.js CRUD de Vídeos com Fastify e PostgreSQL

Este projeto é um exemplo de CRUD (Create, Read, Update, Delete) de vídeos desenvolvido com **Node.js**, **Fastify** e **PostgreSQL**. O foco principal é estudo e prática de organização de projetos backend, incluindo uso do **REST Client** para testar os endpoints diretamente no VS Code.

---

## 🎯 Objetivos do Projeto
1. Praticar a construção de um CRUD com Node.js e PostgreSQL
2. Organizar o projeto de forma clara e escalável
3. Aplicar o padrão de repositórios
4. Utilizar SQL nativo com segurança
5. Explorar o uso do REST Client como ferramenta de teste local

---

## 🛠 Tecnologias

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) (extensão do VS Code)
  
---

## ⚙️ Como rodar o projeto

1️⃣ **Clone o repositório:**
```bash
git clone https://github.com/pedroiegler/node-crud-videos.git
cd node-crud-videos
```

2️⃣ **Instale as dependências:**
```bash
npm install
```

3️⃣. **Configure o banco de dados:**

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```bash
PGHOST=localhost
PGUSER=seu_usuario
PGPASSWORD=sua_senha
PGDATABASE=nome_do_banco
```
> **Crie um arquivo `.env` na raiz do projeto com o conteúdo acima.**  

4️⃣ **Crie a tabela no banco:**
```bash
node src/repositories/create-table.js
```

5️⃣ **Inicie o servidor:**
```bash
npm run dev
```

---

## 🧪 Como testar as rotas com REST Client

Este projeto utiliza um arquivo `routes.http` que permite testar os endpoints diretamente do VS Code usando a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

> Basta instalar a extensão, abrir o arquivo `routes.http` e clicar em **"Send Request"** acima de cada bloco de requisição.

---

## 📬 Contato  

Caso tenha dúvidas, entre em contato:  

📧 E-mail: [pedroiegler1601@outlook.com](mailto:pedroiegler1601@outlook.com)  
