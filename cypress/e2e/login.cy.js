describe('Login', () => {
  it('deve realizar login com sucesso', () => {
    cy.login('fabricio', 'fabri1320')
  })
})
