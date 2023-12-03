import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  contrasena: string = '';
  correo: string = '';
  nombre: string = '';
  apellido: string = '';
  mostrarMensaje: boolean = false;
  mostrarMensajeCorreo: boolean = false;
  mostrarMensajeNombre: boolean = false;
  mostrarMensajeApellido: boolean = false;
  correoValido: boolean = false;
  contrasenaValida: boolean = false;
  nombreValido: boolean = false;
  apellidoValido: boolean = false;
  registroExitoso: boolean = false;

  constructor(private authService: AuthService, private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  async register() {
    if (this.correoValido && this.contrasenaValida && this.nombreValido && this.apellidoValido) {
      const registered = await this.authService.register(this.nombre, this.contrasena);
      if (registered) {
        console.log('Usuario registrado correctamente', this.nombre);
        this.registroExitoso = true;
        setTimeout(() => {
          this.navCtrl.navigateRoot(['/login']);
        }, 3000); // Redirige al usuario a la página de inicio de sesión después de 3 segundos
      } else {
        console.log('Error al registrar el usuario');
      }
    } else {
      // Mostrar mensaje de validación general
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      }, 3000);
    }
  }

  validarContrasena() {
    if (this.contrasena === '') {
      this.mostrarMensaje = false;
      this.contrasenaValida = false;
    } else {
      const regex = /^(?=.*[0-9].*[0-9].*[0-9].*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])([a-zA-Z0-9]+)$/;

      if (regex.test(this.contrasena)) {
        this.mostrarMensaje = false;
        this.contrasenaValida = true;
      } else {
        this.mostrarMensaje = true;
        this.contrasenaValida = false;
      }
    }
  }

  validarCorreo() {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (this.correo === '') {
      this.mostrarMensajeCorreo = false;
    } else if (regexCorreo.test(this.correo)) {
      this.mostrarMensajeCorreo = false;
      this.correoValido = true;
    } else {
      this.mostrarMensajeCorreo = true;
      this.correoValido = false;
    }
  }

  validarNombre() {
    const regexNombre = /^[a-zA-Z]+$/;

    if (regexNombre.test(this.nombre)) {
      this.mostrarMensajeNombre = false;
      this.nombreValido = true;
    } else {
      this.mostrarMensajeNombre = true;
      this.nombreValido = false;
    }
  }

  validarApellido() {
    const regexApellido = /^[a-zA-Z]+$/;

    if (regexApellido.test(this.apellido)) {
      this.mostrarMensajeApellido = false;
      this.apellidoValido = true;
    } else {
      this.mostrarMensajeApellido = true;
      this.apellidoValido = false;
    }
  }
}
