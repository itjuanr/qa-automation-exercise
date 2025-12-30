import homePage from '../support/pages/HomePage';
import contatoPage from '../support/pages/ContatoPage';

describe('Fluxo de Acesso - Automation Exercise', () => {

  it('Deve navegar da Home para a tela de Contato corretamente', () => {

    homePage.abrirNavegador();
    homePage.validarQueCarregou();
    homePage.irParaContato();

    contatoPage.validarPaginaDeContato();
  });

    it('Deve tentar enviar uma mensagem de contato', () => {
  
      homePage.abrirNavegador();
      homePage.irParaContato();

      contatoPage.preencherContato('Teste', 'emailerrado@teste.com', 'Assunto Teste', 'Mensagem Teste', 'teste.txt');
    });
});