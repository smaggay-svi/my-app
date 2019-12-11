import { Component, Output, EventEmitter } from '@angular/core';
import { MyserviceService } from "./myservice.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from "@angular/material";
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @Output() selected = new EventEmitter();
  @Output() opened = new EventEmitter();
  title = 'my-app';

  pokemondata: any;
  pokemonDetail: any;

  constructor(
    private dialog: MatDialog,
    private myservice: MyserviceService
    ) {}

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.myservice.getData().subscribe((data) => {
      console.log(data['results']);
      this.pokemondata = data['results'];
    });
  }

  getId(url: String) {
    return url.split('/')[6];
  }

  getImg(url: string) {
  const id = url.split('/');
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[6]}.png`;
  return imgUrl;
  }

 
  getPokeDetails(url: String) {
    this.myservice.getDetails(url).subscribe((data) => {
      this.pokemonDetail = data['types'];
      console.log(this.pokemonDetail);


      this.dialog.open(PokemondetailsComponent, {
        height: '300px',
        data: {indPokemon: this.pokemonDetail}

      })
    });
  }

}




