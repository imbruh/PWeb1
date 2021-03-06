class ClienteEspecial extends Cliente {

    private _clientes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this._clientes = new Array<Cliente>();
    }

    listar() {
        return this.toString();
    }

    adicionarDependente(cliente: Cliente) {
        this._clientes.push(cliente);
    }

    listarDependentes() {
        return this._clientes;
    }

    removerDependentes(cpf: string) {
        let cli = this._clientes.find(cliente => cliente.cpf === cpf);
        let indice = this._clientes.indexOf(cli);
        this._clientes.splice(indice, 1);
    }
}