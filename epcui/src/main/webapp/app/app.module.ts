import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { CommonModule } from '@angular/common';

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

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule],
  declarations: [ AppComponent,MainMenuComponent, DashboardComponent, FooterComponent, HotCategoriesComponent, ProductsComponent, ZipComponent],
  providers : [ ZipService,ProductsService,EPCSessionStorage ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
