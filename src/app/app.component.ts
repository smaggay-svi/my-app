import { Component } from '@angular/core';
import { MyserviceService } from "./myservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  public pokemondata = [];
  public pokemonList;
  // public pokemonDetails = [];
  // public pokemonDetail;

  public pokemonType = [];

  constructor(private myservice: MyserviceService) {}

  ngOnInit() {
    this.myservice.getData().subscribe((data) => {
      this.pokemondata = Array.from(Object.keys(data), pokeName=>data[pokeName]);
      
      console.log(this.pokemondata);
      
      this.pokemonList = this.pokemondata[3];

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

}
