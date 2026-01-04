class CadastroPage {

    // Mapeamento dos elementos (Locators)
    // Optei por usar um objeto 'get' para deixar os seletores organizados num lugar só
    get = {
        // Radio Buttons e Checkboxes (identificados por ID)
        radioTitleMr: () => cy.get('#id_gender1'),
        checkNewsletter: () => cy.get('#newsletter'),
        checkOffers: () => cy.get('#optin'),

        // Inputs de Texto (priorizei o atributo data-qa por ser mais estável)
        inputPassword: () => cy.get('[data-qa="password"]'),
        inputFirstName: () => cy.get('[data-qa="first_name"]'),
        inputLastName: () => cy.get('[data-qa="last_name"]'),
        inputCompany: () => cy.get('[data-qa="company"]'),
        inputAddress: () => cy.get('[data-qa="address"]'),
        inputAddress2: () => cy.get('[data-qa="address2"]'),
        inputState: () => cy.get('[data-qa="state"]'),
        inputCity: () => cy.get('[data-qa="city"]'),
        inputZipcode: () => cy.get('[data-qa="zipcode"]'),
        inputMobileNumber: () => cy.get('[data-qa="mobile_number"]'),

        // Dropdowns / Selects
        selectDay: () => cy.get('[data-qa="days"]'),
        selectMonth: () => cy.get('[data-qa="months"]'),
        selectYear: () => cy.get('[data-qa="years"]'),
        selectCountry: () => cy.get('[data-qa="country"]'),

        // Botão de ação final
        btnCreateAccount: () => cy.get('[data-qa="create-account"]')
    }

    // Método principal para preencher o formulário
    // Recebe um objeto 'dados' para evitar passar dezenas de argumentos soltos
    preencherFormulario(dados) {
        // Para Radio Buttons e Checkboxes, uso o comando .check() ao invés de .click()
        this.get.radioTitleMr().check();

        this.get.inputPassword().type(dados.password);

        // Para elementos <select>, uso o comando .select() passando o texto da opção
        this.get.selectDay().select(dados.day);
        this.get.selectMonth().select(dados.month);
        this.get.selectYear().select(dados.year);

        this.get.checkNewsletter().check();
        this.get.checkOffers().check();

        // Preenchimento dos campos de texto padrão
        this.get.inputFirstName().type(dados.firstName);
        this.get.inputLastName().type(dados.lastName);
        this.get.inputCompany().type(dados.company);
        this.get.inputAddress().type(dados.address);
        this.get.inputAddress2().type(dados.address2);
        
        this.get.selectCountry().select(dados.country);

        this.get.inputState().type(dados.state);
        this.get.inputCity().type(dados.city);
        this.get.inputZipcode().type(dados.zipcode);
        this.get.inputMobileNumber().type(dados.mobileNumber);

        // Submissão do formulário
        this.get.btnCreateAccount().click();
    }
    
    // Validação de sucesso (Assertion)
    validarContaCriada() {
        // Verifico se o elemento que contém a mensagem de sucesso está visível
        cy.get('[data-qa="account-created"]').should('be.visible');
    }
}

export default new CadastroPage();