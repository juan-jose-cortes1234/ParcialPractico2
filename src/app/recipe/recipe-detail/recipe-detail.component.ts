import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';
import { Ingredient } from '../../ingredient/Ingredient';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  ingredienteMasUsado! : string;

  constructor(private route : ActivatedRoute,
            private recipeService : RecipeService,
            private router : Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>
      {
        const idRoute = params.get("id");
        console.log("entro al componente de detail");
        if (idRoute)
        {
          this.recipeService.getRecipe(+idRoute).subscribe((recipe)=>
          {
            this.recipe = recipe;
            console.log("comienza a calcular");
            this.ingredienteMasUsado = this.calcularIngredienteMasUsado(this.recipe);
          })
        }
        
      })
      
      
  }

  public volver() : void{
    this.router.navigate(["/recipes"]);
  }

  public calcularIngredienteMasUsado(recipe : Recipe) : string{
    console.log("calculando 1");
    // if (recipe.ingredientes.length=0) return ""
    console.log("calculando");
    var max : number = 0;
    var maxIndex : number = 0;
    for (let i = 0; i < this.recipe.ingredientes.length; i++) {
      
      if (+this.recipe.ingredientes[i].cantidad > max)
      {
          maxIndex = i;
          max = +this.recipe.ingredientes[i].cantidad;
          

      }
      
    }
    return this.recipe.ingredientes[maxIndex].nombre;
  }
}
