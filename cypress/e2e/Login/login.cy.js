describe('Login', () => {

  const cenarios = [
    { descricaoCenario: 'Login efetuado com sucesso', usuario: 'fabricio', senha: 'fabri1320', codigoCliente: '1', },
    { descricaoCenario: 'Login com usuario Inativo', usuario: 'teste.auto2', senha: '12345678', codigoCliente: '1', erro: 'Usuário desativado' },
    { descricaoCenario: 'Login com senha incorreta', usuario: 'fabricio', senha: '123456789', codigoCliente: '1', erro: 'Credenciais inválidas' },
    { descricaoCenario: 'Login com código de outro cliente', usuario: 'fabricio', senha: 'fabri1320', codigoCliente: '23' },
  ]

  cenarios.forEach((cenario) => {
    it(`Cenário: ${cenario.descricaoCenario}`, () => {
      cy.Login(cenario.usuario, cenario.senha, cenario.codigoCliente)

      if (cenario.erro) {
        cy.VerificarMensagemErro(cenario.erro)
      }
      if (cenario.descricaoCenario == 'Login efetuado com sucesso') {
        cy.ChecarPagina('Painel de Controle', '/painel')
      }
    })
  })
})



