Cypress.Commands.add(
  'login',
  (usuario, senha, codigoCliente = '1') => {
    cy.visit('/#autenticar')

    cy.get('vs-input-text[formcontrolname="usuario"]')
      .find('input')
      .clear()
      .type(usuario)

    cy.get('vs-input-password[formcontrolname="senha"]')
      .find('input')
      .clear()
      .type(senha, { log: false })

    cy.get('vs-input-text[formcontrolname="codigoCliente"]')
      .find('input')
      .clear()
      .type(codigoCliente)

    cy.get('p-checkbox[formcontrolname="guardarAutenticacao"]')
      .click()

    cy.contains('button', 'Acessar')
      .click()
      
        
    cy.url().should('not.include', '/autenticar')
  }
)
