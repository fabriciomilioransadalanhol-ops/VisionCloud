
describe('Cadastrar Usuário', () => {
  beforeEach(() => {
    cy.session('usuarioLogin', () => {
      cy.Login('fabricio', 'fabri1320')
    }) 
    cy.visit('/#/usuarios/listar')
  })
  it('deve realizar cadastro com sucesso', () => {

    cy.visit('/#/usuarios/cadastrar')

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
  })
})