class LoginPage {

    get = {
        tituloLogin: () => cy.contains('h2', 'Login to your account'),
        tituloCadastroLogin: () => cy.contains('h2', 'New User Signup!'),

        inputEmailLogin: () => cy.get('[data-qa="login-email"]'), 
        inputSenhaLogin: () => cy.get('[data-qa="login-password"]'),
        botaoLogin: () => cy.get('[data-qa="login-button"]'),

        inputEmailCadastro: () => cy.get('[data-qa="signup-email"]'), 
        inputNameCadastro: () => cy.get('[data-qa="signup-name"]'),
        botaoCadastro: () => cy.get('[data-qa="signup-button"]'),
    }

    validarPaginaDeLogin() {
        cy.url().should('include', '/login');
        this.get.tituloLogin().should('be.visible');
    }

    validarPaginaDeCadastro() {
        cy.url().should('include', '/login');
        this.get.tituloCadastroLogin().should('be.visible');
    }

    preencherLogin(emaillogin, senhalogin) {
        this.get.inputEmailLogin().type(emaillogin);
        this.get.inputSenhaLogin().type(senhalogin);
        this.get.botaoLogin().click();
    }

    preencherCadastroErro(nomecadastro, emailcadastro) {
        this.get.inputNameCadastro().type(nomecadastro);
        this.get.inputEmailCadastro().type(emailcadastro);
        this.get.botaoCadastro().click();
        cy.url().should('include', '/login');
    }

    preencherCadastroSucesso(nomecadastro, emailcadastro) {
        this.get.inputNameCadastro().type(nomecadastro);
        this.get.inputEmailCadastro().type(emailcadastro);
        this.get.botaoCadastro().click();
        cy.url().should('include', '/signup');
    }

}

export default new LoginPage();