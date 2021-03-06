import { classicNameResolver } from "../../node_modules/typescript/lib/typescript";

let contaController = new ContaController();
let clienteController = new ClienteController();

// contaController.listar();

const c1 = new Conta('1', 100);
const c2 = new Conta('2', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

const cli1 = new Clientes;
cli1.inserir(new Cliente('bruna', '12345', new Conta('4', 100)));
cli1.inserir(new Cliente('maria', '54321', new Conta('5', 100)));

let cliEsp = new ClienteEspecial('joao', '123456', c1);
cliEsp.adicionarDependente(new Cliente('jose', '98765', cb1));
cliEsp.adicionarDependente(new Cliente('carlos', '987650', c2));

console.log('Dependentes do cliente especial: ' + cliEsp.listarDependentes())
cliEsp.removerDependentes('987650')
console.log('Dependentes do cliente especial: ' + cliEsp.listarDependentes())

console.log('Clientes: '+ cli1.listar());

cli1.remover('54321');

console.log('Clientes: '+ cli1.listar);

console.log(cli1.pesquisar('12345'));


console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
