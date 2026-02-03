describe('US001: Validacao de tela de Login', () => {

  beforeEach(() => {
    cy.visit('http://192.168.2.25:11090/#/autenticar')
  });

  it('Validação de pagina', () => {
    checarPagina('Swag Labs', 'http://192.168.2.25:11090')
    cy.get('[data-test="username"]').should('be.visible').and('have.attr', 'type', 'text')
    cy.get('[data-test="password"]').should('be.visible').and('have.attr', 'type', 'password')
    cy.get('input[value="Login"]').should('be.visible')
  })

  const cenariosLogin = [
    { descricao: 'Login efetuado com sucesso', username: 'standard_user', password: 'secret_sauce', sucesso: true, pagina: { titulo: 'Products', url: '/inventory.html' } },
    { descricao: 'Login com dados inválidos', username: 'standard_user', password: 'senha_errada', erro: 'Epic sadface: Username and password do not match any user in this service',pagina: { titulo: 'Swag Labs', url: 'saucedemo.com' }},
    { descricao: 'Login com usuario bloqueado', username: 'locked_out_user', password: 'secret_sauce', erro: 'Epic sadface: Sorry, this user has been locked out.',pagina: { titulo: 'Swag Labs', url: 'saucedemo.com' }},
    { descricao: 'Login sem username', username: '', password: 'secret_sauce', erro: 'Epic sadface: Username is required', pagina: { titulo: 'Swag Labs', url: 'saucedemo.com' } },
    { descricao: 'Login sem password', username: 'locked_out_user', password: '', erro: 'Epic sadface: Password is required', pagina: { titulo: 'Swag Labs', url: 'saucedemo.com' }},
    { descricao: 'Login com formulário vazio', username: '', password: '', erro: 'Epic sadface: Username is required', pagina: { titulo: 'Swag Labs', url: 'saucedemo.com' }}
  ]

  cenariosLogin.forEach(({ descricao, username, password, erro, pagina }) => {
    it(descricao, () => {
      preencherDadosLogin(username, password)
      clicarBotao('Login')

      if (erro) {
        verificarMensagemErro(erro)
      }
      checarPagina(pagina.titulo, pagina.url)
    })
  })

})

// Intencionalmente local por limitação do desafio
function preencherDadosLogin(username, password) {
  if (username) cy.get('[data-test="username"]').type(username)
  if (password) cy.get('[data-test="password"]').type(password)
}

function clicarBotao(botao) {
  cy.get(`input[value="${botao}"]`).click();
}

function verificarMensagemErro(mensagem) {
  cy.get('.error-message-container').should('be.visible').and('contain.text', mensagem)
}

function checarPagina (tituloPagina, url) {
    cy.contains(tituloPagina).should('be.visible')
    cy.url().should('include', url)
}