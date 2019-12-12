import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Service and Http
import { MyserviceService } from "./myservice.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from "@angular/material/card";
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';
import { MatDialogModule, MatDialog } from "@angular/material/dialog";
import { MatPaginatorModule, MatFormField } from "@angular/material";
import { FilterPipe } from './filter.pipe';
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemondetailsComponent,
    FilterPipe
    // MatDialog
    // MatFormField
  ],
  entryComponents: [
    PokemondetailsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
    // FilterPipe
    // MatDialog
    // MatFormField
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
  // exports: [
  //   PokemondetailsComponent
  // ]
})

export class AppModule { 

}
