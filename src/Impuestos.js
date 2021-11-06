class Impuestos{
    constructor(monto_bruto_anual = 0, deducciones = 0){
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }

    get monto_bruto_anual(){return this._monto_bruto_anual;}
    set monto_bruto_anual(monto_bruto_anual){this._monto_bruto_anual = monto_bruto_anual;}
    
    get deducciones(){return this._deducciones;}
    set deducciones(deducciones){this._deducciones = deducciones;}
}

export default Impuestos;