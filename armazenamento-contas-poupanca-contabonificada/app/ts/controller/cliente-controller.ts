class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;

    private clientes: Clientes;
    private contas: Contas;

    constructor() {
        this.inputNome = 
            <HTMLInputElement>document.querySelector('#nome');
        this.inputCpf = 
            <HTMLInputElement>document.querySelector('#cpf');
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#numConta")
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }

    criar(evento: Event) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value))

        let novoCliente = new Cliente(
            this.inputNome.value,
            this.inputCpf.value,
            novaConta
        );

        this.clientes.inserir(novoCliente);
        this.contas.inserir(novaConta);
    }

    listarClienteNoHTML() {
        this.clientes.listar().forEach(
            cliente => {
                this.listar(cliente);
            }
        );
    }

    listar(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    pesquisar() {
        let cpfCliente = prompt('Digite o cpf do cliente: ');
        let cliente =  this.clientes.pesquisar(cpfCliente);
        if(cliente) {
            alert(`${cliente}`);
        }  
        else{
            alert('Cliente inexistente');  
        }                        
    }
}