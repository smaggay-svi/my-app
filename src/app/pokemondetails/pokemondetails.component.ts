import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Input } from '@angular/core';
import { AppComponent } from "../app.component";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Script } from 'vm';




@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.css']
})
export class PokemondetailsComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit() {

    
    }
}


