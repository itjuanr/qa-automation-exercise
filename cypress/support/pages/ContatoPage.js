class ContatoPage {
    get = {
        tituloContato: () => cy.contains('h2', 'Get In Touch'),
        inputNome: () => cy.get('[data-qa="name"]'),
        inputEmail: () => cy.get('[data-qa="email"]'),
        inputAssunto: () => cy.get('[data-qa="subject"]'),
        inputMensagem: () => cy.get('[data-qa="message"]'),
        botaoAnexo: () => cy.get('[name="upload_file"]'),
        botaoEnviar: () => cy.get('[data-qa="submit-button"]'),
        statusSucesso: () => cy.contains('Success! Your details have been submitted successfully.')
    }

    validarPaginaDeContato() {
        cy.url().should('include', '/contact_us');
        this.get.tituloContato().should('be.visible');
    }

    preencherContato(nome, email, assunto, mensagem, anexo) {
        this.get.inputEmail().type(email);
        this.get.inputNome().type(nome);
        this.get.inputAssunto().type(assunto);
        this.get.inputMensagem().type(mensagem);
        this.get.botaoAnexo().attachFile(anexo);
        this.get.botaoEnviar().click();
        // Validação de sucesso (Assertion)
        this.get.statusSucesso().should('be.visible');
    }
}

export default new ContatoPage();