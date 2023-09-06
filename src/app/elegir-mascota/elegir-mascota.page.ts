import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elegir-mascota',
  templateUrl: './elegir-mascota.page.html',
  styleUrls: ['./elegir-mascota.page.scss'],
})
export class ElegirMascotaPage implements OnInit {


  mensaje: string ="";

  constructor(private rutaActiva: ActivatedRoute) {

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['nombreUsuario'])
      {
        this.mensaje = params['nombreUsuario'];
      }
    })
  }

  ngOnInit() {
   
}

}
