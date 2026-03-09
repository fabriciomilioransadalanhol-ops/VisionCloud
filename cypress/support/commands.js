Cypress.Commands.add('Login', (usuario, senha, codigoCliente) => {
  cy.visit('/#/autenticar')

  if(usuario)
    cy.ObterFormNome('usuario', usuario)

  if(senha)
   cy.ObterFormSenha('senha', senha)

  if(codigoCliente)
   cy.ObterFormNome('codigoCliente', codigoCliente)

  cy.ClicarBotao('Acessar')
})
Cypress.Commands.add('CadastraUsuario',(nome, cpf, login, email, senha, confirmaSenha) => {

    if(nome)
       cy.ObterFormNome('nomeCompleto', nome)

    if(cpf)
       cy.ObterFormNome('cpf', cpf)

    if(login)
       cy.ObterFormNome('login', login)

    if(email)
       cy.ObterFormNome('email', email)

    if(senha)
       cy.ObterFormNome('senha', senha)

    if(confirmaSenha)
       cy.ObterFormNome('confirmarSenha', confirmaSenha)

    cy.ClicarNaAba('tab', 'Empresas')

    cy.MarcarInputPorTexto('checkbox', 'novooo')

    cy.ClicarBotao('Cadastrar')
})
Cypress.Commands.add('CadastraPerfilUsuario',(nome, descricao) => {

  cy.ClicarBotao('Novo')

  if(nome) cy.ObterFormNome('nomePerfil', nome)
  if(descricao) cy.ObterFormNome('descricao', descricao)

  cy.ClicarBotao('Próximo')
  cy.ClicarBotao('Cadastrar')
})
Cypress.Commands.add('CadastraCliente',(cnpj, razaoSocial) => {

  cy.ClicarBotao('Novo')

  if(cnpj)
    cy.ObterFormCnpj('cnpj', cnpj)

  cy.ObterFormData('dataFundacao', '2026-2-9')

  if(razaoSocial)
    cy.ObterFormNome('razaoSocial', razaoSocial)

  // cy.ObterFormSelect('regimeTributario', regimeTributario)

  // cy.MarcarInputPorTexto('checkbox', 'ABATE DE AVES')

  // cy.ClicarNaAba('tablist', 'Segmento Empresaria')

  // cy.MarcarInputPorTexto('checkbox', 'Serviços de Coleta e Tratamento de Lixo')

  // cy.ClicarBotao('Novo')


})




Cypress.Commands.add('VerificarMensagemErro', (mensagem) => {
  cy.contains('.p-toast-detail, strong', mensagem).should('be.visible')
})
Cypress.Commands.add('ObterFormNome', (control, text) => {
    cy.get(`[formcontrolname="${control}"]`).find('input, textarea, cnpj').type(text)
})
Cypress.Commands.add('MarcarInputPorTexto', (tipo, texto) => {
  cy.contains('tr', texto)
    .find(`input[type="${tipo}"]`)
    .first()
    .check({ force: true });
})
Cypress.Commands.add('ClicarBotao', (button) => {
      cy.contains('button', button)
      .click()
})
Cypress.Commands.add('ChecarPagina', (titulo, url) => {
  cy.contains(titulo),
  cy.url().should('include', url)
})
Cypress.Commands.add('ClicarNaAba', (aba,texto) => {
  cy.contains(`[role="${aba}"]`, texto).click();
})
Cypress.Commands.add('ObterFormSenha', (control, text) => {
      cy.get(`vs-input-password[formcontrolname="${control}"]`).find('input').type(text)
})
Cypress.Commands.add('ObterFormCnpj', (control, text) => {
      cy.get(`vs-input-cnpj[formcontrolname="${control}"]`).find('input').type(text)
})
Cypress.Commands.add('ObterFormSelect', (control, text) => {
  cy.get(`[formcontrolname="${control}"]`).find('p-dropdown')
  .click()

  cy.get('arai-label').contains(text)
  .click()
})
Cypress.Commands.add('ObterFormData', (control) => {
  cy.get(`[formcontrolname="${control}"]`).click()

  cy.get('.p-datepicker-today')
    .find('.p-datepicker-day')
    .click()
})