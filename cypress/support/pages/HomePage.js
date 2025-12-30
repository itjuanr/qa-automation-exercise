class HomePage {
    get = {
        logo: () => cy.get('img[alt="Website for automation practice"]'),
        menuSignupLogin: () => cy.contains('Signup / Login'),
        menuContactUs: () => cy.contains('Contact us')
    }

    abrirNavegador() {
        cy.visit('https://automationexercise.com/');
    }

    validarQueCarregou() {
        this.get.logo().should('be.visible');
    }

    irParaLogin() {
        this.get.menuSignupLogin().click();
    }

    irParaContato() {
        this.get.menuContactUs().click();
    }
}

export default new HomePage();