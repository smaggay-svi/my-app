import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material";
import { Input } from '@angular/core';
import { AppComponent } from "../app.component";



@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.css']
})
export class PokemondetailsComponent implements OnInit {
  // @Input() pokemon: any;

  constructor(
    
  ) { }

  ngOnInit() {
  }

}
