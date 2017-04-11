import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }  from './app.component';
import { MainMenuComponent }  from './main-menu/main-menu.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { ProductsComponent }  from './products/products.component';
import { ProductsService }  from './products/products.service';
import { HotCategoriesComponent }  from './hot-categories/hot-categories.component';
import { FooterComponent }  from './footer/footer.component';
import { ZipComponent }  from './zip/zip.component';
import { ZipService }  from './zip/zip.service';
import { EPCSessionStorage } from './utils/service/epc-session-storage.service';
import { HomeComponent } from './home/home.component';
import { EPCEmitterService } from './utils/service/epc-emitter.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
 { path: 'init', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/init', pathMatch: 'full' }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HomeComponent, MainMenuComponent, DashboardComponent, FooterComponent, 
                  HotCategoriesComponent, ProductsComponent, ZipComponent, LoginComponent],
  providers : [ {provide: LocationStrategy, useClass: HashLocationStrategy}, ZipService,ProductsService,EPCSessionStorage, EPCEmitterService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
