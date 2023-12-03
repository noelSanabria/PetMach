import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../auth.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef, static: false }) card!: ElementRef<HTMLIonCardElement>;
  
  private animation!: Animation;
  
  contrasena: string = '';
  correo: string = '';
  mostrarMensaje: boolean = false;
  mostrarMensajeCorreo: boolean = false;
  correoValido: boolean = false;
  contrasenaValida: boolean = false;
  nombre: string = '';
  mostrarMensajeNombre: boolean = false;
  
  constructor(private router: Router, private animationCtrl: AnimationController,private authService: AuthService,private navCtrl: NavController, private storage: Storage,private toastController: ToastController ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(4000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }

  play() {
    this.animation.play();
  }

  stop() {
    this.animation.stop();
  }

  async login() {
    const loggedIn = await this.authService.login(this.nombre, this.contrasena);
    if (loggedIn) {
      // Inicializa datosEnviar antes de usarlo
      let datosEnviar: NavigationExtras = {
        queryParams: { 
          nombreUsuario: this.nombre
        },
      };

      // Utiliza la variable inicializada al navegar
      this.router.navigate(['/elegir-mascota'], datosEnviar);
    } else {
      this.presentToast('Usuario no creado. Regístrate primero.');
      console.log('Credenciales incorrectas');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'danger',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
        },
      ],
    });
    toast.present();
  }

  async register() {
    const registered = await this.authService.register(this.nombre, this.contrasena);
    if (registered) {
      console.log('Usuario registrado correctamente', this.nombre);
    } else {
      console.log('Error al registrar el usuario');
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

  validarNombre() {
    const regexNombre = /^[a-zA-Z]+$/;

    if (regexNombre.test(this.nombre)) {
      this.mostrarMensajeNombre = false;
    } else {
      this.mostrarMensajeNombre = true;
      setTimeout(() => {
        this.mostrarMensajeNombre = false;
      }, 2000);
    }
  } 
}
