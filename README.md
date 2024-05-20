# Sistema Gerencial

Este repositório contém um projeto Node.js utilizando TypeScript, Prisma ORM, e Docker. Abaixo, você encontrará a estrutura do projeto e descrições de cada diretório e arquivo.

## Estrutura do Projeto

```plaintext
prisma
|-- migrations
|   |-- 20240518163226_
|   |-- 20240519042702_create_relationships
|   |-- migration_lock.toml
|-- schema.prisma
src
|-- env
|-- index.ts
|-- http
|   |-- controllers
|   |   |-- register.ts
|   |-- routes.ts
|-- lib
|   |-- prisma.ts
|-- app.ts
|-- server.ts
.env
.env.example
.eslintignore
.eslintrc.json
.gitignore
.npmrc
docker-compose.yml
package-lock.json
package.json
tsconfig.json
```

### Diretórios e Arquivos

#### `prisma/`
Este diretório contém os arquivos relacionados ao Prisma ORM.

- **migrations/**: Diretório onde estão armazenadas as migrações do banco de dados.
  - `20240518163226_`: Migration para criar a tabela usuário.
  - `20240519042702_create_relationships`: Migration para criar todas as tabelas.
  - `migration_lock.toml`: Arquivo que trava o estado das migrations.

- **schema.prisma**: Arquivo de esquema do Prisma, onde são definidas as modelos de dados e configurações do banco de dados.

#### `src/`
Diretório principal do código-fonte do projeto.

- **env/**: Diretório destinado a arquivos relacionados ao ambiente da aplicação.

- **index.ts**: Ponto de entrada principal do aplicativo.

- **http/**: Diretório para componentes relacionados ao HTTP (controllers e rotas).
  - **controllers/**: Diretório para os controladores da aplicação.
    - `register.ts`: Controlador para registrar novos recursos.
  - `routes.ts`: Arquivo contendo as definições das rotas da aplicação.

- **lib/**: Diretório para bibliotecas e utilitários.
  - `prisma.ts`: Arquivo de configuração e inicialização do Prisma Client.

- `app.ts`: Arquivo de configuração principal da aplicação.
- `server.ts`: Arquivo de inicialização do servidor.

#### Arquivos de Configuração

- **.env.example**: Arquivo de exemplo para variáveis de ambiente `.env` como referência.

- **.eslintignore**: Arquivo de configuração do ESLint para ignorar arquivos e diretórios específicos.
- **.eslintrc.json**: Arquivo de configuração do ESLint para padronização do código.

- **.gitignore**: Arquivo especificando quais arquivos e diretórios devem ser ignorados pelo Git.

- **.npmrc**: Arquivo de configuração do NPM.

- **docker-compose.yml**: Arquivo de configuração do Docker Compose para orquestrar os serviços do contêiner Docker.

- **package-lock.json**: Arquivo de bloqueio do NPM que garante a instalação consistente das dependências.
- **package.json**: Arquivo de configuração do NPM, incluindo dependências e scripts do projeto.

- **tsconfig.json**: Arquivo de configuração do TypeScript.

## Configuração do Projeto

### Pré-requisitos

- Node.js
- Docker
- Prisma CLI

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Renomeie o arquivo `.env.example` para `.env` e ajuste as variáveis conforme necessário.

4. Configure o Docker:
   ```bash
   docker-compose up -d
   ```

5. Execute as migrações do Prisma:
   ```bash
   npx prisma migrate deploy
   ```

### Scripts NPM

- **Iniciar o servidor**:
  ```bash
  npm run dev
  ```

- **Lint**:
  ```bash
  npm run lint
  ```

### Contribuição

1. Fork o repositório.
2. Crie uma branch com a nova feature ou correção de bug:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adiciona minha feature'
   ```
4. Envie para a branch principal:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

