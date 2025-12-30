describe('Automação do Zero - Automation Exercise', () => {

  it('Deve acessar a home page e navegar para a página de Login', () => {
    cy.visit('https://automationexercise.com/')

    // Verifica se a imagem do logo está visível
    cy.get('img[alt="Website for automation practice"]').should('be.visible')

    // Clica no botão de Signup / Login
    cy.contains('Signup / Login').click()

    // Verifica se fomos para a url correta
    cy.url().should('include', '/login')

    // Verifica se o título da página de login apareceu
    cy.contains('h2', 'Login to your account').should('be.visible')
  })

})