import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondetailsComponent } from './pokemondetails.component';

describe('PokemondetailsComponent', () => {
  let component: PokemondetailsComponent;
  let fixture: ComponentFixture<PokemondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemondetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
