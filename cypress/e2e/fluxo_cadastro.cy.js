// Importação dos Page Objects para manter o arquivo de teste limpo
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import cadastroPage from '../support/pages/CadastroPage'; 

describe('Fluxo de Acesso - Automation Exercise', () => {

  // Hook beforeEach: Executa antes de CADA teste (it)
  // Garante que o navegador abra e vá para a tela de login, evitando repetição de código (DRY)
  beforeEach(() => {
    homePage.abrirNavegador();
    homePage.validarQueCarregou();
    homePage.irParaLogin();
  });

  it('Deve navegar da Home para a tela de Login corretamente', () => {
    loginPage.validarPaginaDeLogin();
  });

  it('Deve tentar cadastrar com usuário inválido (falta de dados)', () => {
    loginPage.preencherCadastroErro('teste', 'teste'); 
  });

  it('Deve realizar o cadastro completo com sucesso', () => {
    
    // ESTRATÉGIA DE DADOS DINÂMICOS:
    // Uso Date.now() para gerar um email único a cada execução
    // Isso evita o erro de "Email already exist" ao rodar o teste várias vezes
    const emailDinamico = `teste${Date.now()}@teste.com`;
    
    // Passo 1: Preenchimento inicial (Nome/Email)
    loginPage.preencherCadastroSucesso('Juan Teste', emailDinamico);

    // MASSA DE DADOS (Fixture no código):
    // Criei um objeto para organizar os dados que serão passados para o formulário
    const dadosDoUsuario = {
        password: '123456',
        day: '10',
        month: 'April', // Importante: O texto deve ser idêntico ao do site
        year: '2000',
        firstName: 'Juan',
        lastName: 'Rodrigues',
        company: 'QA Ltda',
        address: 'Rua Automacao, 100',
        address2: 'Apto 101',
        country: 'United States',
        state: 'California',
        city: 'Los Angeles',
        zipcode: '90001',
        mobileNumber: '1199999999'
    };

    // Passo 2: Preenchimento do formulário detalhado usando o Page Object
    cadastroPage.preencherFormulario(dadosDoUsuario);
    
    // Passo 3: Validação final (Check)
    cadastroPage.validarContaCriada();
  });

  // Cenário de Exceção: Validar regra de duplicidade
  it('Deve bloquear cadastro com e-mail duplicado', () => {
    const emailDuplicado = 'teste@teste.com';   
    loginPage.preencherCadastroErro('Usuário Duplicado', emailDuplicado);
    
    // Asserção para garantir que a mensagem de erro apareceu
    cy.contains('Email Address already exist!').should('be.visible');
  });

});