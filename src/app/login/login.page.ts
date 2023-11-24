import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef, static: false }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  formLogin = {
    nombre: "",
    password: ""
  }

  constructor(private router: Router, private animationCtrl: AnimationController,private authService: AuthService, private navCtrl: NavController, private storage: Storage) { }

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

  iniciarSesion() {
    console.log("nombre" + this.formLogin.nombre);
    console.log("password" + this.formLogin.password);

    if (!this.formLogin.nombre) {
      alert("El campo 'Nombre de Usuario' no puede estar vacío.");
      return;
    }

    if (this.validarPassword(this.formLogin.password)) {
      setTimeout(() => {
        let datosEnviar: NavigationExtras = {
          queryParams: { nombreUsuario: this.formLogin.nombre }
        }
        this.router.navigate(['/elegir-mascota'], datosEnviar);
      }, 3000);
    } else {
      alert("La contraseña no cumple con los requisitos.");
    }
  }

  validarPassword(password: string): boolean {
    // Validar si la contraseña cumple con los requisitos
    const regex = /^(?=.*[0-9]{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]{1}).{8,}$/;
    return regex.test(password);
  }

  play() {
    this.animation.play();
  }

  stop() {
    this.animation.stop();
  }
}
