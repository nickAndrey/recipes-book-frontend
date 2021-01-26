import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipeModel } from '../../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipeId: string;
  recipe: IRecipeModel;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((item) => (this.recipeId = item.id));
    this.recipeService.read(this.recipeId).subscribe((data) => (this.recipe = data[0]));
  }
}
