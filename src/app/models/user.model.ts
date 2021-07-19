export class Usuario {

    //Metodo estatico que genera una nueva instancia de mi model
    static formFireBase({correo, uid, nombre}: any) {
        return new Usuario(uid, nombre, correo);
    }

    constructor(
        public uid?: string,
        public nombre?: string,
        public correo?: string,
    )
    {

    }
}