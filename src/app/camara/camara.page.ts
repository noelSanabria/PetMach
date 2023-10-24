import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import {CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  imageSource:any;

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
  }

takePicture = async () => {
const image = await Camera.getPhoto({
  quality: 100,
  allowEditing: false,
  resultType: CameraResultType.Uri,
  source:CameraSource.Prompt,
  saveToGallery:true
  });


this.imageSource=this.domSanitizer.bypassSecurityTrustUrl(image.webPath ? image.webPath : "");


}
getPhoto()
{
  return this.imageSource;
}

  }


