import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonAppModule } from './../common/common.module';

import { HomeComponent } from './home.component/home.component';

@NgModule({
  imports: [
    CommonModule,
    CommonAppModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
