import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './Recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

constructor(private http : HttpClient) { }

//Metodo listar
public getRecipes() : Observable<Recipe[]>{
  return this.http.get<Recipe[]>('https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json')
}

//Metodo detalle
public getRecipe(id : number) : Observable<Recipe>{
  return this.http.get<Recipe>('https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/'+id+'/recipe.json')
}


}
