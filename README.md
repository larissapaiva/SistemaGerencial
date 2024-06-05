# Documentação do Sistema de Gerenciamento de Emissão de Notas Fiscais (NFs)

## Visão Geral

O sistema de gerenciamento de emissão de notas fiscais (NFs) é uma plataforma que facilita a emissão, controle e acompanhamento de NFs. Este sistema permite a criação de usuários com diferentes níveis de permissão (Admin e Usuário Básico), a gestão de clientes, a criação de propostas e a categorização de clientes em PF, PJ e Offshore. Além disso, inclui um dashboard para monitoramento de saldo e inadimplência.

## Requisitos Funcionais

1. **Gestão de Usuários:**
   - O sistema deve permitir o cadastro de novos usuários.
   - O sistema deve permitir a edição e exclusão de usuários.
   - O sistema deve permitir a autenticação de usuários com login e senha.
   - O sistema deve diferenciar permissões entre usuários Admin e Usuário Básico.

2. **Cadastro de Clientes:**
   - O sistema deve permitir o cadastro de novos clientes.
   - O sistema deve permitir a edição e exclusão de clientes.
   - O sistema deve classificar clientes como PF, PJ ou Offshore.

3. **Emissão de Notas Fiscais:**
   - O sistema deve permitir a emissão de novas NFs pelo Admin.
   - O sistema deve permitir a edição e exclusão de NFs.
   - O sistema deve aplicar juros automaticamente para clientes PJ.
   - O sistema deve gerar relatórios de NFs emitidas.

4. **Propostas:**
   - O sistema deve permitir a criação de novas propostas.
   - O sistema deve permitir a edição e exclusão de propostas.
   - O sistema deve associar propostas a clientes específicos.

5. **Serviços Oferecidos:**
   - O sistema deve permitir o cadastro de novos serviços.
   - O sistema deve permitir a edição e exclusão de serviços.

6. **Dashboard:**
   - O sistema deve mostrar o saldo total previsto para o mês.
   - O sistema deve listar clientes inadimplentes.
   - O sistema deve mostrar o saldo total recebido no mês.
   - O sistema deve gerar gráficos e relatórios visuais.

## Requisitos Não-Funcionais

1. **Desempenho:**
   - O sistema deve ser capaz de processar e responder às solicitações em menos de 2 segundos.
   - O sistema deve suportar até 1000 usuários simultâneos sem degradação de desempenho.

2. **Segurança:**
   - O sistema deve utilizar criptografia para armazenar senhas de usuários.
   - O sistema deve utilizar HTTPS para todas as comunicações.
   - O sistema deve implementar controle de acesso baseado em roles (RBAC).

3. **Usabilidade:**
   - O sistema deve ter uma interface intuitiva e fácil de usar.
   - O sistema deve ser acessível em dispositivos móveis e desktops.
   - O sistema deve seguir as diretrizes de acessibilidade web (WCAG 2.1).

4. **Manutenibilidade:**
   - O sistema deve ser modular e fácil de manter.
   - O sistema deve ter documentação de código e API detalhada.

5. **Disponibilidade:**
   - O sistema deve estar disponível 99,9% do tempo, exceto em períodos de manutenção programada.
   - O sistema deve ter backup diário automático.

6. **Compatibilidade:**
   - O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge).
   - O sistema deve funcionar em diferentes sistemas operacionais (Windows, macOS, Linux).

## Regras de Negócio

1. **Cadastro de Usuários:**
   - Apenas Admins podem cadastrar novos usuários.
   - Usuários não podem se autogerenciar em termos de permissão (ex: um Usuário Básico não pode se promover a Admin).

2. **Classificação de Clientes:**
   - Clientes PJ devem ter CNPJ válido.
   - Clientes PF devem ter CPF válido.
   - Clientes Offshore não precisam de CPF/CNPJ, mas devem ter uma identificação válida.

3. **Emissão de Notas Fiscais:**
   - NFs emitidas para clientes PJ devem incluir um acréscimo de juros conforme definido nas configurações do sistema.
   - NFs não podem ser emitidas para clientes inadimplentes até que todas as pendências sejam resolvidas.

4. **Propostas:**
   - Propostas devem ter uma data de emissão futura especificada.
   - Propostas podem ser convertidas automaticamente em NFs na data especificada, se configurado.

5. **Serviços Oferecidos:**
   - Cada serviço deve ter um nome e uma descrição única.
   - O valor do serviço deve ser especificado e pode ser editado conforme necessário.

6. **Dashboard:**
   - O saldo total previsto deve ser calculado com base nas NFs emitidas e propostas aprovadas.
   - A lista de clientes inadimplentes deve ser atualizada em tempo real com base nos pagamentos recebidos.
   - O saldo total recebido deve ser atualizado diariamente.

## Fluxo de Trabalho

1. **Criação de Usuário:** Admin cadastra novos usuários no sistema.
2. **Cadastro de Cliente:** Admin adiciona novos clientes e classifica-os como PF, PJ ou Offshore.
3. **Cadastro de Serviços:** Admin cadastra os serviços oferecidos pela empresa.
4. **Criação de Propostas:** Admin cria propostas indicando quando as próximas NFs devem ser emitidas.
5. **Emissão de NFs:** Admin emite NFs para os clientes, aplicando juros automáticos para PJ.
6. **Monitoramento no Dashboard:** Admin e Usuários Básicos monitoram saldo previsto, clientes inadimplentes e saldo recebido no mês.

## Requisitos Técnicos

- **Backend:** API RESTful (Node.js)
- **Frontend:** Interface Web Responsiva (React)
- **Banco de Dados:** Relacional (PostgreSQL)
- **Autenticação e Autorização:** JWT
- **Relatórios:** Geração de relatórios em PDF e Excel
