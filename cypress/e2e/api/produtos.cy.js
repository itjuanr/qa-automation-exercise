describe('API - Produtos', () => {

    // Cenário de Sucesso (Happy Path)
    // Objetivo: Garantir que a leitura (GET) dos produtos está trazendo dados reais
    it('Deve retornar a lista de todos os produtos (GET)', () => {
        
        // cy.request: Dispara a requisição direto pro servidor (sem abrir browser)
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            // 1. Validação de Protocolo (HTTP Status)
            // 200 significa que a requisição chegou e voltou com sucesso
            expect(response.status).to.eq(200);

            // 2. Tratamento de Dados (Parsing)
            // A API retorna o corpo como Texto (String). O JSON.parse converte
            // esse texto em um Objeto JavaScript para que eu possa acessar os campos.
            const dados = JSON.parse(response.body);

            // 3. Validação de Regra de Negócio (Campos internos do JSON)
            expect(dados.responseCode).to.eq(200);
            
            // Verifico se a lista de produtos realmente tem itens (maior que 1)
            expect(dados.products).to.have.length.greaterThan(1);
            
            // Debug: Loga o nome do primeiro produto no console do Cypress para conferência visual
            cy.log(dados.products[0].name); 
        });
    });

    // Cenário Negativo (Segurança/Restrição)
    // Objetivo: Garantir que a API bloqueia ações proibidas (usar POST em rota de GET)
    it('Deve falhar ao tentar POST sem permissão (Teste Negativo)', () => {
        cy.request({
            method: 'POST', // Método incorreto propositalmente
            url: 'https://automationexercise.com/api/productsList',
            
            // DICA DE OURO: failOnStatusCode: false
            // Por padrão, o Cypress falha o teste se receber erro 4xx ou 5xx.
            // Como eu *espero* um erro (405), preciso dizer pro Cypress:
            // "Não falhe automaticamente, deixa que eu valido a resposta de erro".
            failOnStatusCode: false
        }).then((response) => {
            const dados = JSON.parse(response.body);
            
            // Valido se a API respondeu com o código 405 (Method Not Allowed)
            // Isso prova que a API está segura contra uso indevido
            expect(dados.responseCode).to.eq(405);
            expect(dados.message).to.eq("This request method is not supported.");
        });
    });
});