import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { MSectionComponent } from './components/m-section/m-section.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageCComponent } from './components/image-c/image-c.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FloatbarComponent } from './components/floatbar/floatbar.component';
import { StackbarComponent } from './components/stackbar/stackbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MainComponent,
    MSectionComponent,
    HeaderComponent,
    ImageCComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FloatbarComponent,
    StackbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainPageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ]
})
export class MainPageModule { }
