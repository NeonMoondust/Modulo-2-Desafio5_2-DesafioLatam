"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto = new _Impuestos["default"](500000, 10000);
var cliente = new _Cliente["default"]('Felipe Arriagada', impuesto);
console.log(impuesto);
console.log(cliente);
console.log(cliente.CalcularImpuesto());