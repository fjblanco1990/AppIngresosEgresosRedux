export class IngresoEgresoModel {

    constructor(
        public descripcion: string,
        public monto: number,
        public tipo: string,
        public uid?: any,
    ) {
    }
}

export class ArrayPruebaOrden {
    constructor(
        public Nombre: string,
        public Apellido: string
    ){}
}



