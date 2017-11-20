class ListaNegociacoes {
    
        constructor(armadilha) {
            this._negociacoes = [];
            this._armadilha = armadilha; 
            // this._contexto = contexto;
        }
    
        adiciona(negociacao) {
            this._negociacoes.push(negociacao);
            this._armadilha(this);
            // Reflect.apply(this._armadilha, this._contexto, [this]);
        }
        get negociacoes(){
            //a utilizacao do concat permite retornar uma copia da lista, tornando a original imutavel por metodos de array como .push ou .length
            return [].concat(this._negociacoes);
        }
        esvazia()   {
            this._negociacoes = [];
            this._armadilha(this);
            // Reflect.apply(this._armadilha, this._contexto, [this]);
        }
    }