class ListaNegociacoes {
    
        constructor() {
            this._negociacoes = []
        }
    
        adiciona(negociacao) {
            this._negociacoes.push(negociacao);
        }
        get negociacoes(){
            //a utilizacao do concat permite retornar uma copia da lista, tornando a original imutavel por metodos de array como .push ou .length
            return [].concat(this._negociacoes);
        }
    }