class Negociacao {

    constructor(data, quantidade, valor) {
        //utilizar o "_" é uma ocnvenção entre programadores para informar propriedades que não devem ser mudadas
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //only way of garanteeing your object won't be changed
    }
    // obtemVolume(){
    //     return this._quantidade*this._valor;
    // }
    // getData() {
    //     return this._data;
    // }
    // getQuantidade(){
    //     return this._quantidade;
    // }
    // getValor() {
    //     return this._valor;
    // }

    //utilização do "get something" permite usar obj.something instead of obj._something
    //a atribuições "obj.quantidade = 3" não funcionam
    get volume(){
        return this._quantidade*this._valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}