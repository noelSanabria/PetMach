import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

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

  constructor(private router: Router, private animationCtrl: AnimationController) { }

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

    setTimeout(() => {
      let datosEnviar: NavigationExtras = {
        queryParams: { nombreUsuario: this.formLogin.nombre }
      }
      this.router.navigate(['/elegir-mascota'], datosEnviar);
    }, 3000);
  }

  play() {
    this.animation.play();
  }

  stop() {
    this.animation.stop();
  }
}
