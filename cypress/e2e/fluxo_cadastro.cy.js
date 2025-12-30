import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';


describe('Fluxo de Acesso - Automation Exercise', () => {

  it('Deve navegar da Home para a tela de Login corretamente', () => {

    homePage.abrirNavegador();
    homePage.validarQueCarregou();
    homePage.irParaLogin();

    loginPage.validarPaginaDeLogin();
  });

  it('Deve tentar logar com usuário inválido', () => {

    homePage.abrirNavegador();
    homePage.irParaLogin();

    loginPage.preencherLogin('emailerrado@teste.com', 'senha123');
  });

  it('Deve tentar cadastrar com usuário inválido', () => {

    homePage.abrirNavegador();
    homePage.irParaLogin();

    loginPage.preencherCadastroErro('teste', 'teste');
  });

  it('Deve tentar cadastrar com usuário válido', () => {

    homePage.abrirNavegador();
    homePage.irParaLogin();

    loginPage.preencherCadastroSucesso('teste','teste@teste.com');
  });

});