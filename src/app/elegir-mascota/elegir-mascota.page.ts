import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elegir-mascota',
  templateUrl: './elegir-mascota.page.html',
  styleUrls: ['./elegir-mascota.page.scss'],
})
export class ElegirMascotaPage implements OnInit {
  nombreUsuario: string | null = null; // Inicializar como null

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      // Verifica si el parámetro 'username' está presente
      if (params.has('username')) {
        // Obtén el valor del parámetro 'username' y asígnalo a la variable 'nombreUsuario'
        this.nombreUsuario = params.get('username');
        console.log('Nombre de usuario:', this.nombreUsuario);
      }
    });
  }
}
