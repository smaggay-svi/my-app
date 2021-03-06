import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MyserviceService } from "./myservice.service";
import { MatDialog, 
        MatDialogRef, 
        MAT_DIALOG_DATA, 
        MatDialogConfig
} from "@angular/material/dialog";
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // @Output() selected = new EventEmitter();
  // @Output() onClick = new EventEmitter();
  title = 'my-app';


  pokemondata: any;
  
  pokemonType: any;
  pokemonSprites: any;
  pokemonName: any;
  pokemonAbility: any;
  pokemonTypeList: any;
  pokemonDisplayFilter: any;

  isFiltered: number = 0;

  pokemonArray: any;


  private listTypeUrl: String ="";


  constructor(
    private dialog: MatDialog,
    private myservice: MyserviceService,
    // @Inject(MAT_DIALOG_DATA) public maindata: any
    ) {}

  ngOnInit() {
    this.getPokemonList();

    this.getPokemonTypes();
  }

  getPokemonList() {
    this.myservice.getData().subscribe((data) => {
      this.pokemondata = data['results'];
      console.log(data['results']);
      // this.pokemonArray = this.pokemondata.name;
      // console.log(this.pokemonArray[3]);
    });
  }

  getId(url: String) {
    return url.split('/')[6];
  }

  getImg(url: string) {
    const id = url.split('/');
    let imgUrl = "";
    if (id[6].length < 4) {
      imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[6]}.png`;
    }
    
    return imgUrl;
  }

 
  getPokeDetails(url: String) {
    this.myservice.getDetails(url).subscribe((data) => {
      this.pokemonType = data['types'];
      this.pokemonSprites = data['sprites'];
      this.pokemonName = data['species'];
      this.pokemonAbility = data['abilities'];
      console.log(this.pokemonType);
      console.log(this.pokemonSprites);

      this.dialog.open(PokemondetailsComponent, {
        height: '600px',
        width: '350px',
        data: {
          pokeType: this.pokemonType,
          pokeImg: this.pokemonSprites,
          pokeName: this.pokemonName,
          pokeAbility: this.pokemonAbility
        }
      })
    });
  }


  getPokemonTypes() {
    this.myservice.getTypeList().subscribe((data) => {
      this.pokemonTypeList = data['results'];
      console.log(this.pokemonTypeList);
    });
  }


  displayFilter() {
    if (this.listTypeUrl.length > 0) {
      this.myservice.getDisplayFilter(this.listTypeUrl).subscribe((data) => {
      this.pokemonDisplayFilter = data['pokemon'];
      console.log(this.pokemonDisplayFilter);
      });
      this.isFiltered++;

    } else {
      this.isFiltered = 0;
    }    
    console.log(this.listTypeUrl);
    console.log(this.isFiltered);
    // alert(this.displayFilter);
  }

  // clearFilter() {
  //   this.isFiltered = 0;
  // }


}




