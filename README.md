## Premissas Assumidas

1. **Ambiente de Desenvolvimento**:
   - O backend foi desenvolvido utilizando Node.js e Express, e o frontend com React.
   - A API está sendo executada localmente na porta 5000.
   - Utilizei bibliotecas e frameworks padrão para a construção do projeto, conforme as instruções.

2. **Validação de Dados**:
   - A validação da data considera apenas datas no formato ISO e garante que a data seja no futuro.

3. **Persistência de Dados**:
   - Os lembretes são armazenados na memória do servidor. Reinicializações do servidor limparão os dados armazenados.
   - Não foi implementado armazenamento persistente (banco de dados) devido ao escopo limitado do projeto.

4. **Interface do Usuário**:
   - A interface foi desenvolvida para ser responsiva e funcional em navegadores modernos.
   - Utilizei componentes básicos de CSS para estilização.

5. **Testes**:
   - Os testes automatizados foram criados para verificar a funcionalidade básica das APIs e dos componentes React.
   - Testes unitários para a API e para os componentes React foram incluídos conforme o escopo do projeto.

## Decisões de Projeto

1. **Escolha de Tecnologias**:
   - **Backend**: Utilizei Node.js com Express para criar uma API RESTful devido à sua simplicidade e popularidade para desenvolvimento rápido.
   - **Frontend**: React foi escolhido para criar uma interface interativa e modular. Utilizei `axios` para comunicação com a API.

2. **Estrutura do Projeto**:
   - **Backend**: A API foi estruturada com rotas separadas para criação, leitura e exclusão de lembretes. A lógica de manipulação de dados está dentro das rotas.
   - **Frontend**: O projeto foi dividido em componentes principais (`Header`, `Form`, `ReminderList`) para manter uma boa organização e reutilização de código.

3. **Validação e Erros**:
   - A validação de entradas foi realizada tanto no frontend quanto no backend para garantir que os dados enviados ao servidor estejam corretos.
   - Mensagens de erro claras foram implementadas para fornecer feedback ao usuário em caso de entradas inválidas.

4. **Estilização**:
   - Utilizei CSS básico e módulos SCSS para estilização dos componentes. O uso de módulos SCSS ajuda a evitar conflitos de CSS e mantém o código organizado.

5. **Armazenamento e Persistência**:
   - Para simplificar o projeto, os dados são armazenados apenas em memória no backend. Essa abordagem é adequada para um protótipo, mas para um projeto em produção, um banco de dados seria necessário.
