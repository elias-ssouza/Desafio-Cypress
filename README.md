
# Cypress API Test Automation - JSONPlaceholder

Este projeto utiliza **Cypress** para automação de testes em API REST, usando os endpoints da [JSONPlaceholder](https://jsonplaceholder.typicode.com), uma API fake para testes.

## 📁 Estrutura do Projeto

```
Desafio-Cypress/
├── cypress/
│   └── e2e/
│       └── comments/
│           └── comments.cy.js
│       └── posts/
│           ├── posts.cy.js
│       └── users/
│           ├── getUsers.cy.js
├── cypress.config.js
└── package.json
```

## 📌 Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

## 🚀 Instalação

```bash
git clone https://github.com/seu-usuario/cypress-jsonplaceholder.git
cd cypress-jsonplaceholder
npm install
```

## 🧪 Executar os testes

```bash
npx cypress open    # Modo interativo (UI)
npx cypress run     # Modo headless (CLI)
```

## 📄 Observação

A API JSONPlaceholder é *fake*, portanto os métodos POST, PUT, PATCH e DELETE não persistem os dados.

---
