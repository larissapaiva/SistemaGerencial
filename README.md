# Documentação do Sistema de Gerenciamento de Emissão de Notas Fiscais (NFs)

## Visão Geral

O sistema de gerenciamento de emissão de notas fiscais (NFs) é uma plataforma que facilita a emissão, controle e acompanhamento de NFs. Este sistema permite a criação de usuários com diferentes níveis de permissão (Admin e Usuário Básico), a gestão de clientes, a criação de propostas e a categorização de clientes em PF, PJ e Offshore. Além disso, inclui um dashboard para monitoramento de saldo e inadimplência.

## Funcionalidades Principais

### 1. Gestão de Usuários
- **Tipos de Usuários:**
  - **Admin:**
    - Adicionar novas NFs.
    - Cadastrar clientes na base.
    - Criar propostas para emissão de NFs futuras.
    - Cadastrar serviços oferecidos.
  - **Usuário Básico:**
    - Acesso restrito às funcionalidades básicas de visualização.

### 2. Cadastro de Clientes
- **Classificação de Clientes:**
  - **Pessoa Física (PF):**
    - Clientes individuais.
  - **Pessoa Jurídica (PJ):**
    - Empresas ou organizações.
    - NFs emitidas para PJ terão valor acrescido de juros.
  - **Offshore:**
    - Clientes com sede fora do país.

### 3. Emissão de Notas Fiscais (NFs)
- **Admin:** Responsável por adicionar e gerenciar as NFs emitidas.

### 4. Propostas
- **Criar Propostas:** Indicação de quando deve ser emitida a próxima NF para um cliente.

### 5. Serviços Oferecidos
- **Cadastro de Serviços:** Lista de serviços que a empresa oferece, permitindo inclusão, edição e exclusão.

### 6. Dashboard
- **Informações Exibidas:**
  - Saldo total previsto para entrar no mês.
  - Lista de clientes inadimplentes.
  - Saldo total recebido no mês.

## Estrutura do Sistema

### 1. Módulo de Usuários
#### Funcionalidades
- **Cadastro de Usuários:**
  - Criar, editar e excluir usuários.
  - Definir tipo de usuário (Admin ou Básico).

#### Campos
- Nome
- Email
- Senha
- Tipo de Usuário

### 2. Módulo de Clientes
#### Funcionalidades
- **Cadastro de Clientes:**
  - Adicionar novos clientes.
  - Editar informações de clientes existentes.
  - Classificação de clientes (PF, PJ, Offshore).

#### Campos
- Nome/Razão Social
- CPF/CNPJ
- Endereço
- Tipo de Cliente (PF, PJ, Offshore)
- Informações de Contato

### 3. Módulo de Notas Fiscais
#### Funcionalidades
- **Emissão de NFs:**
  - Adicionar novas NFs.
  - Editar NFs emitidas.
  - Aplicação automática de juros para clientes PJ.

#### Campos
- Cliente
- Serviço
- Valor
- Data de Emissão
- Data de Vencimento
- Juros (aplicável para PJ)
- Status de Pagamento

### 4. Módulo de Propostas
#### Funcionalidades
- **Criar Propostas:**
  - Indicar data para próxima emissão de NF.
  - Associar proposta a um cliente específico.

#### Campos
- Cliente
- Serviço
- Data Proposta
- Valor Proposto

### 5. Módulo de Serviços
#### Funcionalidades
- **Cadastro de Serviços:**
  - Adicionar, editar e excluir serviços oferecidos.

#### Campos
- Nome do Serviço
- Descrição
- Valor

### 6. Dashboard
#### Funcionalidades
- **Visualização de Dados:**
  - Saldo total previsto para o mês.
  - Lista de clientes inadimplentes.
  - Saldo total recebido no mês.

## Fluxo de Trabalho

1. **Criação de Usuário:** Admin cadastra novos usuários no sistema.
2. **Cadastro de Cliente:** Admin adiciona novos clientes e classifica-os como PF, PJ ou Offshore.
3. **Cadastro de Serviços:** Admin cadastra os serviços oferecidos pela empresa.
4. **Criação de Propostas:** Admin cria propostas indicando quando as próximas NFs devem ser emitidas.
5. **Emissão de NFs:** Admin emite NFs para os clientes, aplicando juros automáticos para PJ.
6. **Monitoramento no Dashboard:** Admin e Usuários Básicos monitoram saldo previsto, clientes inadimplentes e saldo recebido no mês.

## Requisitos Técnicos

- **Backend:** API RESTful (ex: Node.js, Django, etc.)
- **Frontend:** Interface Web Responsiva (ex: React, Angular, etc.)
- **Banco de Dados:** Relacional (ex: PostgreSQL, MySQL) ou NoSQL (ex: MongoDB)
- **Autenticação e Autorização:** JWT, OAuth ou similar
- **Relatórios:** Geração de relatórios em PDF e Excel

## Conclusão

Este sistema é projetado para simplificar e automatizar o processo de emissão e gestão de NFs, proporcionando uma ferramenta eficiente para administradores e uma visão clara das finanças para todos os usuários envolvidos.
