class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._clientes = new Array();
    }
    listar() {
        return this.toString();
    }
    adicionarDependente(cliente) {
        this._clientes.push(cliente);
    }
    listarDependentes() {
        return this._clientes;
    }
    removerDependentes(cpf) {
        let cli = this._clientes.find(cliente => cliente.cpf === cpf);
        let indice = this._clientes.indexOf(cli);
        this._clientes.splice(indice, 1);
    }
}
