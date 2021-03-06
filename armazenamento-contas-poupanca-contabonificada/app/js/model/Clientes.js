class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    remover(cpf) {
        const cliente = this.pesquisar(cpf);
        if (cliente) {
            const indice = this.clientes.indexOf(cliente);
            this.clientes.splice(indice, 1);
        }
    }
    listar() {
        return this.clientes;
    }
}
