import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-elegir-mascota',
  templateUrl: './elegir-mascota.page.html',
  styleUrls: ['./elegir-mascota.page.scss'],
})
export class ElegirMascotaPage implements OnInit {
  mensaje: string = "";
  fotoMascota: SafeResourceUrl | undefined;
  fotosMascotas: { id: number, foto: SafeResourceUrl }[] = [];
  informacionExtra: string = "";
  raza: string = "";
  edad: number = 0;

  constructor(private rutaActiva: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.rutaActiva.queryParams.subscribe((params) => {
      if (params['nombreUsuario']) {
        this.mensaje = params['nombreUsuario'];
      }
      if (params['informacionExtra']) {
        this.informacionExtra = params['informacionExtra'];
      }
      if (params['raza']) {
        this.raza = params['raza'];
      }
      if (params['edad']) {
        this.edad = +params['edad']; // Convierte la cadena a número
      }
    });
  }

  ngOnInit() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    if (image && image.dataUrl) {
      const nuevaFoto = {
        id: this.fotosMascotas.length + 1,
        foto: this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl)
      };

      this.fotosMascotas.push(nuevaFoto);
    }
  }

  eliminarFoto(id: number) {
    this.fotosMascotas = this.fotosMascotas.filter(mascota => mascota.id !== id);
  }
}
