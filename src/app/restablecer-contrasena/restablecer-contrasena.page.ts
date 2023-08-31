import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})


export class RestablecerContrasenaPage implements OnInit {


  formularioRestablecerContrasena: FormGroup;



  constructor(public fb: FormBuilder) {
    this.formularioRestablecerContrasena = this.fb.group({
      'correo': new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
  }

}



