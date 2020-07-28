import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//material design
import { MaterialDesign } from './material/material';

//component
import { LoginComponent } from './login/login.component';
import { BukuComponent } from './buku/buku.component';

import { HttpClientModule } from '@angular/common/http';
import { TambahDataComponent } from './tambah-data/tambah-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BukuComponent,
    TambahDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [
    TambahDataComponent,
  ]
  
})
export class AppModule { }
