import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AboutModule } from './about/about.module';
import { CommonAppModule } from './common/common.module';
import { CoreModule } from './core/core.module';
import { DealersModule } from './dealers/dealers.module';
import { HomeModule } from './home/home.module';
import { LearnModule } from './learn/learn.module';
import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DealerComponent } from './dealers/dealer.component/dealer.component';
import { ProductComponent } from './products/product.component/product.component';
import { HomeComponent } from './home/home.component/home.component';
import { LearnComponent } from './learn/learn.component/learn.component';
import { AboutComponent } from './about/about.component/about.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product/:productId', component: ProductComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'distributors', component: DealerComponent},
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

const rootRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    HomeModule,
    LearnModule,
    DealersModule,
    ProductsModule,
    CoreModule,
    CommonAppModule,
    rootRouting,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
