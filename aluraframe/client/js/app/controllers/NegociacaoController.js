class NegociacaoController {

    //now this set of code will do the query into the DOM only once
    constructor() {
        let $=document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model));
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        // this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        // this._mensagemView.update(this._mensagem);
    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();

    }

    _criaNegociacao() {
        
        //tres metodos de converter a data de string para formato correto
        //1 - como parametros de date (*mes 0-11)   
            // let data = new Date(...this._inputData // ... spread operator
            //     .value.split('-')
            //     .map((item, indice) => item - indice % 2;)
            //);

        //2 - como array ano, mes, dia    
            //let data = new Date(this._inputData.value.split('-'));

        //3 - como uma string com  ',' em vez de '-'
            //let data = new Date(this._inputData.value.replace(/-/g, ','));
            
        //adicao do helper data
        //let helper = new DateHelper();
        //com a adicao de static nos metodos, a classe nao precisa (e nao pode) mais ser instaciada

        // //this set of code will have to do a query into de DOM each time the event is trigged - poor for performance
        // let $=document.querySelector.bind(document); //criando uma variável que se mantém conectada com o DOM através do "bind"
        // let inputData = $('#data');
        // let inputQuantidade =  $('#quantidade');
        // let inputValor = $('#valor');        

          return new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
          );
    }            

    adiciona(event) {
        
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        // this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();
    }

    apaga() {
        
            this._listaNegociacoes.esvazia();
            // this._negociacoesView.update(this._listaNegociacoes);
        
            this._mensagem.texto = 'Negociações apagadas com sucesso';
            this._mensagemView.update(this._mensagem);
    }
}   