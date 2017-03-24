import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent }  from './app.component';
import { MainMenuComponent }  from './main-menu/main-menu.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { AdBannersComponent }  from './ad-banners/ad-banners.component';
import { HotCategoriesComponent }  from './hot-categories/hot-categories.component';
import { FooterComponent }  from './footer/footer.component';
import { ZipComponent }  from './zip/zip.component';
import { ZipService }  from './zip/zip.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpModule],
  declarations: [ AppComponent,MainMenuComponent, DashboardComponent, FooterComponent, HotCategoriesComponent, AdBannersComponent, ZipComponent],
  providers : [ ZipService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
