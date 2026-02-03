Cypress.Commands.add(
  'login',
  (usuario: string, senha: string, codigoCliente = '1') => {

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

    cy.contains('button', 'Acessar').click()
  }
)
