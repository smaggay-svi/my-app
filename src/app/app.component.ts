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

  constructor(private myservice: MyserviceService) {}

  ngOnInit() {
    this.myservice.getData().subscribe((data) => {
      this.pokemondata = Array.from(Object.keys(data), k=>data[k]);
      
      console.log(this.pokemondata);
      
      this.pokemonList = this.pokemondata[3];

    });
  }

}
