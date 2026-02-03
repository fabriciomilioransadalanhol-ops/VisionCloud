describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://192.168.2.25:11090/#/autenticar')
  })

  it('deve realizar login com sucesso', () => {
      cy.get('vs-input-text[formcontrolname="usuario"]')
        .find('input')
        .type('fabricio')

      cy.get('vs-input-password[formcontrolname="senha"]')
        .find('input')
        .type('vsys4849')

      cy.get('vs-input-text[formcontrolname="codigoCliente"]')
        .find('input')
        .type('1')


      cy.get('p-checkbox[formcontrolname="guardarAutenticacao"]')
        .click()

      cy.contains('button', 'Acessar')
      .click()
      
        
      cy.url().should('not.include', '/autenticar')
  })
})
