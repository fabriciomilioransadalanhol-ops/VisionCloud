describe('Login', () => {
  beforeEach(() => {
    cy.visit('/#/autenticar')
  })
  const cenarios = [
    { descricaoCenario: 'Login efetuado com sucesso', usuario: 'fabricio', senha: 'fabri1320', sucesso: true, status: 200 },
    { descricaoCenario: 'Usuario Inativo', usuario: 'teste.auto2', senha: '12345678', erro: 'Usuário desativado', status: 400 },
    { descricaoCenario: 'Usuario vazio', usuario: '', senha: '', status: 400 },
    { descricaoCenario: 'Senha incorreta', usuario: 'fabricio', senha: '123456789', erro: 'Credenciais inválidas', status: 400},
  ]

  cenarios.forEach((cenario) => {
    it(`Cenário: ${cenario.descricaoCenario}`, () => {
      cy.Login(cenario.usuario, cenario.senha)

        if (cenario.erro) {
          cy.VerificarMensagemErro(cenario.erro)
        }
        if(cenario.descricaoCenario == 'Login efetuado com sucesso'){
          cy.ChecarPagina('Painel de Controle', '/painel')
        }
        
      })
    })
})



