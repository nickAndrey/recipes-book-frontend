import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { IRecipeModel } from '../../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: IRecipeModel[];
  displayedColumns = [
    'name',
    'cookingmethod',
    'recipecategory',
    'recipecuisine',
    'datecreated',
    'actions',
  ];

  infoAboutAddedElement: any;

  constructor(private recipeService: RecipesService, private activatedRoute: ActivatedRoute) {}

  getRecipes(): void {
    this.recipeService.read().subscribe((data) => {
      this.recipes = data.rows;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => (this.infoAboutAddedElement = data));
    this.getRecipes();
  }

  onDeleteRecipe(id: IRecipeModel['id']): void {
    this.recipeService.delete(id).subscribe((data) => {
      console.log(data);
      this.getRecipes();
    });
  }
}
