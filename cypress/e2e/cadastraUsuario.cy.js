describe('Cadastrar Usuário', () => {
  it('deve realizar cadastro com sucesso', () => {
    cy.login('fabricio', 'fabri1320')

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
      .type('Teste Automatizado QA')

    cy.get('vs-input-mask[formcontrolname="cpf"]')
      .find('input')
      .type('95080897090')

    cy.get('vs-input-text[formcontrolname="login"]')
      .find('input')
      .type('teste.auto')

    cy.get('vs-input-text[formcontrolname="email"]')
      .find('input')
      .type('fabricio@teste2.com')

    cy.get('vs-input-password[formcontrolname="senha"]')
      .find('input')
      .type('vsys4849')

    cy.get('vs-input-password[formcontrolname="confirmarSenha"]')
      .find('input')
      .type('vsys4849')

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