describe('Cadastrar Cliente', () => {
  beforeEach(() => {
    cy.session('usuarioLogin', () => {
      cy.Login('fabricio', 'fabri1320', '1')
      cy.ChecarPagina('Painel de Controle', '/#/painel')
    })
  })

  let erroGenerico = 'Existem erros no formulário. Por favor, corrija os campos destacados e tente novamente'

  const cenarios = [
    { descricaoCenario: 'Cadastro efetuado com sucesso', cnpj: '10793441000141', razaoSocial: 'Cliente Teste Cypress LTDA', nomeFantasia: 'Cliente Teste Cypress', representanteLegal: 'Fabricio', email: 'testeEmpresa@gmail.com', telefone: '11987654321', inscricaoEstadual: '1234567890', inscricaoMunicipal: '123456789012', classifPessoas: 'Teste Cypress', regimeTributario: 'Lucro Real', grupoPessoa: 'grupo 99', porteEmpresa: 'Microempresa (ME)', observacao: 'Observação de teste', endereco: 'Rua Teste, 123', bairro: 'Centro', cidade: 'São Paulo', estado: 'SP', cep: '01001-000' },
  ]

  cenarios.forEach((cenario) => {
    it(`Cenário: ${cenario.descricaoCenario}`, () => {
      cy.visit('/#/pessoas/listar')
      cy.CadastraCliente(cenario.cnpj, cenario.razaoSocial, cenario.nomeFantasia, cenario.representanteLegal, cenario.email, cenario.telefone, cenario.inscricaoEstadual, cenario.inscricaoMunicipal, cenario.classifPessoas, cenario.regimeTributario, cenario.grupoPessoa, cenario.porteEmpresa, cenario.observacao, cenario.endereco, cenario.bairro, cenario.cidade, cenario.estado, cenario.cep)
    })
  })
})