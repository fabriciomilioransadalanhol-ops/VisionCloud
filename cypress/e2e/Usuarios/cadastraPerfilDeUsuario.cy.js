describe('Cadastrar Perfil de Usuário', () => {
  beforeEach(() => {
    cy.session('usuarioLogin', () => {
      cy.visit('/#/autenticar')
      cy.Login('fabricio', 'fabri1320', '1')
      cy.url().should('include', '/#/painel');

    }) 
    cy.visit('/#/painel')
  })

  const cenarios = [
    { descricaoCenario: 'Cadastro efetuado com sucesso', nome: 'Perfil Teste Cypress', descricao: 'Descrição do Perfil Teste Cypress' },
    { descricaoCenario: 'Perfil já cadastrado', nome: 'Todas permissões', descricao: 'descrição padrão', erro: 'Já existe um registro com esse nome. Não será possível concluir o cadastro.' },
    { descricaoCenario: 'Campo nome vazio', nome: '', descricao: 'Descrição do Perfil Teste Cypress', erro: 'Existem erros no formulário. Por favor, corrija os campos destacados e tente novamente.'}, 
    { descricaoCenario: 'Campos nome e descrição vazios', nome: '', descricao: '', erro: 'Existem erros no formulário. Por favor, corrija os campos destacados e tente novamente.' },
  ]

  cenarios.forEach((cenario) => {
    it(`Cenário: ${cenario.descricaoCenario}`, () => {
      cy.CadastraPerfilUsuario(cenario.nome, cenario.descricao)

      if (cenario.erro) {
        cy.VerificarMensagemErro(cenario.erro)
      }
      if(cenario.descricaoCenario == 'Cadastro efetuado com sucesso'){//VERIFICAR A MENSAGEM DE SUCESSO
        cy.ChecarPagina('Painel de Controle', '/painel')
      }
  })
})
})