describe('Cadastrar Usuário', () => {
  beforeEach(() => {
    cy.session('usuarioLogin', () => {
      cy.Login('fabricio', 'fabri1320')
    }) 
    cy.visit('/#/usuarios/listar')
  })

  const cenarios = [
    { descricaoCenario: 'Cadastro efetuado com sucesso', nome: 'Teste Cypress', cpf: '12345678901', login: 'teste.cypress', email: 'teste.cypress@exemplo.com', senha: '12345678', confirmaSenha: '12345678' },
    { descricaoCenario: 'CPF já cadastrado', nome: 'Teste Cypress', cpf: '04389317008', login: 'teste.cypress2', email: 'teste.cypress2@exemplo.com', senha: '12345678', confirmaSenha: '12345678' },
  ]

  cenarios.forEach((cenario) => {
    it(`Cenário: ${cenario.descricaoCenario}`, () => {
      cy.CadastraUsuario(cenario.nome, cenario.cpf, cenario.login, cenario.email, cenario.senha, cenario.confirmaSenha)

        // if (cenario.erro) {
        //   cy.VerificarMensagemErro(cenario.erro)
        // }
        // if(cenario.descricaoCenario == 'Login efetuado com sucesso'){
        //   cy.ChecarPagina('Painel de Controle', '/painel')
        // }

    // cy.get('span.menu-title')
    //   .contains('Usuários')
    //   .click()

    // cy.contains('span.menu-title', 'Usuários')
    //   .closest('.menu-item.menu-accordion')
    //   .click()

    // cy.contains('button', 'Novo')
    //   .should('be.visible')
    //   .and('not.be.disabled')
    //   .click()

    // cy.get('vs-input-text[formcontrolname="nomeCompleto"]')
    //   .find('input')
    //   .type(nome)

    // cy.get('vs-input-mask[formcontrolname="cpf"]')
    //   .find('input')
    //   .type(cpf)

    // cy.get('vs-input-text[formcontrolname="login"]')
    //   .find('input')
    //   .type(login)

    // cy.get('vs-input-text[formcontrolname="email"]')
    //   .find('input')
    //   .type(email)

    // cy.get('vs-input-password[formcontrolname="senha"]')
    //   .find('input')
    //   .type(senha)

    // cy.get('vs-input-password[formcontrolname="confirmarSenha"]')
    //   .find('input')
    //   .type(confirmaSenha)

    // cy.contains('p-tab','Empresas')
    //   .click()

    // cy.contains('tr', 'novooo')
    //    .find('input[type="checkbox"]')
    //   .first()
    //   .check({ force: true })

    //  cy.contains('button', 'Cadastrar')
    //    .should('be.visible')
    //    .and('not.be.disabled')
    //    .click() 
  })
})
})