
// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// service
import {ApiService} from './commonServices/api.service'

// class
import { Interceptor } from './http/interceptor';

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './dailog/alert/alert.component';
import { ConfirmationComponent } from './dailog/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [ApiService,{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
