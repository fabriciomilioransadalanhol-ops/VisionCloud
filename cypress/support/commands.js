Cypress.Commands.add('Login', (usuario, senha, codigoCliente = '1') => {

  if(usuario) cy.ObterFormNome('usuario', usuario)

  if(senha) cy.ObterFormNome('senha', senha)

  if(codigoCliente) cy.ObterFormNome('codigoCliente', codigoCliente)

  cy.ClicarBotao('Acessar')
  
})
Cypress.Commands.add('CadastraUsuario',(nome, cpf, login, email, senha, confirmaSenha) => {
  
    cy.ClicarnoMenu('Usuários')

    cy.ClicarNoSubMenu('Usuários')

    cy.ClicarBotao('Novo')

    if(nome) cy.ObterFormNome('nomeCompleto', nome)

    if(cpf) cy.ObterFormNome('cpf', cpf)

    if(login) cy.ObterFormNome('login', login)

    if(email) cy.ObterFormNome('email', email)

    if(senha) cy.ObterFormNome('senha', senha)

    if(confirmaSenha) cy.ObterFormNome('confirmarSenha', confirmaSenha)

    cy.ClicarNaAba('tab', 'Empresas');

    cy.MarcarInputPorTexto('checkbox', 'novooo')

    cy.ClicarBotao('Cadastrar')
})
Cypress.Commands.add('VerificarMensagemErro', (mensagem) => {
  cy.contains('.p-toast-detail', mensagem).should('be.visible')
})
Cypress.Commands.add('ObterFormNome', (control, text) => {
    cy.get(`vs-input-text[formcontrolname="${control}"]`).find('input').type(text)
})
Cypress.Commands.add('MarcarInputPorTexto', (tipo, texto) => {
  cy.contains('tr', texto)
    .find(`input[type="${tipo}"]`)
    .first()
    .check({ force: true });
})
Cypress.Commands.add('ClicarBotao', (button) => {
      cy.contains('button', button)
      .should('be.visible')
      .and('not.be.disabled')
      .click()
})
Cypress.Commands.add('ChecarPagina', (titulo, url) => {
  cy.contains(titulo),
  cy.url().should('include', url)
})
Cypress.Commands.add('ClicarNaAba', (aba,texto) => {
  cy.contains(`[role="${aba}"]`, texto).click();
})
Cypress.Commands.add('ClicarNoMenu', (menu) => {
  cy.contains('span.menu-title', menu)
    .should('be.visible')
    .click()
})
Cypress.Commands.add('ClicarNoSubMenu', (submenu) => {
  cy.contains('span.menu-title', submenu)
    .should('be.visible')
    .click()
})



