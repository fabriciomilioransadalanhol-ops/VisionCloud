describe('Cadastrar Usuário', () => {
   beforeEach(() => {
    cy.session('usuarioLogin', () => {
      cy.visit('/#/autenticar')
      cy.Login('fabricio', 'fabri1320', '1')
      cy.url().should('include', '/#/painel');
    }) 
    cy.visit('/#/painel')
  })

  const cenarios = [
    { descricaoCenario: 'Cadastro efetuado com sucesso', nome: 'Teste Cypress', cpf: '12345678901', login: 'teste.cypress', email: 'teste.cypress@exemplo.com', senha: '12345678', confirmaSenha: '12345678' },
    { descricaoCenario: 'CPF já cadastrado', nome: 'Teste Cypress', cpf: '04389317008', login: 'teste.cypress2', email: 'teste.cypress2@exemplo.com', senha: '12345678', confirmaSenha: '12345678' },
  ]

    cenarios.forEach((cenario) => {
      it(`Cenário: ${cenario.descricaoCenario}`, () => {
        cy.CadastraUsuario(cenario.nome, cenario.cpf, cenario.login, cenario.email, cenario.senha, cenario.confirmaSenha)

    })
  })
})
