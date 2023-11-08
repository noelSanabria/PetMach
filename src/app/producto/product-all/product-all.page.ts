import { Component, OnInit } from '@angular/core';
import { ClProducto } from '../model/Clproducto';
@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.page.html',
  styleUrls: ['./product-all.page.scss'],
})
export class ProductAllPage implements OnInit {
  msgError = ""
  buttonEliminarDisabled = false
  buttonLeerDisabled = false
  buttonActualizarDisabled = false
  buttonCrearDisabled = false
  producto: ClProducto = { idProducto: 0, codigo: '', nombreprod: '', precio: 0, cantidad: 0,rut:0, dv:'',enfermedad:'',fonocontacto:0,categoria:'',
  editorial:'',raza:'',edad:0,altura:0 , hrini:'',hrfin:'',direccion:''};;
  constructor() { }
  ngOnInit() {  }
  public id: string = '';


  leer() {}
  eliminar() { }
  grabar() { }
  actualizar() { }
  grabarActualizarAutomatico() { }
}
