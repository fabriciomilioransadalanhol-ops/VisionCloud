describe('Cadastrar Usuário', () => {
  beforeEach(() => {
    cy.session('usuarioLogin', () => {
      cy.Login('fabricio', 'fabri1320', '1')
      cy.ChecarPagina('Painel de Controle', '/#/painel')
    })
  })

  let erroGenerico = 'Existem erros no formulário. Por favor, corrija os campos destacados e tente novamente'

  const cenarios = [
    { descricaoCenario: 'Cadastro efetuado com sucesso', nome: 'Teste Cypress', cpf: '12345678901', login: 'teste.cypress', email: 'teste.cypress@exemplo.com', senha: '12345678', confirmaSenha: '12345678' },
    { descricaoCenario: 'CPF já cadastrado', nome: 'Teste Cypress', cpf: '04389317008', login: 'teste.cypress2', email: 'teste.cypress2@exemplo.com', senha: '12345678', confirmaSenha: '12345678', erro: 'CPF já existe.' },
    { descricaoCenario: 'Campo nome vazio', nome: '', cpf: '12345678901', login: 'teste.cypress3', email: 'teste.cypress3@exemplo.com', senha: '12345678', confirmaSenha: '12345678', erro: erroGenerico },
    { descricaoCenario: 'Campo CPF vazio', nome: 'Teste Cypress', cpf: '', login: 'teste.cypress4', email: 'teste.cypress4@exemplo.com', senha: '12345678', confirmaSenha: '12345678', erro: erroGenerico },
    { descricaoCenario: 'Campo login vazio', nome: 'Teste Cypress', cpf: '12345678901', login: '', email: 'teste.cypress5@exemplo.com', senha: '12345678', confirmaSenha: '12345678', erro: erroGenerico },
    { descricaoCenario: 'Campo email vazio', nome: 'Teste Cypress', cpf: '12345678901', login: 'teste.cypress6', email: '', senha: '12345678', confirmaSenha: '12345678', erro: erroGenerico },
    { descricaoCenario: 'Campo senha vazio', nome: 'Teste Cypress', cpf: '12345678901', login: 'teste.cypress7', email: 'teste.cypress7@exemplo.com', senha: '', confirmaSenha: '12345678', erro: erroGenerico },
    { descricaoCenario: 'Campo confirmar senha vazio', nome: 'Teste Cypress', cpf: '12345678901', login: 'teste.cypress8', email: 'teste.cypress8@exemplo.com', senha: '12345678', confirmaSenha: '', erro: erroGenerico },
    { descricaoCenario: 'Campo confirmar senha diferente', nome: 'Teste Cypress', cpf: '12345678901', login: 'teste.cypress9', email: 'teste.cypress9@exemplo.com', senha: '12345678', confirmaSenha: '87654321', erro: erroGenerico },
    { descricaoCenario: 'Nome sem conter sobrenome', nome: 'Teste', cpf: '12345678901', login: 'teste.cypress10', email: 'teste.cypress10@exemplo.com', senha: '12345678', confirmaSenha: '12345678', erro: erroGenerico }
  ]

  cenarios.forEach((cenario) => {
    it(`Cenário: ${cenario.descricaoCenario}`, () => {

      cy.visit('/#/usuarios/cadastrar')
      cy.CadastraUsuario(cenario.nome, cenario.cpf, cenario.login, cenario.email, cenario.senha, cenario.confirmaSenha)

      if (cenario.erro) {
        cy.VerificarMensagemErro(cenario.erro)
      }
      if (cenario.descricaoCenario == 'Cadastro efetuado com sucesso') {
        cy.ChecarPagina('Painel de Controle', '/#/painel')
      }
    })
  })
})