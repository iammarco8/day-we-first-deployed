import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { Home2Component } from './pages/home2/home2.component';
import { FormsModule } from '@angular/forms';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { ServicesComponent } from './pages/services/services.component';
import { HeaderComponent } from './pages/partials/header/header.component';
import { FooterComponent } from './pages/partials/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    Home2Component,
    TutorialComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
