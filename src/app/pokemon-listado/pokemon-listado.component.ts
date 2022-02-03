import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-listado',
  templateUrl: './pokemon-listado.component.html',
  styleUrls: ['./pokemon-listado.component.scss']
})
export class PokemonListadoComponent {
  public hazteConTodos: Pokemon[] = [
    {
      image:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number:"001",
      name: 'Bulbasaur',
      types: [
        Type.planta,
        Type.Veneno,
      ]

    }
  ];
  
}

interface Pokemon{
  image: string;
  number: string;
  name: string;
  types: Type[];
}

enum Type{
  planta= 'Planta',
  Veneno= 'Veneno'
}
