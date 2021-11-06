class Cliente{
    constructor(nombre = '', impuesto = {}){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}

    CalcularImpuesto() {return ((this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21);}
}
export default Cliente;