# NodeProject

API REST simples de usuários feita com Node.js e Express, organizada em camadas (rotas, serviços e repositório).

## Rotas
| Método | Rota | O que faz |
|---|---|---|
| GET | `/users` | lista todos os usuários |
| GET | `/users/:id` | mostra um usuário |
| POST | `/users` | cria um usuário |
| PATCH | `/users/:id` | atualiza um usuário |
| DELETE | `/users/:id` | apaga um usuário |

## Como rodar
```bash
npm install
node app.js
```
A API sobe em `http://localhost:3000`.

## Tecnologias
Node.js e Express.

Projeto de estudo.
