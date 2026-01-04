import homePage from '../support/pages/HomePage';
import contatoPage from '../support/pages/ContatoPage';

describe('Fluxo de Fale Conosco - Automation Exercise', () => {
    beforeEach(() => {
        homePage.abrirNavegador();
        homePage.validarQueCarregou();
        homePage.irParaContato(); 
    });
    it('Deve navegar da Home para a tela de Contato corretamente', () => {
        contatoPage.validarPaginaDeContato();
    });

it('Deve enviar uma mensagem de contato com sucesso', () => {
        // O método abaixo agora faz TUDO: preenche, envia E valida o sucesso.
        contatoPage.preencherContato(
            'Teste', 
            'email@teste.com', 
            'Assunto', 
            'Mensagem', 
            'teste.txt'
        );
    });
});