# Documentação do Sistema de Gerenciamento de Emissão de Notas Fiscais (NFs)

## Minimundo

O Sistema de Gerenciamento de Emissão de Notas Fiscais é uma plataforma integrada que facilita a emissão, controle e acompanhamento de notas fiscais, proporcionando uma interface amigável e eficiente para empresas de diversos portes. Este sistema abrange funcionalidades como a criação de usuários com diferentes níveis de permissão, a gestão detalhada de clientes, a geração de propostas e a categorização de clientes em Pessoa Física (PF), Pessoa Jurídica (PJ) e Offshore. Além disso, inclui um robusto dashboard para o monitoramento de saldo e inadimplência, garantindo que os administradores tenham uma visão clara e precisa da saúde financeira da empresa.

No sistema, existem dois tipos principais de usuários: Administradores (Admin) e Usuários Básicos. Os Administradores possuem acesso total a todas as funcionalidades, incluindo a capacidade de gerenciar outros usuários, cadastrar e editar clientes, criar e aprovar propostas, emitir notas fiscais e visualizar relatórios detalhados no dashboard. Já os Usuários Básicos têm um conjunto de permissões mais restrito, podendo gerenciar clientes e criar propostas, mas sem acesso a certas funções administrativas e relatórios sensíveis.

O módulo de gestão de clientes permite o cadastro detalhado de clientes, coletando informações como nome, endereço, telefone, e-mail, e CPF/CNPJ. Cada cliente pode ser categorizado em Pessoa Física, Pessoa Jurídica ou Offshore, permitindo uma segmentação precisa e estratégias de atendimento específicas para cada tipo de cliente. A categorização facilita a aplicação de políticas de crédito e cobrança diferenciadas, além de permitir a personalização de propostas comerciais.

Os usuários podem criar propostas detalhadas que incluem informações sobre produtos ou serviços oferecidos, preços, condições de pagamento e prazo de validade. As propostas podem ser editadas e revisadas antes da aprovação final. Uma vez aprovadas, as propostas podem ser automaticamente convertidas em notas fiscais, agilizando o processo de faturamento e reduzindo erros manuais.

A emissão de notas fiscais é automatizada, garantindo conformidade com a legislação fiscal vigente. O sistema mantém um histórico completo de todas as notas fiscais emitidas, permitindo o acompanhamento do status de cada uma, seja pendente, paga, cancelada ou inadimplente. Este controle rigoroso assegura que a empresa mantenha uma visão clara sobre suas obrigações fiscais e recebíveis.

O dashboard do sistema oferece uma visão em tempo real do saldo das notas fiscais emitidas, dos valores recebidos e das pendências. Acompanhando a inadimplência de maneira detalhada, o sistema gera relatórios e alertas sobre clientes inadimplentes, especificando os valores devidos e o tempo de atraso. Isso permite que a equipe financeira tome medidas proativas para a recuperação de créditos, minimizando impactos negativos no fluxo de caixa.

Todas as informações sensíveis são criptografadas. Além disso, o sistema é projetado para estar em conformidade com todas as regulamentações fiscais vigentes, garantindo que as notas fiscais emitidas estejam sempre dentro das normas legais. Isso proporciona tranquilidade aos usuários, sabendo que seus processos fiscais estão sendo gerenciados de maneira segura e legalmente correta.

### Requisitos Funcionais do Sistema de Gerenciamento de Emissão de Notas Fiscais (NFs)

#### Gestão de Usuários
1. **Cadastro de Usuários**:
   - O sistema deve permitir o cadastro de novos usuários com informações como nome, e-mail, senha e nível de permissão (Admin ou Usuário Básico).
   
2. **Gerenciamento de Permissões**:
   - O sistema deve permitir que apenas os Administradores alterem as permissões dos usuários.
   - O sistema deve restringir o acesso dos Usuários Básicos às funcionalidades administrativas e relatórios sensíveis.

#### Gestão de Clientes
3. **Cadastro de Clientes**:
   - O sistema deve permitir o cadastro de clientes com informações como nome, endereço, telefone, e-mail, e CPF/CNPJ.
   - O sistema deve permitir a categorização dos clientes em Pessoa Física, Pessoa Jurídica ou Offshore.

4. **Edição e Exclusão de Clientes**:
   - O sistema deve permitir a edição das informações de clientes cadastrados.
   - O sistema deve permitir a exclusão de clientes, com a verificação de que não há notas fiscais pendentes associadas.

#### Criação e Gestão de Propostas
5. **Criação de Propostas**:
   - O sistema deve permitir a criação de propostas detalhadas contendo informações sobre produtos/serviços, preços, condições de pagamento e prazo de validade.
   - O sistema deve permitir a edição e revisão das propostas antes da aprovação.

6. **Conversão de Propostas em Notas Fiscais**:
   - O sistema deve permitir que propostas aprovadas sejam automaticamente convertidas em notas fiscais.

#### Emissão e Controle de Notas Fiscais
7. **Emissão de Notas Fiscais**:
   - O sistema deve permitir a emissão de notas fiscais a partir de propostas aprovadas, garantindo conformidade com a legislação fiscal vigente.
   - O sistema deve gerar um histórico completo das notas fiscais emitidas, incluindo status como pendente, paga, cancelada e inadimplente.

8. **Cancelamento de Notas Fiscais**:
   - O sistema deve permitir o cancelamento de notas fiscais, seguindo os procedimentos legais apropriados.

#### Dashboard e Monitoramento Financeiro
9. **Visualização de Saldo e Pendências**:
   - O sistema deve proporcionar um dashboard com a visualização em tempo real do saldo das notas fiscais emitidas, recebidas e pendentes.
   
10. **Acompanhamento de Inadimplência**:
    - O sistema deve gerar relatórios e alertas sobre clientes inadimplentes, especificando os valores devidos e o tempo de atraso.

#### Segurança e Conformidade
11. **Segurança de Acesso**:
    - O sistema deve implementar criptografia para dados sensíveis.

12. **Conformidade Fiscal**:
    - O sistema deve garantir que todas as notas fiscais emitidas estejam em conformidade com a legislação fiscal vigente.

#### Relatórios
13. **Geração de Relatórios**:
    - O sistema deve permitir a geração de relatórios detalhados sobre clientes, propostas, notas fiscais emitidas, saldos e inadimplências.
    
#### Backup e Recuperação
14. **Backup de Dados**:
    - O sistema deve realizar backups periódicos dos dados.
    - O sistema deve permitir a recuperação de dados a partir dos backups em caso de falhas.

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
   - Cada serviço deve ter um nome.

6. **Dashboard:**
   - O saldo total previsto deve ser calculado com base nas NFs emitidas e propostas aprovadas.
   - A lista de clientes inadimplentes deve ser atualizada em tempo real com base nos pagamentos recebidos.
   - O saldo total recebido deve ser atualizado diariamente.

## Requisitos Técnicos

- **Backend:** API RESTful (Node.js)
- **Frontend:** Interface Web Responsiva (React)
- **Banco de Dados:** Relacional (PostgreSQL)
- **Autenticação e Autorização:** JWT
- **Relatórios:** Geração de relatórios em PDF e Excel
