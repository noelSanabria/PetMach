export class Usuario {
  // si no Inicializo los valores, da Error
  // Por eso es el constructor por obligación
  id: number;
  nombre: string;
  mail: string;
  password: string;
  cfecha: Date;

  // si no Inicializo los valores, da Error
    constructor(obj: any){
        this.id = obj && obj.id || null
        this.nombre = obj && obj.nombre || null
        this.mail = obj && obj.mail || null
        this.password = obj && obj.password || null
        this.cfecha = obj && obj.cfecha || null
    }
}
