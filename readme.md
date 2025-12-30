# 🧪 Automação de Testes E2E - Automation Exercise

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Projeto de automação de testes End-to-End (E2E) desenvolvido para validar as principais funcionalidades do site [Automation Exercise](https://automationexercise.com/). O foco deste projeto é demonstrar a estruturação de uma arquitetura de testes escalável, organizada e profissional.

## 🚀 Tecnologias e Práticas Utilizadas

* **Cypress:** Framework de automação de testes moderno.
* **Page Object Model (POM):** Padrão de projeto para organização e reutilização de código.
* **JavaScript:** Linguagem utilizada na escrita dos scripts.
* **Cypress File Upload:** Plugin para manipulação de upload de arquivos.
* **Seletores Robustos:** Prioridade para atributos personalizados (`data-qa`) para evitar quebra de testes com mudanças de CSS.
* **Fixtures:** Massa de dados separada da lógica de teste.

## 📂 Estrutura do Projeto

A arquitetura foi pensada para facilitar a manutenção e leitura:


```

cypress/
├── e2e/
│   ├── fluxo_cadastro.cy.js    # Cenários de Teste (Specs)
│   └── ...
├── fixtures/
│   └── teste.txt               # Arquivos para upload
├── support/
│   ├── pages/                  # Page Objects (Mapeamento de elementos e ações)
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   └── ContatoPage.js
│   ├── e2e.js                  # Configurações globais e plugins
│   └── commands.js

```

## ✅ Cenários Cobertos

Atualmente, o projeto cobre os seguintes fluxos:

1.  **Navegação:** Acesso à Home Page e validação de carregamento.
2.  **Autenticação (Login):**
    * Login com credenciais válidas.
    * Validação de erro ao tentar logar com credenciais inválidas.
3.  **Cadastro:**
    * Tentativa de cadastro com e-mail já existente.
    * Início de fluxo de cadastro com sucesso.
4.  **Fale Conosco (Contact Us):**
    * Preenchimento completo do formulário.
    * **Upload de arquivo** (anexo) automatizado.
    * Envio e validação da mensagem de sucesso.

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
Para executar este projeto, você precisará ter instalado:
* [Node.js](https://nodejs.org/) (Versão LTS recomendada)
* Git

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/itjuanr/qa-automation-exercise.git](https://github.com/itjuanr/qa-automation-exercise.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd qa-automation-exercise
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute os testes:**
    * **Modo Visual (Interface do Cypress):**
    ```bash
    npx cypress open
    ```
    * **Modo Headless (Terminal):**
    ```bash
    npx cypress run
    ```

