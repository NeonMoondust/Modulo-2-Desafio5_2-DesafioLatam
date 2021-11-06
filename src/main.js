import Cliente from './Cliente.js';
import Impuestos from './Impuestos.js';

const impuesto = new Impuestos(500000, 10000);
const cliente = new Cliente('Felipe Arriagada', impuesto);

console.log(impuesto);
console.log(cliente);
console.log(cliente.CalcularImpuesto());
