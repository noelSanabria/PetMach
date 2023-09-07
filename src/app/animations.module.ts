import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate'; // Importa 'fadeIn' desde 'ng-animate'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [BrowserAnimationsModule],
  providers: [
    {
      provide: 'fade',
      useValue: trigger('fade', [
        transition('* => *', useAnimation(fadeIn)),
      ]),
    },
  ],
})
export class AnimationsModule {}
