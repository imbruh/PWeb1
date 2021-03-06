class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    remover(cpf: string): void {
       const cliente = this.pesquisar(cpf);
       if(cliente) {
           const indice = this.clientes.indexOf(cliente);
           this.clientes.splice(indice, 1);
       }
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }
}