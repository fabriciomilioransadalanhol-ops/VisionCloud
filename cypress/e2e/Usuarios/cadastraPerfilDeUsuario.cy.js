describe('Cadastrar Perfil de Usuário', () => {
  beforeEach(() => {
    cy.session('usuarioLogin', () => {
      cy.Login('fabricio', 'fabri1320', '1')
      cy.ChecarPagina('Painel de Controle', '/#/painel')
    })
  })

  let erroGenerico = 'Existem erros no formulário. Por favor, corrija os campos destacados e tente novamente.'

  const cenarios = [
    { descricaoCenario: 'Cadastro efetuado com sucesso', nome: 'Perfil Teste Cypress', descricao: 'Descrição do Perfil Teste Cypress' },
    { descricaoCenario: 'Perfil já cadastrado', nome: 'Todas permissões', descricao: 'descrição padrão', erro: 'Já existe um registro com esse nome. Não será possível concluir o cadastro.' },
    { descricaoCenario: 'Campo nome vazio', nome: '', descricao: 'Descrição do Perfil Teste Cypress', erro: erroGenerico },
    { descricaoCenario: 'Campos nome e descrição vazios', nome: '', descricao: '', erro: erroGenerico },
  ]

  cenarios.forEach((cenario) => {
    it(`Cenário: ${cenario.descricaoCenario}`, () => {
      cy.visit('/#/usuarios/perfis-usuarios/listar')
      cy.CadastraPerfilUsuario(cenario.nome, cenario.descricao)

      if (cenario.erro) {
        cy.VerificarMensagemErro(cenario.erro)
      }
      if (cenario.descricaoCenario == 'Registro cadastrado com sucesso.') {
        cy.ChecarPagina('Painel de Controle', '/#/usuarios/perfis-usuarios/listar')
      }
    })
  })
})