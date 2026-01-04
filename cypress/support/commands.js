Cypress.Commands.add('criarUsuarioViaAPI', (nome, email, senha) => {
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/createAccount',
        form: true, 
        body: {
            name: nome,
            email: email,
            password: senha,
            title: 'Mr',
            birth_date: '10',
            birth_month: '10',
            birth_year: '2000',
            firstname: nome,
            lastname: 'Teste',
            company: 'QA Ltda',
            address1: 'Rua QA',
            country: 'United States',
            zipcode: '12345',
            state: 'California',
            city: 'Los Angeles',
            mobile_number: '123456789'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
});