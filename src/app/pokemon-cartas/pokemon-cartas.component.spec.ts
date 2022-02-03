import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCartasComponent } from './pokemon-cartas.component';

describe('PokemonCartasComponent', () => {
  let component: PokemonCartasComponent;
  let fixture: ComponentFixture<PokemonCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCartasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
