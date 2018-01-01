import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GfCarouselComponent } from './gfcarousel/gfcarousel.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    GfCarouselComponent
],
  exports: [
    HeaderComponent,
    FooterComponent,
    GfCarouselComponent
]
})
export class CommonAppModule { }
