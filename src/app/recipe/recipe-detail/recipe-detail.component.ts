import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;

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
          })
        }
      })
  }

  public volver() : void{
    this.router.navigate(["/recipes"]);
  }
}
