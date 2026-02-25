Cypress.Commands.add('Login', (usuario, senha, codigoCliente = '1') => {

  if(usuario) cy.TesteForm('usuario', usuario)

  if(senha) cy.TesteForm('senha', senha)

  if(codigoCliente) cy.TesteForm('codigoCliente', codigoCliente)

  cy.ClicarBotao('Acessar')
  
})
Cypress.Commands.add('cadastraUsuario',(nome, cpf, login, email, senha, confirmaSenha) => {
  cy.visit('#/')

  
    cy.get('span.menu-title')
      .contains('Usuários')
      .click()

    cy.contains('span.menu-title', 'Usuários')
      .closest('.menu-item.menu-accordion')
      .click()

    cy.contains('button', 'Novo')
      .should('be.visible')
      .and('not.be.disabled')
      .click()

    cy.get('vs-input-text[formcontrolname="nomeCompleto"]')
      .find('input')
      .type(nome)

    cy.get('vs-input-mask[formcontrolname="cpf"]')
      .find('input')
      .type(cpf)

    cy.get('vs-input-text[formcontrolname="login"]')
      .find('input')
      .type(login)

    cy.get('vs-input-text[formcontrolname="email"]')
      .find('input')
      .type(email)

    cy.get('vs-input-password[formcontrolname="senha"]')
      .find('input')
      .type(senha)

    cy.get('vs-input-password[formcontrolname="confirmarSenha"]')
      .find('input')
      .type(confirmaSenha)

    cy.contains('p-tab','Empresas')
      .click()

    cy.contains('tr', 'novooo')
       .find('input[type="checkbox"]')
      .first()
      .check({ force: true })


     cy.contains('button', 'Cadastrar')
       .should('be.visible')
       .and('not.be.disabled')
       .click()
  }
)
Cypress.Commands.add('verificarMensagemErro', (mensagem) => {
  cy.contains('.p-toast-detail', mensagem).should('be.visible')
})

Cypress.Commands.add('TesteForm', (control, text) => {
    cy.get(`vs-input-text[formcontrolname="${control}"]`).find('input').type(text)
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



